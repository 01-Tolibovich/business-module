"use server"

import { cookies } from "next/headers";
import { apiUrl } from "@/config/configs";

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

    const { data } = await response.json()

    return await data;
  } catch (error) {
    console.error(error);
  }
}