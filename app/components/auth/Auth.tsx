"use client";

import userAuth from "@/store/userAuth";
import { ButtonUI } from "../ui";

import "./styles.scss";
import Link from "next/link";

export const Auth = () => {
  const isAuth = userAuth((state) => state.isAuth);
  
  return !isAuth ? (
    <div className="auth">
      <ButtonUI>Стать партнерем</ButtonUI>
      <Link href="/login">
        <ButtonUI>Войти</ButtonUI>
      </Link>
    </div>
  ) : null;
};
