"use client"

import useAuth from "@/store/userAuth"

export default function Loading() {
  const isHydrated = useAuth(state => state.isHydrated)

  return !isHydrated && <div>Please weit...</div>
}