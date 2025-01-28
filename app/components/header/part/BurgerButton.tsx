"use client";

import userAuth from "@/store/userAuth";
import { ButtonUI } from "../../ui";
import { BurgerButtonIcon, CancelIcon } from "../../ui/icons";
import "./styles.scss";

interface BurgerButtonProps {
  onClick: () => void;
  isActive: boolean;
}

export const BurgerButton: React.FC<BurgerButtonProps> = ({
  onClick,
  isActive,
}) => {
  const isAuth = userAuth((state) => state.isAuth);

  return isAuth ? (
    <ButtonUI
      onClick={onClick}
      icon={isActive ? <CancelIcon /> : <BurgerButtonIcon />}
    />
  ) : null;
};
