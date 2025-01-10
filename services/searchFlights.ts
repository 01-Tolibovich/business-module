"use server";

import { apiUrl } from "@/config/configs";
import { cookies } from "next/headers";

export const searchFlights = async (
  data: { cabin: string; flightType: string },
  language = "ru"
) => {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value;

  const paramsData = {
    language,
    ...data,
  };

  const string = new URLSearchParams(paramsData).toString();
  console.log(2222, string);

  try {
    const response = await fetch(`${apiUrl}search?${string}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();

    console.log(result);
    
    return result;
  } catch (error) {
    console.log(error);
  }
};
