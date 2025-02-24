"use client"

import { useRouter } from "next/navigation";
import useAuth from "@/store/userAuth";
import { useEffect } from "react";
import { whatchAuthToken } from "@/utils";
import isPreloader from "@/store/isPreloader";

interface UseResetAuthProps {
  error: string | number | boolean;
}

export const useResetAuth = (
  { error }: UseResetAuthProps = { error: false }
) => {
  const router = useRouter();
  const resetAuth = useAuth((state) => state.resetAuth);
  const setIsLoading = isPreloader((state) => state.setIsLoading);

  useEffect(() => {
    if (error) {
      const reset = async () => {
        await fetch("/api/delete-token", { method: "GET" });
        resetAuth();
        router.replace("/info");
      };

      reset();
    }

    const tokenIsMissing = async () => {
      await whatchAuthToken().then((token) => {
        if (!token) {
          resetAuth();
          setIsLoading(false);
          router.replace("/info");
        }
      });
    };

    tokenIsMissing();
  }, [error, resetAuth, router, setIsLoading]);
};
