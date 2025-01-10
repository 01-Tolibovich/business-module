"use client";

import { useState } from "react";
import moment from "moment";
import {
  fromInputDefaultAirports,
  toInputDefaultAirports,
} from "@/config/defaultAirports";

import { ButtonUI } from "../ui";
import { DatePicker, Direction, PassengerAndCabin } from "./parts";
import { CancelIcon, DificultRouteIcon, SearchIcon } from "../ui/icons";
import { Portholes } from "../portholes";

import "./styles.scss";
// import { searchFlights } from "@/services";
import searchParams from "@/store/searchParams";

export const SearchForm = () => {
  const setSearchParamsData = searchParams(
    (state) => state.setSearchParamsData
  );
  const searchParamsData = searchParams((state) => state.searchParamsData);
  const setClearSearchFields = searchParams(
    (state) => state.setClearSearchFields
  );

  console.log(5555, searchParamsData);

  // const [date, setDate] = useState({
  //   from: "",
  //   to: "",
  // });
  // const [date, setDate] = useState<string[]>([]);

  const handleSetDate = (
    index: number,
    year: number,
    month: number,
    day: number | null
  ) => {
    const formatedDate = moment([year, month, day || 0]).format("YYYY-MM-DD");
    const updatedRoutes = [...searchParamsData.routes];

    if (index >= updatedRoutes.length) {
      updatedRoutes.push({
        id: Math.random(),
        fromAirportCode: "",
        fromAirportName: "",
        toAirportCode: "",
        toAirportName: "",
        date: "",
      });
    }

    updatedRoutes[index] = {
      ...updatedRoutes[index],
      date: formatedDate,
    };

    setSearchParamsData({
      ...searchParamsData,
      flightType: updatedRoutes.length === 2 ? "RT" : "OW",
      routes: updatedRoutes,
    });

    // setDate((prevState) =>
    //   prevState.map((d, i) => (i === index ? formatedDate : d))
    // );
  };

  // const handleDateChange = (
  //   event: ChangeEvent<HTMLInputElement>,
  //   index: number
  // ) => {
  //   console.log(3333, event);

  //   setDate(
  //     (prevState) =>
  //       prevState.map((date, i) => (i === index ? event.target.value : date)) // Обновляем только нужный индекс
  //   );
  // };

  const [direction] = useState({
    from: fromInputDefaultAirports,
    to: toInputDefaultAirports,
    // fromAirportName: "",
    // toAirportName: "",
    // fromAirportCode: "",
    // toAirportCode: "",
  });

  const handleSetAirport = (
    airportCode: string,
    airportName: string,
    airport: {
      code: string;
      name: { ru: string };
    }
  ) => {
    setSearchParamsData({
      ...searchParamsData,
      routes: [
        {
          ...searchParamsData.routes[0],
          [airportCode]: airport.code,
          [airportName]: airport.name.ru,
        },
        ...searchParamsData.routes.slice(1),
      ],
    });
    // console.log(airport);
    // setDirection((prevState) => ({
    //   ...prevState,
    //   [direction]: airport.name.ru,
    //   [airportCode]: airport.code,
    // }));
  };

  // const handleChangeAirportName = (
  //   airportRouteName: string,
  //   event: ChangeEvent<HTMLInputElement>
  // ) => {
  //   setDirection((prevState) => ({
  //     ...prevState,
  //     [airportRouteName]: event.target.value,
  //   }));
  // };

  // const handleClearFields = () => {
  //   setDate((prevState) => ({ ...prevState, from: "", to: "" }));
  //   setDirection((prevState) => ({
  //     ...prevState,
  //     fromAirportName: "",
  //     toAirportName: "",
  //   }));
  // };

  const searchFlightsRequest = () => {
    // const data = {
    //   cabin: "all",
    //   flightType: "OW",
    //   "passengers[adt]": "1",
    //   "passengers[chd]": "0",
    //   "passengers[ins]": "0",
    //   "passengers[inf]": "0",
    //   "routes[0][from]": direction.fromAirportCode,
    //   "routes[0][to]": direction.toAirportCode,
    //   "routes[0][date]": date,
    // };
    // setSearchParamsData({
    // })
    // const data = {
    //     passengers: {
    //         adt: 1,
    //         ins: 0,
    //         chd: 0,
    //         inf: 0
    //     },
    //     cabin: "all",
    //     flightType: "RT",
    //     routes: [
    //         {
    //             date: "2025-01-18",
    //             from: "DYU",
    //             to: "ALA"
    //         },
    //         {
    //             date: "2025-01-26",
    //             from: "ALA",
    //             to: "TAS"
    //         }
    //     ]
    // }
    // console.log(2222, data);
    // searchFlights(data).then((result) => console.log(1111, result));
  };

  return (
    <div>
      <div className="search-form">
        <Direction
          label="Откуда"
          airports={direction.from}
          handleSetAirport={(airport) =>
            handleSetAirport("fromAirportCode", "fromAirportName", airport)
          }
          airportName={searchParamsData.routes[0].fromAirportName}
          // handleChangeAirportName={(event) =>
          //   handleChangeAirportName("fromAirportName", event)
          // }
        />
        <Direction
          label="Куда"
          airports={direction.to}
          handleSetAirport={(airport) =>
            handleSetAirport("toAirportCode", "toAirportName", airport)
          }
          airportName={searchParamsData.routes[0].toAirportName}
          // handleChangeAirportName={(event) =>
          //   handleChangeAirportName("toAirportName", event)
          // }
        />
        <DatePicker
          handleSetDate={(year, month, day) =>
            handleSetDate(0, year, month, day)
          }
          date={searchParamsData.routes[0]?.date}
          label="Туда"
        />
        <DatePicker
          handleSetDate={(year, month, day) =>
            handleSetDate(1, year, month, day)
          }
          date={searchParamsData.routes[1]?.date || ""}
          label="Обратно"
        />
        <PassengerAndCabin label="1 пассажир" />
            <ButtonUI icon={<DificultRouteIcon />} className="action-btn">Сложный маршрут</ButtonUI>
            <ButtonUI
              icon={<CancelIcon />}
              onClick={() => setClearSearchFields()}
              className="action-btn"
            >Очистить</ButtonUI>
          <ButtonUI icon={<SearchIcon />} onClick={searchFlightsRequest} className="action-btn search-btn">Поиск</ButtonUI>
      </div>
      <Portholes />
    </div>
  );
};
