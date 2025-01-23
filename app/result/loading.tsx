"use client";

import searchParams from "@/store/searchParams";
import { PreloaderEarth } from "../components/ui/icons/preloaders";
import { ButtonLoader } from "../components/ui/loaders";

import "./styles.scss";

export default function Loading() {
  const searchParamsData = searchParams((state) => state.searchParamsData);

  const { routes } = searchParamsData;

  const from = routes.map(route => route.fromAirportName).join(" ");
  const to = routes.map(route => route.toAirportName).join(" ")

  return (
    <div className="loading-result-page">
      <PreloaderEarth />
      <ButtonLoader text={`${from} ➾ ${to}`} />
    </div>
  );
}