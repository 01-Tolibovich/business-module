import { FocusEventHandler } from "react";
import "./styles.scss";

interface InputUIProps {
  htmlFor?: string;
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputUI: React.FC<InputUIProps> = ({
  htmlFor,
  label,
  type = "text",
  name,
  value,
  placeholder,
  onBlur,
  onChange,
}) => {
  return (
    <div>
      {label ? <label className="label-ui" htmlFor={htmlFor}>{label}</label> : null }
      <input
        className="input-ui"
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        onBlur={onBlur}
      />
    </div>
  );
};
