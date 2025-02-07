"use client";

import { useEffect, useState } from "react";
import { HeadingUI } from "../ui";
import { useAnimationsOnVisible, useResetAuth } from "@/hooks";

import "./styles.scss";

export const Slogan: React.FC= () => {
  const typingText = " - РЕШЕНИЕ ДЛЯ ТЕХ, КТО ЛЕТАЕТ С УМОМ";
  const [typewriter, setTypewriter] = useState<string>("");
  const [index, setIndex] = useState(0);

  useResetAuth()

  useEffect(() => {
    if (index < typingText.length) {
      const timer = setTimeout(() => {
        setTypewriter((prevState) => prevState + typingText[index]);
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [index]);

  const { visibleIndexes, refs } = useAnimationsOnVisible();

  return (
    <div className="slogan">
      <HeadingUI as="h1" textAlign="center" className="title">
        <span>ONLINE</span>
        {typewriter}
      </HeadingUI>
      <p
        ref={(el) => {
          refs.current[0] = el;
        }}
        className={`description ${visibleIndexes.has(0) ? "is-visible" : ""}`}
      >
        <span>FLY.TJ FOR BUSINESS</span> - сервис для организации командировок
        на базе собственного ПО. Бронируйте билеты без сервисных сборов и
        наценок субагентов. Поддержим 24/7
      </p>
    </div>
  );
};
