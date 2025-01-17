import { ChangeEvent } from "react";

import { DropDownUI, InputUI } from "../../../ui";
import { Calendar } from "../../../calendar";

import "./styles.scss";
import moment from "moment";
import { useDropDown } from "@/hooks";

interface DatePickerProps {
  label?: string;
  handleSetDate: (year: number, month: number, day: number | null) => void;
  date: string;
  handleDateChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({ label, handleSetDate, date, handleDateChange }) => {
  const {isShowDropDown, setIsShowDropDown, handleToggleDropDown} = useDropDown();

  return (
    <DropDownUI {...isShowDropDown} setIsShowDropDown={setIsShowDropDown}>
      <div className="date-picker-block" onClick={handleToggleDropDown}>
        <InputUI classInputBlock="date-picker-input" type="text" label={label} value={date && moment(date).format("DD MMMM, dd")} onChange={handleDateChange} readOnly/>
      </div>
      <Calendar handleSetDate={handleSetDate}/>
    </DropDownUI>
  );
};
