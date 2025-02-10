"use client";

import { useExtraWindow } from "@/hooks";
import { ButtonUI, DropDownUI, InputUI } from "../../ui";
import { TranslateIcon } from "../../ui/icons";
import "./styles.scss";

export const TranslateButton = () => {
  const { isShowExtraWindow, setIsShowExtraWindow, handleToggleExtraWindow } =
    useExtraWindow();

  return (
    <DropDownUI
      right="0"
      {...isShowExtraWindow}
      setIsShowDropDown={setIsShowExtraWindow}
    >
      <ButtonUI icon={<TranslateIcon />} onClick={handleToggleExtraWindow} />
      <div>
        <InputUI
          name="lang"
          value="tj"
          label="Тоҷикӣ"
          type="radio"
          htmlFor="tj"
        />
        <InputUI
          name="lang"
          value="ru"
          label="Русский"
          type="radio"
          htmlFor="ru"
        />
        <InputUI
          name="lang"
          value="en"
          label="English"
          type="radio"
          htmlFor="en"
        />
      </div>
    </DropDownUI>
  );
};
