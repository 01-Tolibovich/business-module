import React from "react";
import "./styles.scss";

interface DropDownUIProps {
  children?: React.ReactNode | null;
}

export const DropDownUI: React.FC<DropDownUIProps> = ({ children }) => {
  const dropDownChildren = React.Children.toArray(children)

  return (
    <div className="drop-down-ui">
      <div className="item">{dropDownChildren[0]}</div>
      <div className="drop-down-item">{dropDownChildren[1]}</div>
    </div>
  );
};
