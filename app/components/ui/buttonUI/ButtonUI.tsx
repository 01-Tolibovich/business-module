"use client"

import { LoadingSpinningDots } from "../icons";
import "./styles.scss";

interface ButtonUIProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  isLoad?: boolean
  [key: string]: unknown;
}

export const ButtonUI: React.FC<ButtonUIProps> = ({
  children,
  icon,
  className,
  isLoad,
  ...rest
}) => {
  const renderButton = (conventionalStyles: string) => (
    <button disabled={isLoad} {...rest} className={`button-ui ${conventionalStyles} ${className}`}>
      { isLoad ? (<div className="loading-spiner"><LoadingSpinningDots /></div>)
        : <><span className="icon">{icon}</span>{children}</>}
    </button>
  );

  if (icon && !children) {

    return renderButton("only-icon");
  } else if (!icon && children) {

    return renderButton("only-text");
  }
  return renderButton("icon-with-text");
};
