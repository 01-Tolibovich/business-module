"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ButtonUI, DropDownUI, InputUI } from "../ui";
import { BurgerButtonIcon, TranslateIcon, UserIcon } from "../ui/icons";
import { FlyLogo } from "../ui/logo";

import "./styles.scss";

export const Header = () => {
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

    const toggleDropDown = (elem1: keyof typeof isShowDropDown, elem2: keyof typeof isShowDropDown, bool: boolean) => {
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
    <header className="header">
      <div className="header-items-block">
        <Link href="/">
          <FlyLogo />
        </Link>
        <div className="buttons">
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
          <ButtonUI icon={<UserIcon />} />
          <ButtonUI icon={<BurgerButtonIcon />} />
        </div>
      </div>
    </header>
  );
};
