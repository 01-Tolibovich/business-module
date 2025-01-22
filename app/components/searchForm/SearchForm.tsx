"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import moment from "moment";
import {
  fromInputDefaultAirports,
  toInputDefaultAirports,
} from "@/config/defaultAirports";
import { ButtonUI } from "../ui";
import { DatePicker, Direction, PassengerAndCabin } from "./parts";
import { CancelIcon, DificultRouteIcon, SearchIcon } from "../ui/icons";
import searchParams from "@/store/searchParams";
import { useRouter } from "next/navigation";
import { getCities, postSearchParamsData } from "@/services";
import userAuth from "@/store/userAuth";
import isPreloader from "@/store/isPreloader";

import "./styles.scss";

export const SearchForm = () => {
  const searchParamsData = searchParams((state) => state.searchParamsData);
  const isAuth = userAuth((state) => state.isAuth);
  const setSearchParamsData = searchParams(
    (state) => state.setSearchParamsData
  );
  const setClearSearchFields = searchParams(
    (state) => state.setClearSearchFields
  );

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
        fromAirportCode: searchParamsData.routes[0].toAirportCode,
        fromAirportName: "",
        toAirportCode: searchParamsData.routes[0].fromAirportCode,
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
      routes: updatedRoutes,
    });
  };

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
  };

  const router = useRouter();

  searchParamsData.routes.every(
    (route) => route.fromAirportCode && route.toAirportCode && route.date
  );

  const isLoading = isPreloader((state) => state.isLoading);
  const setIsLoading = isPreloader((state) => state.setIsLoading);

  const searchFlightsRequest = () => {
    setIsLoading(true);
    router.push(`/result/${"ticket"}`);
    postSearchParamsData(searchParamsData);
  };

  const [direction, setDirection] = useState({
    from: fromInputDefaultAirports, // airport array response
    // fromAirport: "", // airport string for request
    to: toInputDefaultAirports, // airport array response
    // toAirport: "", // airport string for request
  });
  type AirportNameType = "fromAirportName" | "toAirportName";

  const directionFields = useRef<{
    airportName: AirportNameType;
    depArr: string;
  }>({
    airportName: "fromAirportName",
    depArr: "",
  });

  const handleChangeAirportName = (
    airportName: AirportNameType,
    depArr: string,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setSearchParamsData({
      ...searchParamsData,
      routes: [
        {
          ...searchParamsData.routes[0],
          [airportName]: event.target.value,
        },
      ],
    });

    directionFields.current.airportName = airportName;
    directionFields.current.depArr = depArr;
  };

  console.log(
    5555,
    directionFields.current.airportName,
    directionFields.current.depArr
  );

  useEffect(() => {
    const cities =
      searchParamsData.routes[0][directionFields.current.airportName];
    if (cities.length >= 3) {
      getCities(cities).then((response) => {
        setDirection((prevState) => ({
          ...prevState,
          [directionFields.current.depArr]: response,
        }));
      });
    } else if (cities.length < 3) {
      setDirection({
        from: fromInputDefaultAirports,
        to: toInputDefaultAirports,
      });
    }

    console.log(7777, cities);
  }, [searchParamsData.routes]);

  return isAuth ? (
    <div className="search-form-section">
      <div className="search-form">
        <Direction
          label="Откуда"
          airports={direction.from}
          handleSetAirport={(airport) =>
            handleSetAirport("fromAirportCode", "fromAirportName", airport)
          }
          airportName={searchParamsData.routes[0]?.fromAirportName}
          handleChangeAirportName={(event) =>
            handleChangeAirportName("fromAirportName", "from", event)
          }
        />
        <Direction
          label="Куда"
          airports={direction.to}
          handleSetAirport={(airport) =>
            handleSetAirport("toAirportCode", "toAirportName", airport)
          }
          airportName={searchParamsData.routes[0]?.toAirportName}
          handleChangeAirportName={(event) =>
            handleChangeAirportName("toAirportName", "to", event)
          }
        />
        <DatePicker
          handleSetDate={(year, month, day) =>
            handleSetDate(0, year, month, day)
          }
          date={searchParamsData.routes[0]?.date}
          label="Туда"
          index={0}
        />
        <DatePicker
          handleSetDate={(year, month, day) =>
            handleSetDate(1, year, month, day)
          }
          date={searchParamsData.routes[1]?.date || ""}
          label="Обратно"
          index={1}
        />
        <PassengerAndCabin label="1 пассажир" />
        <ButtonUI icon={<DificultRouteIcon />} className="action-btn">
          Сложный маршрут
        </ButtonUI>
        <ButtonUI
          icon={<CancelIcon />}
          onClick={() => setClearSearchFields()}
          className="action-btn"
        >
          Очистить
        </ButtonUI>
        <ButtonUI
          icon={<SearchIcon />}
          onClick={searchFlightsRequest}
          className="action-btn search-btn"
          isLoad={isLoading}
          loadText="Поиск"
        >
          Поиск
        </ButtonUI>
      </div>
    </div>
  ) : null;
};
