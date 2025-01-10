"use server";

import { apiUrl } from "@/config/configs";
import { cookies } from "next/headers";

type PassengerData = {
  adt: string;
  chd: string;
  ins: string;
  inf: string;
};

type Route = {
  fromAirportCode: string;
  toAirportCode: string;
  date: string;
};

type FlightSearchData = {
  routes: Route[];
  passengers: PassengerData;
  cabin: string;
  flightType: string;
};

const buildQueryParams = (data: FlightSearchData, language: string) => {
  const { cabin, flightType, passengers, routes } = data;

  const params = new URLSearchParams({
    language,
    cabin,
    flightType,
    "passengers[adt]": passengers.adt,
    "passengers[chd]": passengers.chd,
    "passengers[ins]": passengers.ins,
    "passengers[inf]": passengers.inf,
  });

  routes.forEach((route, index) => {
    params.append(`routes[${index}][from]`, route.fromAirportCode);
    params.append(`routes[${index}][to]`, route.toAirportCode);
    params.append(`routes[${index}][date]`, route.date);
  });

  return params.toString();
};

export const searchFlights = async (
  data: FlightSearchData,
  language = "ru"
) => {
  try {
    const cookieStore = cookies();
    const token = (await cookieStore).get("token")?.value;

    if (!token) {
      throw new Error("Пользователь не авторизован. Пожалуйста авторизуйтесь");
    }

    const queryString = buildQueryParams(data, language);

    const response = await fetch(`${apiUrl}search?${queryString}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch flights: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
