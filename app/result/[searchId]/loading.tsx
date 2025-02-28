// import searchParams from "@/store/searchParams";
// import { PreloaderEarth } from "../../components/ui/icons/preloaders";
// import { ButtonLoader } from "../../components/ui/loaders";

import "./styles.scss";

export default function Loading() {
  // const searchParamsData = searchParams((state) => state.searchParamsData);

  // const { routes } = searchParamsData;

  // const from = routes.map(route => route.fromAirportName).join(" ");
  // const to = routes.map(route => route.toAirportName).join(" ")

  return (
    <div className="loading-result-page">
      {/* <PreloaderEarth />
      // <ButtonLoader text={`${from} ➾ ${to}`} /> */}
      <div className="loading-ticket-wrap">
        <div className="filter">
          <div className="title" />
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="actions">
              <div className="radio" />
              <div className="text" />
            </div>
          ))}
          <div className="title" />
          <div className="title" />
        </div>
        <div className="ticket">
          <div className="first"></div>
          <div className="second"></div>
        </div>
      </div>
    </div>
  );
}
