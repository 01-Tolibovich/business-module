"use client";

import moment from "moment";
import { ButtonUI, ModalUI } from "../ui";
import {
  BaggageIcon,
  HandLuggageIcon,
  ReloadIcon,
  ReturnPaymentIcon,
} from "../ui/icons";
import { useEffect } from "react";
import isPreloader from "@/store/isPreloader";
import Image from "next/image";
import { FiltersIcon } from "../ui/icons";
import { Filters } from "./filters";
import { useExtraWindow, useResetAuth, useViewportResize } from "@/hooks";

import "./styles.scss";

interface Segments {
  service_class: {
    code: "";
    name: "";
  };
  free_seats: number;
  departure: {
    time: string;
    airport: string;
  };
  arrival: {
    time: string;
    airport: string;
  };
  baggage: string;
  hand_luggage: string;
}

interface Routes {
  duration: number;
  segments: Segments[];
}

interface Flights {
  rec_id: string;
  routes: Routes[];
  config_name: string;
  price: {
    TJS: string;
  };
  validating_supplier: string;
}

interface SearchParamsData {
  client_code: string;
  flights: Flights[];
  included: {
    supplier: {
      [key: string]: {
        name: {
          ru: string;
        };
      };
    };
    airport: {
      [key: string]: {
        name: {
          ru: string;
        };
      };
    };
  };

  message: string;
}

interface SearchResultProps {
  searchResultData: SearchParamsData;
}

export const SearchResult: React.FC<SearchResultProps> = ({
  searchResultData,
}) => {
  const setIsLoading = isPreloader((state) => state.setIsLoading);

  useEffect(() => {
    setIsLoading(false);
  }, [searchResultData, setIsLoading]);

  useResetAuth({ error: searchResultData.message });

  const included = (supplier: string) => {
    if (searchResultData) {
      return searchResultData.included.supplier[supplier].name.ru;
    }
  };

  const { screen, size, max } = useViewportResize();

  // const mobile: boolean = screen.width < 480;
  // const tablet: boolean = screen.width < 650;

  const renderRoutes = (flight: Flights): React.ReactNode => {
    type DepArrKeys = "departure" | "arrival";

    const renderRouteInfo = (segment: Segments, depAndArr: DepArrKeys) => {
      return (
        <div>
          <p className="time">
            {moment(segment[depAndArr].time, "DD.MM.YYYY HH:mm").format(
              "HH:mm"
            )}
          </p>
          <div className="airport">
            <p>
              {moment(segment[depAndArr].time, "DD.MM.YYYY HH:mm").format(
                "DD MMMM dd"
              )}
            </p>
            {max.sm ? null : (
              <p className="airport-name">
                {
                  searchResultData?.included.airport[segment[depAndArr].airport]
                    .name.ru
                }{" "}
                ( {segment[depAndArr].airport} )
              </p>
            )}
          </div>
        </div>
      );
    };

    const renderDuration = (seconds: number) => {
      const duration = moment.duration(seconds, "seconds");
      const formatedTime = `${Math.floor(
        duration.asHours()
      )} ч ${duration.minutes()} м`;

      return formatedTime;
    };

    return (
      <>
        {flight.routes.length >= 0
          ? flight.routes.map((route) => (
              <div key={Math.random()} className="routes">
                {max.sm ? null : (
                  <div className="cabin-and-free-seats">
                    <small>
                      Класс: {route.segments[0].service_class.name} (
                      {route.segments[0].service_class.code})
                    </small>
                    <small>{route.segments[0].free_seats}+ мест</small>
                  </div>
                )}
                <div className="route">
                  <div className="departure">
                    {renderRouteInfo(route.segments[0], "departure")}
                  </div>
                  <div>
                    <small className="text-center">
                      {renderDuration(route.duration)}
                    </small>
                    <span className="line" />
                    {max.xs ? null : (
                      <small className="text-center">
                        {route.segments.length === 1
                          ? "Без пересадок"
                          : `${route.segments.length} пересадок`}
                      </small>
                    )}
                  </div>
                  {renderRouteInfo(
                    route.segments[route.segments.length - 1],
                    "arrival"
                  )}
                </div>
                {max.sm ? null : (
                  <small className="baggage">
                    Багаж: {route.segments[0].baggage} | Ручная кладь:{" "}
                    {route.segments[0].hand_luggage}
                  </small>
                )}
              </div>
            ))
          : null}
      </>
    );
  };

  const { isShowExtraWindow, handleToggleExtraWindow } = useExtraWindow();

  const renderFilters = () => {
    const className: string = "filter-block";

    if (screen.width >= size.lg) {
      return (
        <aside className={className}>
          <Filters />
        </aside>
      );
    } else if (screen.width < size.lg) {
      return (
        <aside className={className}>
          <>
            <ModalUI
              {...isShowExtraWindow}
              handleCloseModal={handleToggleExtraWindow}
            >
              <Filters />
            </ModalUI>
          </>
        </aside>
      );
    }

    return null;
  };

  return (
    <div className="search-result-page">
      {screen.width >= size.lg && renderFilters()}
      {screen.width < size.lg && <div className="filter-button">
        <ButtonUI onClick={handleToggleExtraWindow} icon={<FiltersIcon />} />
      </div>}
      <div>
        {searchResultData
          ? searchResultData.flights?.length >= 0 &&
            searchResultData.flights.map((flight) => (
              <div
                className="ticket-wrap"
                key={`${flight.rec_id}${Math.random()}`}
              >
                <header className="head-text-info">
                  <div className="suppliers">
                    <Image
                      src={`/suppliers/${flight.validating_supplier}.png`}
                      width={100}
                      height={20}
                      alt="logo"
                    />
                    <p>{included(flight.validating_supplier)}</p>
                  </div>
                  {max.sm ? null : <p>Поставщик: {flight.config_name}</p>}
                  {max.sm ? null : (
                    <p>
                      {included(flight.validating_supplier)} — валидирует
                      перелёты
                    </p>
                  )}
                </header>
                <div className="ticket-blocks">
                  <div className="first-block">{renderRoutes(flight)}</div>
                  <div className="second-block">
                    <span className="price">
                      {Math.ceil(+flight.price.TJS)} TJS
                    </span>
                    {max.xs ? null : (
                      <div className="icons">
                        <BaggageIcon />
                        <HandLuggageIcon />
                        <ReturnPaymentIcon />
                        <ReloadIcon />
                      </div>
                    )}
                    <ButtonUI>Выбрать</ButtonUI>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
      {screen.width < size.lg && renderFilters()}
    </div>
  );
};
