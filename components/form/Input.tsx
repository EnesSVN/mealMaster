import React from "react";

type InputProps = {
  type: string;
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  errorMessage?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  touched?: boolean;
};
function Input({
  type,
  name,
  placeholder,
  onChange,
  value,
  errorMessage,
  onBlur,
  touched,
}: InputProps) {
  return (
    <div className=" w-full">
      <label className=" relative block cursor-text w-full">
        <input
          className={
            "h-14 w-full border border-primary outline-none px-4 peer" +
            (type !== "date-ime-local" && " pt-2") +
            (touched && errorMessage && " border-red-500")
          }
          required
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {type !== "datetime-local" && (
          <span className=" absolute top-0 left-0 px-4 text-sm flex items-center h-full peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs transition-all duration-100">
            {placeholder}
          </span>
        )}
      </label>
      {touched && <span className="text-red-500 text-sm">{errorMessage}</span>}
    </div>
  );
}

export default Input;
