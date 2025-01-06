"use server"

import { config } from "@/config/configs";
import { cookies } from "next/headers";

const { apiUrl } = config;

export const loginRequest = async (login: string, password: string) => {
  try {
    const response = await fetch(`${apiUrl}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, password, }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();

    (await cookies()).set({
      name: "token",
      value: data.token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "strict",
      maxAge: 43200, // время жизни cookie 12 часов.
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};
