"use client"

import { useRef, useState } from "react";
import { ButtonUI, DropDownUI, InputUI } from "../../ui";
import { TranslateIcon } from "../../ui/icons";
import "./styles.scss";

export const TranslateButton = () => {
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
      }, 400);
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
      <ButtonUI icon={<TranslateIcon />} onClick={handleToggleDropDown} />
      <div>
        <InputUI
          name="lang"
          value="tj"
          label="Тоҷикӣ"
          type="radio"
          htmlFor="tj"
        />
        <InputUI
          name="lang"
          value="ru"
          label="Русский"
          type="radio"
          htmlFor="ru"
        />
        <InputUI
          name="lang"
          value="en"
          label="English"
          type="radio"
          htmlFor="en"
        />
      </div>
    </DropDownUI>
  );
};
