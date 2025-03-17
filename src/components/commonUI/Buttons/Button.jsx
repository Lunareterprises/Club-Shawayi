import React from "react";

const Button = ({ label, onClick, className, type = "submit", leftIcon, rightIcon }) => {
  return (
    <button type={type} onClick={onClick} className={`flex items-center gap-2 ${className}`}>
      {leftIcon && <span>{leftIcon}</span>}
      {label}
      {rightIcon && <span >{rightIcon}</span>}
    </button>
  );
};

export default Button;
