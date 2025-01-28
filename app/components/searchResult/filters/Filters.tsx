import { TitleTypes } from "@/types";
import {
  Airlines,
  Airports,
  ArrivalTime,
  DepartureTime,
  Price,
  Sorting,
  TariffOptions,
  Transplants,
  TravelTime,
} from "./part";

import "./styles.scss";

export const Filters = () => {
  const titleType: TitleTypes = "h5";

  const filterComponents = [
    <Sorting key="sorting" titleType={titleType} />,
    <Price key="price" titleType={titleType} />,
    <TariffOptions key="tarif-options" titleType={titleType} />,
    <Transplants key="transplants" titleType={titleType} />,
    <Airlines key="airlines" titleType={titleType} />,
    <Airports key="airports" titleType={titleType} />,
    <TravelTime key="trivel-time" titleType={titleType}/>,
    <DepartureTime key="departyre-time" titleType={titleType}/>,
    <ArrivalTime key="arrival-time" titleType={titleType}/>
  ];

  return (
    <div className="filters">
      {filterComponents.map((filterOption) => (
        <div className="filter-option" key={Math.random()}>
          {filterOption}
        </div>
      ))}
    </div>
  );
};
