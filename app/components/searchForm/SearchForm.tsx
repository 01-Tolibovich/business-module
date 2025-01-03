"use client";

import { HeadingUI, InputUI } from "../ui";
import { DatePicker } from "./datePicker";
import "./styles.scss";

export const SearchForm = () => {

  return (
    <div>
      <div className="search-form">
        <HeadingUI as="h3" className="title">
          Поиск авиабилетов
        </HeadingUI>
        <InputUI type="text" label="Откуда" classNameInput="input-item" />
        <InputUI type="text" label="Куда" />
        <DatePicker date="Туда"/>
        <DatePicker date="Обратно"/>
        <InputUI type="text" label="1 пассажир" />
      </div>
    </div>
  );
};
