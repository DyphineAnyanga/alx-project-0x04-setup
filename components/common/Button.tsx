// components/common/Button.tsx
import React from "react";
import { ButtonProps } from "@/interface";

const Button = ({
  buttonLabel,
  buttonSize = "medium",
  buttonBackgroundColor = "blue",
  action,
}: ButtonProps) => {
  return (
    <button
      className={`btn ${buttonSize} ${buttonBackgroundColor}`}
      onClick={action}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;


