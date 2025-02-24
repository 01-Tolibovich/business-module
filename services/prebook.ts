"use server";

import { apiUrl } from "@/config/configs";
import { cookies } from "next/headers";

export const prebook = async (sessionAndRecId: object) => {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value;
  try {
    const response = await fetch(`${apiUrl}prebook`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(sessionAndRecId)
    });

    const data = await response.json();

    return await data;
  } catch (error) {
    console.log(error);
  }
};
