import React from "react";

type InputProps = {
  type: string;
  name: string;
  placeholder: string;
};

function Input({ type, name, placeholder }: InputProps) {
  return (
    <div className=" w-full">
      <label className=" relative block cursor-text w-full">
        <input
          className={
            "h-14 w-full border border-primary outline-none px-4 peer" +
            (type !== "date-ime-local" && " pt-2")
          }
          required
          name={name}
          type={type}
        />
        {type !== "datetime-local" && (
          <span className=" absolute top-0 left-0 px-4 text-sm flex items-center h-full peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs transition-all duration-100">
            {placeholder}
          </span>
        )}
      </label>
    </div>
  );
}

export default Input;
