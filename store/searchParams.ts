import { create } from "zustand";

interface Route {
  id: number;
  fromAirportCode: string;
  fromAirportName: string;
  toAirportCode: string;
  toAirportName: string;
  date: string;
}

interface searchParamsData {
  flightType: string;
  cabin: string;
  passengers: {
    adt: string;
    chd: string;
    ins: string;
    inf: string;
  };
  routes: Route[];
  // notFilledFields: {
  //   from: boolean;
  //   to: boolean;
  //   date: boolean;
  // };
}

interface searchParamTypes {
  searchParamsData: searchParamsData;
  setSearchParamsData: (search: searchParamsData) => void;
  setClearSearchFields: () => void;
}

const defaultsearchParamsData: searchParamsData = {
  flightType: "OW",
  cabin: "all",
  passengers: {
    adt: "1",
    chd: "0",
    ins: "0",
    inf: "0",
  },
  routes: [
    {
      id: Math.random(),
      fromAirportCode: "",
      fromAirportName: "",
      toAirportCode: "",
      toAirportName: "",
      date: "",
    },
  ],
  // notFilledFields: {
  //   from: false,
  //   to: false,
  //   date: false,
  // },
}

const searchParams = create<searchParamTypes>((set) => ({
  searchParamsData: defaultsearchParamsData,
  setSearchParamsData: (search) =>
    set((state) => ({
      searchParamsData: {
        ...state.searchParamsData,
        ...search,
      },
    })),
  setClearSearchFields: () =>
    set(() => ({
      searchParamsData: defaultsearchParamsData,
    })),
}));

export default searchParams;
