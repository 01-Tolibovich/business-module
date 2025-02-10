import { useEffect, useRef, useState } from "react";

type ExtraWindowState = {
  active: boolean;
  anim: boolean;
};

export const useExtraWindow = () => {
  const [isShowExtraWindow, setIsShowExtraWindow] = useState<ExtraWindowState>({
    active: false,
    anim: false,
  });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleToggleExtraWindow = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    const toggleDropDown = (
      elem1: keyof ExtraWindowState,
      elem2: keyof ExtraWindowState,
      bool: boolean
    ) => {
      setIsShowExtraWindow((prevState) => ({
        ...prevState,
        [elem1]: bool,
      }));

      timeoutRef.current = setTimeout(() => {
        setIsShowExtraWindow((prevState) => ({ ...prevState, [elem2]: bool }));
      }, 200);
    };

    if (!isShowExtraWindow.active && !isShowExtraWindow.anim) {
      toggleDropDown("active", "anim", true);
    }
    if (isShowExtraWindow.anim && isShowExtraWindow.active) {
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
    isShowExtraWindow,
    setIsShowExtraWindow,
    handleToggleExtraWindow,
  }
};
