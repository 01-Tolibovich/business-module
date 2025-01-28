"use client";

import userAuth from "@/store/userAuth";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/services";
import Link from "next/link";
import { FlyLogo } from "../ui/logo";
import { BurgerButton, HeaderNav, TranslateButton, UserButton } from "./part";

import "./styles.scss";

export const Header = () => {
  const setUserData = userAuth((state) => state.setUserData);
  const setIsAuth = userAuth((state) => state.setIsAuth);

  const [isActiveNavLinks, setIsActiveNavLinks] = useState<boolean>(false);

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

  const toggleNavLinks = () => {
    setIsActiveNavLinks(!isActiveNavLinks);
  };

  return (
    <header className="header">
      <div className="header-items-block">
        <Link href="/">
          <FlyLogo />
        </Link>
        <div className="buttons">
          <TranslateButton />
          <UserButton />
          <BurgerButton onClick={toggleNavLinks} isActive={isActiveNavLinks} />
        </div>
        <HeaderNav isActive={isActiveNavLinks} setIsActive={setIsActiveNavLinks} />
      </div>
    </header>
  );
};
