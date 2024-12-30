"use client";

import userAuth from "@/store/userAuth";
import { ButtonUI } from "../../ui";
import { BurgerButtonIcon } from "../../ui/icons";
import "./styles.scss";

export const BurgerButton = () => {
  const isAuth = userAuth((state) => state.isAuth);

  return isAuth ? <ButtonUI icon={<BurgerButtonIcon />} /> : null;
};
