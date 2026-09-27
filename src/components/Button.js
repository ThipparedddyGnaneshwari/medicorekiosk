import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "base",
  onClick,
  type = "button",
  disabled = false,
  fullWidth = false,
  ariaLabel,
}) => {
  const classes = [
    "btn",
    `btn-${variant}`,
    size === "lg" ? "btn-lg" : "",
    fullWidth ? "btn-block" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
