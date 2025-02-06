"use server";

import { apiUrl } from "@/config/configs";
import { cookies } from "next/headers";
// import { getHostUrl } from "./utils/getHostUrl";

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
  const cabin = data?.cabin;
  const flightType = data?.flightType;
  const passengers = data?.passengers;
  const routes = data?.routes


  const params = new URLSearchParams({
    language,
    cabin,
    flightType,
    "passengers[adt]": passengers?.adt,
    "passengers[chd]": passengers?.chd,
    "passengers[ins]": passengers?.ins,
    "passengers[inf]": passengers?.inf,
  });

  routes?.forEach((route, index) => {
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
    

    // if (!token) {

    // }

    const queryString = buildQueryParams(data, language);

    const response = await fetch(`${apiUrl}search?${queryString}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      // console.log(url);
      
      // await fetch(url, { method: "GET" });
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
