import { ChangeEvent, useEffect } from "react";
import { DropDownUI, InputUI } from "../../../ui";
import "./styles.scss";
import { useExtraWindow } from "@/hooks";
import { PreloaderEarth } from "@/app/components/ui/icons/preloaders";

interface DirectionItem {
  code: string;
  countryCode: string;
  countryName: {
    ru: string;
    en: string;
    tj: string;
  };
  name: {
    ru: string;
    en: string;
    tj: string;
  };
  isMain: boolean;
}

type DirectionProps = {
  label: string;
  airports?: DirectionItem[];
  handleSetAirport: (airport: { code: string; name: { ru: string } }) => void;
  airportName: string;
  handleChangeAirportName?: (event: ChangeEvent<HTMLInputElement>) => void;
  index: number;
  showDropDown: number;
  isLoadCities: number;
  handleLoadingEarth: () => void;
};

export const Direction: React.FC<DirectionProps> = ({
  label,
  airports,
  handleSetAirport,
  airportName,
  handleChangeAirportName,
  index,
  showDropDown,
  isLoadCities,
  handleLoadingEarth,
}) => {
  const { isShowExtraWindow, setIsShowExtraWindow, handleToggleExtraWindow } =
    useExtraWindow();

  //close drop down on selection
  useEffect(() => {
    setIsShowExtraWindow({ active: true, anim: false });

    const timer = setTimeout(() => {
      setIsShowExtraWindow({ active: false, anim: false });
    }, 200);

    return () => clearTimeout(timer);
  }, [airportName, setIsShowExtraWindow]);
  //close drop down on selection

  useEffect(() => {
    if (showDropDown === index) {
      setIsShowExtraWindow({ active: true, anim: false });

      const timer = setTimeout(() => {
        setIsShowExtraWindow({ active: true, anim: true });
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [index, setIsShowExtraWindow, showDropDown]);

  return (
    <DropDownUI
      {...isShowExtraWindow}
      setIsShowDropDown={setIsShowExtraWindow}
      className="dropdown-item"
    >
      <div
        className="direction"
        onClick={(e) => {
          e.stopPropagation();
          handleToggleExtraWindow();
          handleLoadingEarth();
        }}
      >
        <InputUI
          classInputBlock="input-block"
          label={label}
          value={airportName}
          onChange={handleChangeAirportName}
        />
        <div className="earth-preloader">
          {index === isLoadCities && <PreloaderEarth />}
        </div>
      </div>
      <div className="airports-list">
        {airports &&
          airports?.map((airport) => (
            <div
              onClick={(e) => {
                e.stopPropagation();
                handleSetAirport(airport);
              }}
              key={`${airport.code}${Math.random()}`}
              className="airport-item"
            >
              <div className="city">
                <p>{airport.name.ru}</p>
                <small>{airport.countryName.ru}</small>
              </div>
              <div>{airport.code}</div>
            </div>
          ))}
      </div>
    </DropDownUI>
  );
};
