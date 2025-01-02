import { create } from "zustand";

interface UserData {
  active: boolean;
  available_currencies: string;
  corporation_name: string;
  credit_limit: string;
  currency: string[];
  deposit: string;
  login: string;
  logo: string;
  name: string;
  phone: string;
  type: string;
}

interface UserState {
  userData: UserData | null;
  setUserData: (data: UserData | null) => void;
  isAuth: boolean;
  setIsAuth: (auth: boolean) => void;
}

const userAuth = create<UserState>((set) => ({
  userData: null,
  isAuth: false,
  setUserData: (data) => set({ userData: data }),
  setIsAuth: (auth) => set({ isAuth: auth }),
}));

export default userAuth;
