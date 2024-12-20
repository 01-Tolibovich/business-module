import "./styles.scss";

interface InputUIProps {
  htmlFor?: string;
  label?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputUI: React.FC<InputUIProps> = ({
  htmlFor,
  label,
  type = "text",
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div>
      {label ? <label className="label-ui" htmlFor={htmlFor}>{label}</label> : null }
      <input
        className="input-ui"
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};
