"use client";

import userAuth from "@/store/userAuth";
import { ButtonUI } from "../ui";

import "./styles.scss";
import Link from "next/link";
import { useAnimationsOnVisible } from "@/hooks";

export const Auth = () => {
  const isAuth = userAuth((state) => state.isAuth);

  const {visibleIndexes, refs} = useAnimationsOnVisible()
  
  return !isAuth ? (
    <div ref={(el) => {(refs.current[0] = el)}} className={`auth ${visibleIndexes.has(0) ? "is-visible" : ""}`}>
      <ButtonUI>Стать партнерем</ButtonUI>
      <Link href="/login">
        <ButtonUI>Войти</ButtonUI>
      </Link>
    </div>
  ) : null;
};
