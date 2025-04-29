import React from "react";
import { ButtonProps } from "./Button.interface";

const Button: React.FC<ButtonProps> = ({
  label,
  type,
  btnClass,
  onclick,
  disabled,
}) => {
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        onClick={onclick}
        className={`${btnClass} rounded-md`}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
