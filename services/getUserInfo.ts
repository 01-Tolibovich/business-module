"use server"

import { cookies } from "next/headers";
import { config } from "@/config";

const { apiUrl } = config;

export const getUserInfo = async () => {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value
  try {
    const response = await fetch(`${apiUrl}auth/corporates`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}