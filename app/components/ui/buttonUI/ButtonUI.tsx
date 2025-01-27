"use client";

import { ButtonLoader } from "../loaders";
import "./styles.scss";

interface ButtonUIProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  loadText?: string;
  isLoad?: boolean;
  disabled?: boolean;
  [key: string]: unknown;
}

export const ButtonUI: React.FC<ButtonUIProps> = ({
  children,
  icon,
  className,
  loadText = "Загрузка",
  isLoad,
  disabled,
  ...rest
}) => {
  const renderButton = (conventionalStyles: string) => (
    <button
      disabled={isLoad || disabled}
      {...rest}
      className={`button-ui ${conventionalStyles} ${className}`}
    >
      {isLoad ? (
        <div className="loading-spiner">
          <ButtonLoader text={loadText} />
        </div>
      ) : (
        <>
          <span className="icon">{icon}</span>
          {children}
        </>
      )}
    </button>
  );

  if (icon && !children) {
    return renderButton("only-icon");
  } else if (!icon && children) {
    return renderButton("only-text");
  }
  return renderButton("icon-with-text");
};
