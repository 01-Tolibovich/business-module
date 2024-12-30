"use client";

import { useRef, useState } from "react";
import { ButtonUI, DropDownUI } from "../../ui";
import "./styles.scss";
import { UserIcon } from "../../ui/icons";
import userAuth from "@/store/userAuth";
import { useRouter } from "next/navigation";

export const UserButton = () => {
  const [isShowDropDown, setIsShowDropDown] = useState({
    active: false,
    anim: false,
  });

  const isAuth = userAuth((state) => state.isAuth);

  const router = useRouter();

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
  return isAuth ? (
    <DropDownUI {...isShowDropDown} setIsShowDropDown={setIsShowDropDown}>
      <ButtonUI icon={<UserIcon />} onClick={handleToggleDropDown} />
      <div>
        dfgesgergsg ergrewgwreg grewgwe wergewgwerg ergrewgwregerwgewr gerwgwer
      </div>
    </DropDownUI>
  ) : (
    <ButtonUI icon={<UserIcon />} onClick={() => router.push("/login")} />
  );
};
