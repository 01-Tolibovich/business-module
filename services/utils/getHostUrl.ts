"use server"

import { headers } from "next/headers"

export const getHostUrl = async (path: string) => {
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const host = (await headers()).get("host");

  return `${protocol}://${host}${path}`
}