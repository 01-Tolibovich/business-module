import { SearchTypes } from "@/types/searchFlightsResult";
import { create } from "zustand";

interface searchState {
  searchData: SearchTypes;
  setSearchData: (data: SearchTypes) => void;
}

const defaultSearchData: SearchTypes = {
  client_code: "",
  flights: [],
  included: {
    supplier: {},
    airport: {}
  },
  message: "",
}
const searchResult = create<searchState>((set) => ({
  searchData: defaultSearchData,
  setSearchData: (data) => set(() => ({ searchData: data })),
}));

export default searchResult;
