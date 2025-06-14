import { ButtonProps } from "@/interface";

const Button = ({ buttonLabel, buttonSize, buttonBackgroundColor, action }: ButtonProps) => {
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
