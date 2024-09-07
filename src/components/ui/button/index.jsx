import React from "react";
import "./index.scss";

const Button = ({
  children,
  onClick,
  variant = "default",
  isActive = false,
}) => {
  return (
    <button
      className={`button ${variant} ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
