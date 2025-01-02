"use client";

import Link from "next/link";
import { FlyLogo } from "../ui/logo";
import { BurgerButton, TranslateButton, UserButton } from "./part";

import "./styles.scss";
import userAuth from "@/store/userAuth";
import { useEffect } from "react";
import { getUserInfo } from "@/services";

export const Header = () => {
  const setUserData = userAuth((state) => state.setUserData);
  const setIsAuth = userAuth((state) => state.setIsAuth);

  useEffect(() => {
    getUserInfo().then((userData) => {
      if (userData) {
        setUserData(userData);
        setIsAuth(true);
      } else {
        setUserData(null);
        setIsAuth(false);
      }
    });
  }, [setIsAuth, setUserData]);

  return (
    <header className="header">
      <div className="header-items-block">
        <Link href="/">
          <FlyLogo />
        </Link>
        <div className="buttons">
          <TranslateButton />
          <UserButton />
          <BurgerButton />
        </div>
      </div>
    </header>
  );
};
