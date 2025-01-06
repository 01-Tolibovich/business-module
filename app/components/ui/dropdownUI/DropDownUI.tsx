"use client";

import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import "./styles.scss";

interface DropDownUIProps {
  children?: React.ReactNode | null;
  active: boolean;
  anim: boolean;
  left?: string;
  right?: string;
  setIsShowDropDown: Dispatch<
    SetStateAction<{ active: boolean; anim: boolean }>
  >;
  className?: string
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
      }, 400);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div ref={dropDownRef} className="drop-down-ui">
      <div className="item">{dropDownChildren[0]}</div>
      {active && (
        <div style={{ left, right}} className={`drop-down-item ${anim ? "anim" : ""} ${className}`}>
          {dropDownChildren[1]}
        </div>
      )}
    </div>
  );
};

// const [isShowDropDown, setIsShowDropDown] = useState({
//     active: false,
//     anim: false,
//   });

//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   const handleToggleDropDown = () => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//       timeoutRef.current = null;
//     }

//     const toggleDropDown = (
//       elem1: keyof typeof isShowDropDown,
//       elem2: keyof typeof isShowDropDown,
//       bool: boolean
//     ) => {
//       setIsShowDropDown((prevState) => ({
//         ...prevState,
//         [elem1]: bool,
//       }));

//       timeoutRef.current = setTimeout(() => {
//         setIsShowDropDown((prevState) => ({ ...prevState, [elem2]: bool }));
//       }, 200);
//     };

//     if (!isShowDropDown.active && !isShowDropDown.anim) {
//       toggleDropDown("active", "anim", true);
//     }
//     if (isShowDropDown.anim && isShowDropDown.active) {
//       toggleDropDown("anim", "active", false);
//     }
//   };