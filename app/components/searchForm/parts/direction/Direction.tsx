import { ChangeEvent, useEffect } from "react";
import { DropDownUI, InputUI } from "../../../ui";
import "./styles.scss";
import { useDropDown } from "@/hooks";

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
};

export const Direction: React.FC<DirectionProps> = ({
  label,
  airports,
  handleSetAirport,
  airportName,
  handleChangeAirportName,
}) => {
  const { isShowDropDown, setIsShowDropDown, handleToggleDropDown } =
    useDropDown();

  //close drop down on selection
  useEffect(() => {
    if (!airportName) return;
  
    setIsShowDropDown({ active: true, anim: false });
  
    const timer = setTimeout(() => {
      setIsShowDropDown({ active: false, anim: false });
    }, 400);
  
    return () => clearTimeout(timer);
  }, [airportName, setIsShowDropDown]);
  //close drop down on selection

  return (
    <DropDownUI
      {...isShowDropDown}
      setIsShowDropDown={setIsShowDropDown}
      className="dropdown-item"
    >
      <div className="direction" onClick={handleToggleDropDown}>
        <InputUI
          classInputBlock="input-block"
          label={label}
          value={airportName}
          onChange={handleChangeAirportName}
          readOnly
        />
      </div>
      <div className="airports-list">
        {airports &&
          airports.map((airport) => (
            <div
              onClick={() => handleSetAirport(airport)}
              key={airport.code}
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
