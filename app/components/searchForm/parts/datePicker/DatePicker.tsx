import { ChangeEvent, useRef, useState } from "react";

import { DropDownUI, InputUI } from "../../../ui";
import { Calendar } from "../../../calendar";

import "./styles.scss";
import moment from "moment";

interface DatePickerProps {
  label?: string;
  handleSetDate: (year: number, month: number, day: number | null) => void;
  date: string;
  handleDateChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({ label, handleSetDate, date, handleDateChange }) => {
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
    <DropDownUI {...isShowDropDown} setIsShowDropDown={setIsShowDropDown}>
      <div className="date-picker-block" onClick={handleToggleDropDown}>
        <InputUI classInputBlock="date-picker-input" type="text" label={label} value={date && moment(date).format("DD MMMM, dd")} onChange={handleDateChange} readOnly/>
      </div>
      <Calendar handleSetDate={handleSetDate}/>
    </DropDownUI>
  );
};
