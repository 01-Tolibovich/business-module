"use client";

import { useLayoutEffect, useState } from "react";
import { debounce } from "@/utils";
import { useEventListener } from "./useEventListener";

/**
 * @description Хук вовращает актуальную ширину и высоту вьюпорта
 *
 * @param {Number} interval Промежуток вызова функции
 * @param {Function} callback Функция коллбэк
 * @returns {{
 *   width: Number,
 *   height: Number,
 * }}
 */

interface useViewportResizeProps {
  interval?: number;
  callback?: (event: UIEvent) => void;
}

export const useViewportResize = ({
  interval = 200,
  callback = () => {},
}: useViewportResizeProps = {}) => {
  const [screen, setScreen] = useState({
    width: 0,
    height: 0,
  });

  const size = {
    xs: 480,
    sm: 650,
    md: 850,
    lg: 1150,
    xl: 1350,
    xxl: 1450
  }

  const max = {
    xs: screen.width < size.xs,
    sm: screen.width < size.sm,
    md: screen.width < size.md,
    lg: screen.width < size.lg,
    xl: screen.width < size.xl,
    xxl: screen.width < size.xxl
  }

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      setScreen({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  const watchViewPort = debounce((event: UIEvent) => {
    callback(event);
    setScreen({
      width: (event.target as Window).innerWidth,
      height: (event.target as Window).innerHeight,
    });
  }, interval);

  useEventListener("resize", watchViewPort);

  return { screen, size, max };
};
