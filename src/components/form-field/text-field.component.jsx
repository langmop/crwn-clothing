import { noop } from "lodash";
import React from "react";

const TextField = ({
  type,
  label = "Email",
  value = "",
  onChange = noop,
  required = false,
}) => {
  return (
    <div>
      <input
        onChange={onChange}
        value={value}
        id={label}
        type={type}
        required={required}
        name={label}
        className="input-class border-[1px] rounded-[8px] border-solid border-[#B8D6BF] h-[56px] focus:!outline-none p-[12px] text-blue-500"
      />
      <label
        className="relative left-[24px] focus:bg-green-300 text-[16px]"
        htmlFor={label}
      >
        <div>
          <span className="bg-white opacity-70 w-auto">{label}</span>
        </div>
      </label>
    </div>
  );
};

export default TextField;
