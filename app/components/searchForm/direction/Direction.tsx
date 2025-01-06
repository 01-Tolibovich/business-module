import { ChangeEvent, useRef, useState } from "react";
import { DropDownUI, InputUI } from "../../ui";
import "./styles.scss";

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
  handleSetAirport: (airport: {name: {ru: string}}) => void;
  airportName: string;
  handleChangeAirportName: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Direction: React.FC<DirectionProps> = ({ label, airports, handleSetAirport, airportName, handleChangeAirportName }) => {
  const [isShowDropDown, setIsShowDropDown] = useState({
    active: false,
    anim: false,
  });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleToggleDropDown = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    const toggleDropDown = (
      elem1: keyof typeof isShowDropDown,
      elem2: keyof typeof isShowDropDown,
      bool: boolean
    ) => {
      setIsShowDropDown((prevState) => ({
        ...prevState,
        [elem1]: bool,
      }));

      timeoutRef.current = setTimeout(() => {
        setIsShowDropDown((prevState) => ({ ...prevState, [elem2]: bool }));
      }, 200);
    };

    if (!isShowDropDown.active && !isShowDropDown.anim) {
      toggleDropDown("active", "anim", true);
    }
    if (isShowDropDown.anim && isShowDropDown.active) {
      toggleDropDown("anim", "active", false);
    }
  };
  return (
    <DropDownUI {...isShowDropDown} setIsShowDropDown={setIsShowDropDown} className="dropdown-item">
      <div className="direction" onClick={handleToggleDropDown}>
        <InputUI classInputBlock="input-block" label={label} value={airportName} onChange={handleChangeAirportName}/>
      </div>
      <div className="airports-list">
        {airports &&
          airports.map((airport) => (
            <div onClick={() => handleSetAirport(airport)} key={airport.code} className="airport-item">
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
