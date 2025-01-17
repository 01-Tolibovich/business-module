import { create } from "zustand";

interface isPreloaderTypes {
  isLoading: boolean;
  setIsLoading: (data: boolean) => void
}
const isPreloader = create<isPreloaderTypes>((set) => ({
  isLoading: false,
  setIsLoading: (data: boolean) => set({isLoading: data})
}))

export default isPreloader