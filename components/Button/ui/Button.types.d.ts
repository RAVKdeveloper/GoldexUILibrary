import { ButtonHTMLAttributes, ReactNode } from "react";
export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
    iconLocation?: "end" | "start";
    icon?: ReactNode;
    children?: ReactNode;
    variant: "primary" | "secondary" | "critical";
    size?: "md" | "lg" | "sm" | "es" | "full";
    isActive?: boolean;
}
