"use server"

import { cookies } from "next/headers";

export const whatchAuthToken = async () => {
  const cookiesStore = ((await cookies()).get("token"));
  
  return cookiesStore
}