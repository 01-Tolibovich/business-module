import { ReactNode } from "react";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UserData {
  credit_limit: ReactNode;
  currency: ReactNode;
  deposit: ReactNode;
  logo: unknown;
  name: string;
  login: string;
}

interface UserState {
  userData: UserData | null;
  isAuth: boolean;
  isHydrated: boolean;
  setUserData: (data: UserData | null) => void;
  setIsAuth: (auth: boolean) => void;
  setHydrated: (value: boolean) => void; // preloader ещё ни где не используется
  resetAuth: () => void;
}

const useAuth = create<UserState>()(
  persist(
    (set) => ({
      userData: null,
      isAuth: false,
      isHydrated: false,
      setUserData: (data) => set({ userData: data }),
      setIsAuth: (auth) => set({ isAuth: auth }),
      setHydrated: (value) => set({ isHydrated: value }),
      resetAuth: () => set({ userData: null, isAuth: false}),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state, error) => {
        if (error) {
          console.error("Ошибка восстановления состояния:", error);
        }
        if (state) {
          state.setHydrated(true);
        }
      },
    }
  )
);

export default useAuth;
