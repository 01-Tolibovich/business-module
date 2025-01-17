import { useEffect, useRef, useState } from "react";

type DropDownState = {
  active: boolean;
  anim: boolean;
};

export const useDropDown = () => {
  const [isShowDropDown, setIsShowDropDown] = useState<DropDownState>({
    active: false,
    anim: false,
  });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleToggleDropDown = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    const toggleDropDown = (
      elem1: keyof DropDownState,
      elem2: keyof DropDownState,
      bool: boolean
    ) => {
      setIsShowDropDown((prevState) => ({
        ...prevState,
        [elem1]: bool,
      }));

      timeoutRef.current = setTimeout(() => {
        setIsShowDropDown((prevState) => ({ ...prevState, [elem2]: bool }));
      }, 200);
    };

    if (!isShowDropDown.active && !isShowDropDown.anim) {
      toggleDropDown("active", "anim", true);
    }
    if (isShowDropDown.anim && isShowDropDown.active) {
      toggleDropDown("anim", "active", false);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, []);

  return {
    isShowDropDown,
    setIsShowDropDown,
    handleToggleDropDown,
  }
};
