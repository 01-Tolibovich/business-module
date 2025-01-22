import { ChangeEvent, Dispatch, SetStateAction, useEffect } from "react";
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
  index: number;
  showDropDown: number;
  setshowDropDown: Dispatch<SetStateAction<number>>
};

export const Direction: React.FC<DirectionProps> = ({
  label,
  airports,
  handleSetAirport,
  airportName,
  handleChangeAirportName,
  index,
  showDropDown,
  // setshowDropDown,
}) => {
  const { isShowDropDown, setIsShowDropDown, handleToggleDropDown } =
    useDropDown();

  //close drop down on selection
  useEffect(() => {
    // if (!airportName) return;

    setIsShowDropDown({ active: true, anim: false });

    const timer = setTimeout(() => {
      setIsShowDropDown({ active: false, anim: false });
    }, 200);

    return () => clearTimeout(timer);
  }, [airportName, setIsShowDropDown]);
  //close drop down on selection

  useEffect(() => {
    if (showDropDown === index) {
      setIsShowDropDown({ active: true, anim: false });

    const timer = setTimeout(() => {
      setIsShowDropDown({ active: true, anim: true });
    }, 200);

    return () => clearTimeout(timer);
    }
  }, [index, setIsShowDropDown, showDropDown])

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
        />
      </div>
      <div className="airports-list">
        {airports &&
          airports?.map((airport) => (
            <div
              onClick={() => handleSetAirport(airport)}
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
