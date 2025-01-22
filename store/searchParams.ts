import { Route } from "@/types";
import { create } from "zustand";

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
};

const searchParams = create<searchParamTypes>((set) => ({
  searchParamsData: defaultsearchParamsData,
  setSearchParamsData: (search) =>
    set((state) => {
      const updatedSearchParams = {
        ...state.searchParamsData,
        ...search,
      };

      if (
        updatedSearchParams.routes.length > 1 &&
        updatedSearchParams.routes[1].date
      ) {
        updatedSearchParams.flightType = "RT";
      } else {
        updatedSearchParams.flightType = "OW";
      }

      if (
        updatedSearchParams.routes.length === 2 &&
        updatedSearchParams.routes[1].date === ""
      ) {
        updatedSearchParams.routes = updatedSearchParams.routes.filter(
          (route, index) => {
            if (index === 0) {
              return true;
            }
            return route.date !== "";
          }
        );
      }

      return {
        searchParamsData: updatedSearchParams,
      };
    }),
  setClearSearchFields: () =>
    set(() => ({
      searchParamsData: defaultsearchParamsData,
    })),
}));

export default searchParams;
