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
  errors,
}) => {
  return (
    <div>
      {label ? (
        <label className="label-ui" htmlFor={htmlFor}>
          {label}
        </label>
      ) : null}
      <div className="input-block">
        <input
          className="input-ui"
          name={name}
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          onBlur={onBlur}
        />
        {errors ? <small className="errors-message">{errors}</small> : null}
      </div>
    </div>
  );
};
