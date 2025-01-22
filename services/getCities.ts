"use server";

import { apiUrl } from "@/config/configs";
import { cookies } from "next/headers";

type Translatable = {
  tj: string;
  en: string;
  uz: string;
  ru: string;
}

type ResponseItem = {
  item_code: string;
  country_code: string;
  country: Translatable;
  item: Translatable;
  airports: { 
    airport_code: string;
    airport: Translatable;
  }[];
}

type FormatedItem = {
  code: string;
  countryCode: string;
  countryName: Translatable;
  name: Translatable;
  isMain: boolean;
}

const formatResponse = (data: ResponseItem[]): FormatedItem[] => {
  const result: FormatedItem[] = [];

  data.forEach((item) => {
    result.push({
      code: item?.item_code,
      countryCode: item?.country_code,
      countryName: item?.country,
      name: item?.item,
      isMain: true,
    })

    if (item?.airports.length > 1) {
      item?.airports.forEach((airport) => {
        result.push({
          code: airport?.airport_code,
          countryCode: item?.country_code,
          countryName: item?.country,
          name: airport?.airport,
          isMain: false,
        })
      })
    }
  })

  return result;
}

export const getCities = async (cities: string, language = "ru", limit = 7) => {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value;

  const params = {
    language,
    value: cities,
    limit,
  };

  try {
    const response = await fetch(`${apiUrl}cities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(params),
    });

    if (response.ok) {
      const result = await response.json();

      return formatResponse(result);
    } else {
      console.log("Не удалось получить данные");
    }
  } catch (error) {
    console.error(error);
  }
};
