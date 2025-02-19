import {
  Departure,
  Flights,
  Included,
  SearchTypes,
  Segments,
} from "@/types/searchFlightsResult";
import { ButtonUI, HeadingUI, ModalUI, RouteLineUI } from "../../../ui";
import { useExtraWindow } from "@/hooks";
import { Dispatch, SetStateAction, useEffect } from "react";
import moment from "moment";

import "./styles.scss";
import { BaggageIcon, HandLuggageIcon, ReloadIcon, ReturnPaymentIcon, UserWithBaggageIcon } from "@/app/components/ui/icons";
import { routeDuration } from "@/utils";

interface TicketDetailsInfoProps {
  searchResultData: SearchTypes;
  flight: Flights | null;
  setTicketDatails: Dispatch<SetStateAction<Flights | null>>;
  included: Included | null;
}

export const TicketDetailsInfo: React.FC<TicketDetailsInfoProps> = ({
  // searchResultData,
  flight,
  setTicketDatails,
  included,
}) => {
  const airport = included?.airport;
  const routes = flight?.routes;

  const { isShowExtraWindow, handleToggleExtraWindow } = useExtraWindow();

  const { active, anim } = isShowExtraWindow;

  useEffect(() => {
    if (!active && !anim) {
      setTicketDatails(null);
    }
  }, [active, anim, setTicketDatails]);

  useEffect(() => {
    if (flight) {
      handleToggleExtraWindow();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flight]); // Нельзя передавать в качесве зависимостей active, anim или handleToggleExtraWindow. Эти зависимости мешают корректной работе модалльного окна

  // const segment1111: Segments[] = routes?.map((route) => route.segments.map((segment) => segment))

  const departure: Departure[] =
    routes
      ?.map((route) => route.segments.map((segment) => segment.departure))
      .flat() || [];
  const arrival: Departure[] =
    routes
      ?.map((route) => route.segments.map((segment) => segment.arrival))
      .flat()
      .flat() || [];

  const segment: Segments[] | undefined = routes
    ?.map((route) => route.segments)
    .flat();

  const renderDefTime = (arr: string, dep: string) => {
    const start = moment(arr, "DD.MM.YYYY HH:mm");
    const end = moment(dep, "DD.MM.YYYY HH:mm");

    const duration = moment.duration(end.diff(start));

    const hours = Math.floor(duration.asHours());
    const minutes = Math.floor(duration.asMinutes() % 60);

    return (
      <div className="replanting-section">
        <div>
          <HeadingUI as="h2" className="replanting">
            Пересадка
          </HeadingUI>
          <span>
            {hours} ч : {minutes} м
          </span>
        </div>
        <UserWithBaggageIcon />
      </div>
    );
  };

  const modalHeader = () => {
    return (
      <div className="modal-header">
        {airport && segment && (
          <>
            <HeadingUI as="h4" className="title">
              {airport[segment[0].departure.airport].name.ru} -{" "}
              {airport[segment[segment.length - 1].arrival.airport].name.ru}
            </HeadingUI>
          </>
        )}
        <div className="actions-block">
          <div className="items">
            <ButtonUI>Детали рейса</ButtonUI>
            <ButtonUI>Тарифы</ButtonUI>
          </div>
          <div className="items">
            <BaggageIcon />
            <HandLuggageIcon />
            <ReturnPaymentIcon />
            <ReloadIcon />
          </div>
        </div>
      </div>
    );
  };

  const modalFooter = () => {
    return (
      <div className="modal-footer">
        <p>{flight?.price.TJS} TJS</p>
        <ButtonUI>Забронировать</ButtonUI>
      </div>
    );
  };

  if (!flight) return null;

  return (
    <ModalUI
      {...isShowExtraWindow}
      handleCloseModal={handleToggleExtraWindow}
      header={modalHeader()}
      footer={modalFooter()}
    >
      <div className="ticket-details-info">
        {airport && departure && arrival && (
          <div>
            {departure.map((el, index) => (
              <div key={`${el}${index}`} className="from-to">
                <div className="route">
                  <div className="route-details">
                    <HeadingUI as="h2">
                      {moment(departure[index].time, "DD.MM.YYYY HH:mm").format(
                        "HH:mm"
                      )}
                    </HeadingUI>
                    <RouteLineUI />
                    <HeadingUI as="h2">
                      {moment(arrival[index].time, "DD.MM.YYYY HH:mm").format(
                        "HH:mm"
                      )}
                    </HeadingUI>
                  </div>
                  <div className="date-and-airport">
                    <div>
                      <p className="date">
                        {moment(
                          departure[index].time,
                          "DD.MM.YYYY HH:mm"
                        ).format("DD MMMM dd")}
                      </p>
                      <p className="airport">
                        {airport[departure[index].airport].name.ru} (
                        {departure[index].airport})
                      </p>
                    </div>
                    <div className="arrival">
                      <p className="date">
                        {moment(arrival[index].time, "DD.MM.YYYY HH:mm").format(
                          "DD MMMM dd"
                        )}
                      </p>
                      <p className="airport">
                        {airport[arrival[index].airport].name.ru} (
                        {arrival[index].airport})
                      </p>
                    </div>
                  </div>
                </div>

                {segment && segment.length > 1 && segment.length - 1 !== index
                  ? renderDefTime(
                      arrival[index].time,
                      departure[index + 1].time
                    )
                  : null}
              </div>
            ))}
          </div>
        )}
        <div className="second-block">
          <div className="duration">
            <HeadingUI as="h2" className="duration-title">
              {routes?.map((route) => routeDuration(route.duration))}
            </HeadingUI>
          </div>
          <div>
            {segment?.map((el) => (
              <p className="aircraft" key={Math.random()}>
                Рейс: {el.aircraft}
              </p>
            ))}
          </div>
        </div>
      </div>
    </ModalUI>
  );
};
