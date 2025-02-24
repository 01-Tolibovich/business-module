"use client"

import { useViewportResize } from "@/hooks";
import "./styles.scss";
import moment from "moment";
import { HeadingUI, RouteLineUI } from "@/app/components/ui";
import { PlaneIcon, UserWithBaggageIcon } from "@/app/components/ui/icons";
import { Flights, Segments } from "@/types/searchFlightsResult";
import searchResult from "@/store/searchResult";
import { routeDuration } from "@/utils";

interface RouteDetailsProps {
  flight?: Flights | null;
}

export const RouteDetails: React.FC<RouteDetailsProps> = ({ flight }) => {
  const searchData = searchResult((state) => state.searchData);
  const { included } = searchData;

  const routes = flight?.routes;

  const { max } = useViewportResize();

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

  if (!flight) {

    return (
      <div className="error">
        Ошибка
      </div>
    )
  }

  return (
    <div className="ticket-details-info">
      {segment && (
        <div>
          {segment.map((el, index) => (
            <div key={`${el}${index}`} className="from-to">
              <div className="route">
                <div className="route-details">
                  <HeadingUI as="h2">
                    {moment(
                      segment[index].departure.time,
                      "DD.MM.YYYY HH:mm"
                    ).format("HH:mm")}
                  </HeadingUI>
                  <div className="line">
                    <div className="supplier">
                      <small>
                        {
                          included.supplier[segment[index].operation_supplier]
                            .name.ru
                        }
                      </small>
                      <PlaneIcon />
                    </div>
                    <RouteLineUI />
                    <small className="time">
                      Время вылета и прилета местное
                    </small>
                  </div>
                  <HeadingUI as="h2">
                    {moment(
                      segment[index].arrival.time,
                      "DD.MM.YYYY HH:mm"
                    ).format("HH:mm")}
                  </HeadingUI>
                </div>
                <div className="date-and-airport">
                  <div>
                    <p className="date">
                      {moment(
                        segment[index].departure.time,
                        "DD.MM.YYYY HH:mm"
                      ).format("DD MMMM dd")}
                    </p>
                    <p className="airport">
                      {
                        included.airport[segment[index].departure.airport].name
                          .ru
                      }{" "}
                      {max.sm
                        ? null
                        : `(
                            ${segment[index].departure.airport})`}
                    </p>
                  </div>
                  <div className="arrival">
                    <p className="date">
                      {moment(
                        segment[index].arrival.time,
                        "DD.MM.YYYY HH:mm"
                      ).format("DD MMMM dd")}
                    </p>
                    <p className="airport">
                      {included.airport[segment[index].arrival.airport].name.ru}{" "}
                      {max.sm
                        ? null
                        : `(
                            ${segment[index].arrival.airport})`}
                    </p>
                  </div>
                </div>
              </div>

              {segment && segment.length > 1 && segment.length - 1 !== index
                ? renderDefTime(
                    segment[index].arrival.time,
                    segment[index + 1].departure.time
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
  );
};
