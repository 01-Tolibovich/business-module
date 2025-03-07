"use client";

import {
  SearchTypes,
  Flights,
  Segments,
  Included,
} from "@/types/searchFlightsResult";
import moment from "moment";
import { ButtonUI, ModalUI, RouteLineUI } from "../ui";
import {
  BaggageIcon,
  HandLuggageIcon,
  ReloadIcon,
  ReturnPaymentIcon,
} from "../ui/icons";
import { useEffect, useState } from "react";
import isPreloader from "@/store/isPreloader";
import Image from "next/image";
import { FiltersIcon } from "../ui/icons";
import { Filters } from "./filters";
import { useExtraWindow, useResetAuth, useViewportResize } from "@/hooks";
import { TicketDetailsInfo } from "./part";
import searchResult from "@/store/searchResult";
import { routeDuration } from "@/utils";

import "./styles.scss";

interface SearchResultProps {
  searchResultData: SearchTypes;
}

export const SearchResult: React.FC<SearchResultProps> = ({
  searchResultData,
}) => {
  const setSearchData = searchResult((state) => state.setSearchData);

  useEffect(() => {
    setSearchData(searchResultData);
  }, [searchResultData, setSearchData]);

  const included: Included = searchResultData?.included;
  const flights = searchResultData?.flights;

  const setIsLoading = isPreloader((state) => state.setIsLoading);

  useEffect(() => {
    setIsLoading(false);
  }, [searchResultData, setIsLoading]);

  useResetAuth({ error: searchResultData.message });

  const renderIncluded = (supplier: string) => {
    return included.supplier[supplier].name.ru;
  };

  const { screen, size, max } = useViewportResize();

  const renderRoutes = (flight: Flights): React.ReactNode => {
    type DepArrKeys = "departure" | "arrival";

    // const returnRouteInfo = () => {

    // }

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
                {included.airport[segment[depAndArr].airport].name.ru} ({" "}
                {segment[depAndArr].airport} )
              </p>
            )}
          </div>
        </div>
      );
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
                      {/* {renderDuration(route.duration)} */}
                      {routeDuration(route.duration)}
                    </small>
                    <RouteLineUI />
                    {max.xs ? null : (
                      <small className="text-center">
                        {route.segments.length === 1
                          ? "Без пересадок"
                          : `${route.segments.length - 1} пересадок`}
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

  const [ticketDetails, setTicketDatails] = useState<Flights | null>(null);

  const detailInfo = (flight: Flights) => {
    setTicketDatails(flight);
  };

  return (
    <div className="search-result-page">
      {screen.width >= size.lg && renderFilters()}
      {screen.width < size.lg && (
        <div className="filter-button">
          <ButtonUI onClick={handleToggleExtraWindow} icon={<FiltersIcon />} />
        </div>
      )}
      <div>
        {searchResultData
          ? flights?.length >= 0 &&
            flights.map((flight) => (
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
                    <p>{renderIncluded(flight.validating_supplier)}</p>
                  </div>
                  {max.sm ? null : <p>Поставщик: {flight.config_name}</p>}
                  {max.sm ? null : (
                    <p>
                      {renderIncluded(flight.validating_supplier)} — валидирует
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
                    <ButtonUI
                      onClick={() => {
                        detailInfo(flight);
                      }}
                    >
                      Выбрать
                    </ButtonUI>
                  </div>
                </div>
              </div>
            ))
          : null}
        <TicketDetailsInfo
          searchResultData={searchResultData}
          flight={ticketDetails}
          setTicketDatails={setTicketDatails}
        />
      </div>
      {screen.width < size.lg && renderFilters()}
    </div>
  );
};
