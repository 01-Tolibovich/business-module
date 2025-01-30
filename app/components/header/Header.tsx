"use client";

import userAuth from "@/store/userAuth";
import { useCallback, useEffect, useRef, useState } from "react";
import { getUserInfo } from "@/services";
import Link from "next/link";
import { FlyLogo } from "../ui/logo";
import { BurgerButton, HeaderNav, TranslateButton, UserButton } from "./part";

import "./styles.scss";

export const Header = () => {
  const setUserData = userAuth((state) => state.setUserData);
  const setIsAuth = userAuth((state) => state.setIsAuth);
  const userDate = userAuth((state) => state.userData);
  const isAuth = userAuth((state) => state.isAuth);

  console.log(!!userDate);

  const [isActiveNavLinks, setIsActiveNavLinks] = useState<boolean>(false);

  useCallback(() => {
    if (!isAuth) {
      getUserInfo().then((userData) => {
        if (userData) {
          setUserData(userData);
          setIsAuth(true);
        } else {
          setUserData(null);
          setIsAuth(false);
          localStorage.removeItem("auth-storage");
        }
      });
    }
  }, [isAuth, setIsAuth, setUserData]);

  const toggleNavLinks = () => {
    setIsActiveNavLinks(!isActiveNavLinks);
  };

  const navLinksRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navLinksRef.current &&
      !navLinksRef.current.contains(event?.target as Node)
    ) {
      setIsActiveNavLinks(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div ref={navLinksRef} className="header-items-block">
        <Link href="/">
          <FlyLogo />
        </Link>
        <div className="buttons">
          <TranslateButton />
          <UserButton />
          <BurgerButton onClick={toggleNavLinks} isActive={isActiveNavLinks} />
        </div>
        <HeaderNav
          isActive={isActiveNavLinks}
          setIsActive={setIsActiveNavLinks}
        />
      </div>
    </header>
  );
};
