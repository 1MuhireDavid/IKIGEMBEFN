import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-md font-semibold text-white transition duration-200 ease-in-out hover:bg-opacity-80 focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};
