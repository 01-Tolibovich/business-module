import { ChangeEvent, useEffect } from "react";
import { DropDownUI, InputUI } from "../../../ui";
import { Calendar } from "../../../calendar";
import moment from "moment";
import { useDropDown } from "@/hooks";
import { CancelIcon } from "@/app/components/ui/icons";
import searchParams from "@/store/searchParams";

import "./styles.scss";

interface DatePickerProps {
  label?: string;
  handleSetDate: (year: number, month: number, day: number | null) => void;
  date: string;
  handleDateChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  index: number;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  handleSetDate,
  date,
  handleDateChange,
  index,
}) => {
  const { isShowDropDown, setIsShowDropDown, handleToggleDropDown } =
    useDropDown();

  //close drop down on selection
  useEffect(() => {
    if (!date) return;

    setIsShowDropDown({ active: true, anim: false });

    const timer = setTimeout(() => {
      setIsShowDropDown({ active: false, anim: false });
    }, 400);

    return () => clearTimeout(timer);
  }, [date, setIsShowDropDown]);
  //close drop down on selection

  const searchParamsData = searchParams((state) => state.searchParamsData);
  const setSearchParamsData = searchParams(
    (state) => state.setSearchParamsData
  );
  const handleClear = () => {
    setSearchParamsData({
      ...searchParamsData,
      routes: searchParamsData.routes.map((route, i) =>
        i === index ? { ...route, date: "" } : route
      ),
    });
  };

  return (
    <DropDownUI {...isShowDropDown} setIsShowDropDown={setIsShowDropDown}>
      <div className="date-picker-block" onClick={handleToggleDropDown}>
        <InputUI
          classInputBlock="date-picker-input"
          type="text"
          label={label}
          value={date && moment(date).format("DD MMMM, dd")}
          onChange={handleDateChange}
          readOnly
        />
        <div
          className="clear"
          onClick={(e) => {
            e.stopPropagation();
            handleClear();
          }}
        >
          { searchParamsData.routes[index]?.date && <CancelIcon />}
        </div>
      </div>
      <Calendar handleSetDate={handleSetDate} />
    </DropDownUI>
  );
};
