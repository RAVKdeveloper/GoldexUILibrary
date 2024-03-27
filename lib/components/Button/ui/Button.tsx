import { FC } from "react";

import type { ButtonType } from "./Button.types";

import s from "./style.module.css";

export const Button: FC<ButtonType> = ({
  iconLocation = "start",
  icon,
  children,
  variant,
  size = "md",
  isActive,
  ...props
}) => {
  return (
    <button
      className={`
        ${s.button} 
        ${`${s[variant]} ${isActive ? s.active : ""}`} 
        ${s[size]} 
        ${props.disabled && s.disabled}
        ${icon && !children && `${s.onlyIcon} ${size && s[size]}`}
        `}
      {...props}
    >
      {iconLocation === "start" && icon}
      {children && children}
      {iconLocation === "end" && icon}
    </button>
  );
};
