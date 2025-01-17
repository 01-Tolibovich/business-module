"use client";

import "./styles.scss";

interface ButtonLoaderProps {
  text?: string;
}
export const ButtonLoader: React.FC<ButtonLoaderProps> = ({
  text = "Подождите пожалуйста...",
}) => {
  return (
    <div
      className="button-loader"
      style={{ "--loader-text": `"${text}..."` } as React.CSSProperties}
    />
  );
};
