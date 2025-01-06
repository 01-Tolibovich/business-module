import { useRef, useState } from "react";
import { DropDownUI, InputUI } from "../../ui";
import { Calendar } from "../../calendar";

import "./styles.scss";

interface DatePickerProps {
  date?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({ date }) => {
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
        <InputUI classInputBlock="date-picker-input" type="text" label={date} />
      </div>
      <Calendar />
    </DropDownUI>
  );
};
