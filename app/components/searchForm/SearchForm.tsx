"use client";

import { ChangeEvent, useState } from "react";
import moment from "moment";
import {
  fromInputDefaultAirports,
  toInputDefaultAirports,
} from "@/config/defaultAirports";

import { ButtonUI, HeadingUI, InputUI } from "../ui";
import { DatePicker } from "./datePicker";
import { Direction } from "./direction";
import { CancelIcon, DificultRouteIcon, SearchIcon } from "../ui/icons";
import { Portholes } from "../portholes";

import "./styles.scss";

export const SearchForm = () => {
  const [date, setDate] = useState({
    from: "",
    to: "",
  });

  const handleSetDate = (
    field: string,
    year: number,
    month: number,
    day: number | null
  ) => {
    const formatedDate = moment([year, month, day || 0]).format("YYYY-MM-DD");

    setDate((prevState) => ({ ...prevState, [field]: formatedDate }));
  };

  const handleDateChange = (
    event: ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setDate((prevState) => ({ ...prevState, [field]: event.target.value }));
  };

  const [direction, setDirection] = useState({
    from: fromInputDefaultAirports,
    to: toInputDefaultAirports,
    fromAirportName: "",
    toAirportName: "",
  });

  const handleSetAirport = (
    direction: string,
    airport: { name: { ru: string } }
  ) => {
    console.log(airport);
    setDirection((prevState) => ({
      ...prevState,
      [direction]: airport.name.ru,
    }));
  };

  const handleChangeAirportName = (
    airportRouteName: string,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setDirection((prevState) => ({
      ...prevState,
      [airportRouteName]: event.target.value,
    }));
  };

  const handleClearFields = () => {
    setDate((prevState) => ({ ...prevState, from: "", to: "" }));
    setDirection((prevState) => ({
      ...prevState,
      fromAirportName: "",
      toAirportName: "",
    }));
  };

  return (
    <div>
      <div className="search-form">
        <div className="title-and-buttons">
          <HeadingUI as="h3" className="title">
            Поиск авиабилетов
          </HeadingUI>
          <div className="action-buttons">
            <ButtonUI icon={<DificultRouteIcon />} />
            <ButtonUI icon={<CancelIcon />} onClick={handleClearFields} />
            <ButtonUI icon={<SearchIcon />} />
          </div>
        </div>
        <Direction
          label="Откуда"
          airports={direction.from}
          handleSetAirport={(airport) =>
            handleSetAirport("fromAirportName", airport)
          }
          airportName={direction.fromAirportName}
          handleChangeAirportName={(event) =>
            handleChangeAirportName("fromAirportName", event)
          }
        />
        <Direction
          label="Куда"
          airports={direction.to}
          handleSetAirport={(airport) =>
            handleSetAirport("toAirportName", airport)
          }
          airportName={direction.toAirportName}
          handleChangeAirportName={(event) =>
            handleChangeAirportName("toAirportName", event)
          }
        />
        <DatePicker
          handleSetDate={(year, month, day) =>
            handleSetDate("from", year, month, day)
          }
          date={date.from}
          handleDateChange={(event) => handleDateChange(event, "from")}
          label="Туда"
        />
        <DatePicker
          handleSetDate={(year, month, day) =>
            handleSetDate("to", year, month, day)
          }
          date={date.to}
          handleDateChange={(event) => handleDateChange(event, "to")}
          label="Обратно"
        />
        <InputUI type="text" label="1 пассажир" />
      </div>
      <Portholes />
    </div>
  );
};
