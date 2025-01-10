"use server";

import { apiUrl } from "@/config/configs";
import { cookies } from "next/headers";

export const logoutRequest = async () => {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value

  try {
    const response = await fetch(`${apiUrl}logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    (await cookies()).set("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: new Date(0),
      path: "/",
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};
