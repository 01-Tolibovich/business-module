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
  checked?: boolean,
  classNameInput?: string
  errors?: string | null;
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
  checked,
  classNameInput,
  errors,
}) => {
  return (
    <div className={`input-ui-block ${type === "radio" ? "type-radio" : ""}`}>
      {label ? (
        <label className="label-ui" htmlFor={htmlFor}>
          {label}
        </label>
      ) : null}
      <div className="input-block">
        <input
          className={`input-ui ${classNameInput}`}
          name={name}
          type={type}
          id={htmlFor}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          onBlur={onBlur}
          checked={checked}
        />
        {errors ? <small className="errors-message">{errors}</small> : null}
      </div>
    </div>
  );
};
