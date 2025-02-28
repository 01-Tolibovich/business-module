"use client";

import { ChangeEvent, useCallback, useRef, useState } from "react";
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
import { useResetAuth } from "@/hooks";

import "./styles.scss";

export const SearchForm: React.FC = () => {
  const searchParamsData = searchParams((state) => state.searchParamsData);
  const isAuth = userAuth((state) => state.isAuth);
  const setSearchParamsData = searchParams(
    (state) => state.setSearchParamsData
  );
  const setClearSearchFields = searchParams(
    (state) => state.setClearSearchFields
  );

  const [showDropDown, setshowDropDown] = useState<number>(-1);

  const handleSetDate = (
    index: number,
    year: number,
    month: number,
    day: number | null
  ) => {
    const formatedDate = moment([year, month, day || 0]).format("YYYY-MM-DD");
    const updatedRoutes = [...searchParamsData.routes];
    setshowDropDown(-1);

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

  const [isLoadCities, setIsLoadCities] = useState(-1);

  const handleLoadingEarth = (index: number) => {
    setIsLoadCities(index);
  };

  const handleSetAirport = (
    airportCode: string,
    airportName: string,
    airport: {
      code: string;
      name: { ru: string };
    }
  ) => {
    setIsLoadCities(-1);
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
    router.push(`/result/${Math.random()}`);
    postSearchParamsData(searchParamsData);
  };

  const [direction, setDirection] = useState({
    from: fromInputDefaultAirports,
    to: toInputDefaultAirports,
  });
  type AirportNameType = "fromAirportName" | "toAirportName";

  const directionFields = useRef<{
    airportName: AirportNameType;
    depArr: string;
    index: number;
  }>({
    airportName: "fromAirportName",
    depArr: "",
    index: -1,
  });

  const citiesRequest = useCallback(() => {
    const cities =
      searchParamsData.routes[0][directionFields.current.airportName];
    setshowDropDown(-1);

    if (cities.length >= 3) {
      getCities(cities).then((response) => {
        setDirection((prevState) => ({
          ...prevState,
          [directionFields.current.depArr]: response,
        }));

        setshowDropDown(directionFields.current.index);
      });
    } else if (cities.length < 3) {
      setDirection({
        from: fromInputDefaultAirports,
        to: toInputDefaultAirports,
      });
    }
  }, [searchParamsData.routes]);

  useResetAuth({ error: !direction.from || !direction.to });

  const handleChangeAirportName = (
    airportName: AirportNameType,
    depArr: string,
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    citiesRequest();
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
    directionFields.current.index = index;
  };

  return isAuth ? (
    <div className="search-form-section">
      <div className="search-form">
        <div className="item-1">
          <Direction
            label="Откуда"
            airports={direction.from}
            handleSetAirport={(airport) =>
              handleSetAirport("fromAirportCode", "fromAirportName", airport)
            }
            airportName={searchParamsData.routes[0]?.fromAirportName}
            handleChangeAirportName={(event) =>
              handleChangeAirportName("fromAirportName", "from", 0, event)
            }
            handleLoadingEarth={() => handleLoadingEarth(0)}
            index={0}
            showDropDown={showDropDown}
            isLoadCities={isLoadCities}
          />
        </div>
        <div className="item-2">
          <Direction
            label="Куда"
            airports={direction.to}
            handleSetAirport={(airport) =>
              handleSetAirport("toAirportCode", "toAirportName", airport)
            }
            airportName={searchParamsData.routes[0]?.toAirportName}
            handleChangeAirportName={(event) =>
              handleChangeAirportName("toAirportName", "to", 1, event)
            }
            handleLoadingEarth={() => handleLoadingEarth(1)}
            index={1}
            showDropDown={showDropDown}
            isLoadCities={isLoadCities}
          />
        </div>
        <div className="item-3">
          <DatePicker
            handleSetDate={(year, month, day) =>
              handleSetDate(0, year, month, day)
            }
            date={searchParamsData.routes[0]?.date}
            label="Туда"
            index={0}
          />
        </div>
        <div className="item-4">
          <DatePicker
            handleSetDate={(year, month, day) =>
              handleSetDate(1, year, month, day)
            }
            date={searchParamsData.routes[1]?.date || ""}
            label="Обратно"
            index={1}
          />
        </div>
        <div className="item-5">
          <PassengerAndCabin />
        </div>
        <div className="item-6">
          <ButtonUI icon={<DificultRouteIcon />} className="action-btn">
            Сложный маршрут
          </ButtonUI>
        </div>
        <div className="item-7">
          <ButtonUI
            icon={<CancelIcon />}
            onClick={() => setClearSearchFields()}
            className="action-btn"
          >
            Очистить
          </ButtonUI>
        </div>
        <div className="item-8">
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
    </div>
  ) : null;
};
