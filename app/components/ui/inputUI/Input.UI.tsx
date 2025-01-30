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
  checked?: boolean;
  classInput?: string;
  classInputBlock?: string;
  errors?: string | null;
  readOnly?: boolean;
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
  classInputBlock,
  classInput,
  errors,
  readOnly = false,
}) => {
  const renderInputType = (inputType: string) => {
    switch (inputType) {
      case "radio":
        return "type-radio";
      case "checkbox":
        return "type-checkbox";
      default:
        return "";
    }
  };

  return (
    <div className={`input-ui-block ${renderInputType(type)}`}>
      {label ? (
        <label className="label-ui" htmlFor={htmlFor}>
          {label}
        </label>
      ) : null}
      <div className={`input-block ${classInputBlock ? classInputBlock : ""}`}>
        <input
          className={`input-ui ${classInput ? classInput : ""}`}
          name={name}
          type={type}
          id={htmlFor}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          onBlur={onBlur}
          checked={checked}
          readOnly={readOnly}
        />
        {errors ? <small className="errors-message">{errors}</small> : null}
      </div>
    </div>
  );
};
