"use client"

import "./styles.scss";

interface ButtonUIProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

export const ButtonUI: React.FC<ButtonUIProps> = ({
  children,
  icon,
  className,
  ...rest
}) => {
  const renderButton = (conventionalStyles: string) => (
    <button {...rest} className={`button-ui ${conventionalStyles} ${className}`}>
      <span className="icon">{icon}</span> {children}
    </button>
  );

  if (icon && !children) {

    return renderButton("only-icon");
  } else if (!icon && children) {

    return renderButton("only-text");
  }
  return renderButton("icon-with-text");
};
