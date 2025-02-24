"use client";

import { Flights } from "@/types/searchFlightsResult";
import { RouteDetails } from "../searchResult/part";
import "./styles.scss";
import { ButtonUI, HeadingUI, InputUI } from "../ui";
import { useState } from "react";
import searchResult from "@/store/searchResult";

interface BookingProps {
  currentTicket: Flights | null;
}

export const Booking: React.FC<BookingProps> = ({ currentTicket }) => {
  const searchData = searchResult((state) => state.searchData);
  const [isDetails, setIsDetails] = useState(false);

  const { included } = searchData;

  const segment = currentTicket?.routes.map((route) => route.segments).flat();

  console.log(currentTicket && currentTicket);

  return (
    <div className="booking">
      <div>
        <div className="details">
          <div className="head">
            {segment && (
              <HeadingUI as="h4">
                {`${included.airport[segment[0].departure.airport].name.ru} - ${
                  included.airport[segment[segment.length - 1].arrival.airport]
                    .name.ru
                }`}
              </HeadingUI>
            )}
            <ButtonUI onClick={() => setIsDetails(!isDetails)}>
              {isDetails ? "Свернуть" : "Развернуть"}
            </ButtonUI>
          </div>
          <div className={`route-info ${isDetails ? "route-details" : ""}`}>
            <RouteDetails flight={currentTicket} />
          </div>
        </div>
        <div className="byer-contact">
          <HeadingUI as="h4" className="title">
            Контакты покупателя
          </HeadingUI>
          <small>
            На почту отправим информацию о бронировании. Телефон нужен для
            срочных оповещений при измении в расписании.
          </small>
          <form action="" className="byer-form">
            <InputUI label="Email *"/>
            <InputUI label="Номер телефона *"/>
          </form>
        </div>
        <div className="form-section">
          <HeadingUI as="h4" className="title">
            Данные пассажира
          </HeadingUI>
          <p className="passenger-type">Тип пассажира: Взрослый</p>
          <form action="">
            <InputUI label="Фамилия как в документе *" />
            <InputUI label="Имя как в документе *" />
            <InputUI label="Отчество как в документе (не обязательно)" />
            <InputUI label="Установите гражданство из выпадающего с *" />
            <InputUI label="Дата рождения *" />
            <InputUI label="Пол" />
            <InputUI label="Тип документа" />
            <InputUI label="Годен до *" />
            <InputUI label="Серия и номер *" />
            <InputUI label="Номер телефона *" />
            <InputUI label="Email *" />
          </form>
        </div>
      </div>
      <div className="site-bar">
        <div className="price-info">
          {currentTicket && (
            <div className="price-block">
              <small>Авиабилеты</small>
              <small>{currentTicket.price.TJS} TJS</small>
              <small>Дополнительные услуги</small>
              <small></small>
              <HeadingUI as="h5" className="total-price"><span>Итого:</span><span>{currentTicket.total_price.TJS}</span></HeadingUI>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
