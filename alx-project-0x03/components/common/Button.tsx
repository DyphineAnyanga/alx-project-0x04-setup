// components/common/Button.tsx

import React from "react";
import { ButtonProps } from "@/interface";

const Button: React.FC<ButtonProps> = ({
  action,
  buttonLabel,
  buttonBackgroundColor,
}) => {
  const bgColor = {
    blue: "bg-blue-500 hover:bg-blue-600",
    green: "bg-green-500 hover:bg-green-600",
    orange: "bg-orange-500 hover:bg-orange-600",
  }[buttonBackgroundColor] || "bg-gray-500 hover:bg-gray-600";

  return (
    <button
      onClick={action}
      className={`text-white font-semibold py-2 px-4 rounded ${bgColor} transition duration-300`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
