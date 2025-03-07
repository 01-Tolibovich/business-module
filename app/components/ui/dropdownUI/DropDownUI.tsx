"use client";

import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import "./styles.scss";
import { useViewportResize } from "@/hooks";

interface DropDownUIProps {
  children?: React.ReactNode | null;
  active: boolean;
  anim: boolean;
  left?: string;
  right?: string;
  setIsShowDropDown: Dispatch<
    SetStateAction<{ active: boolean; anim: boolean }>
  >;
  className?: string;
}

export const DropDownUI: React.FC<DropDownUIProps> = ({
  children,
  active,
  anim,
  left = "auto",
  right = "auto",
  setIsShowDropDown,
  className,
}) => {
  const dropDownChildren = React.Children.toArray(children);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropDownRef.current &&
      !dropDownRef.current.contains(event.target as Node)
    ) {
      setIsShowDropDown((prevState) => ({
        ...prevState,
        anim: false,
      }));

      timeoutRef.current = setTimeout(() => {
        setIsShowDropDown((prevState) => ({ ...prevState, active: false }));
      }, 200);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [overflowY, setOverflowY] =
    useState<React.CSSProperties["overflowY"]>("hidden");

  useEffect(() => {
    if (active && anim) {
      const timer = setTimeout(() => {
        setOverflowY("auto");
      }, 500);

      return () => clearTimeout(timer);
    }

    setOverflowY("hidden");
  }, [active, anim]);

  const { max } = useViewportResize();

  if (max.sm) {
    left = "0px";
    right = "0px";
  }

  console.log(max.sm);

  return (
    <div ref={dropDownRef} className="drop-down-ui">
      <div className="item">{dropDownChildren[0]}</div>
      {active && (
        <div
          style={{ left, right, overflowY: overflowY }}
          className={`drop-down-item ${anim ? "anim" : ""} ${className}`}
        >
          {dropDownChildren[1]}
        </div>
      )}
    </div>
  );
};
