import { create } from "zustand";

interface UserState {
  userData: object;
  setUserData: (data: object) => void;
  isAuth: boolean;
  setIsAuth: (auth: boolean) => void;
}

const userAuth = create<UserState>((set) => ({
  userData: {},
  isAuth: false,
  setUserData: (data) => set({ userData: data }),
  setIsAuth: (auth) => set({ isAuth: auth }),
}));

export default userAuth;
