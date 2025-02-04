import { useRouter } from "next/navigation";
import useAuth from "@/store/userAuth";
import { useEffect } from "react";

interface UseResetAuthProps {
  error: string | number | boolean;
}

export const useResetAuth = ({ error }: UseResetAuthProps) => {
  const router = useRouter();
  const resetAuth = useAuth((state) => state.resetAuth);

  useEffect(() => {
    if (error) {
      const reset = async () => {
        await fetch("/api/delete-token", { method: "GET" });
        resetAuth();
        router.replace("/");
      };

      reset();
    }
  }, [error, resetAuth, router]);
};
