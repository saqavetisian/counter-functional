import React, { memo, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, className = "", children, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className={`text-white font-bold py-2 px-4 rounded ${className}`}
      {...rest}
    >
      {children || "Increment"}
    </button>
  );
};

export default memo(Button);