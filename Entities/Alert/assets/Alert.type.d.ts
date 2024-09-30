import { HTMLAttributes, ReactNode } from "react";
export interface AlertType extends HTMLAttributes<HTMLDivElement> {
    variant: "success" | "info" | "error" | "warning";
    children: ReactNode;
    sizeType?: "full" | "standart";
    isOpen: boolean;
}
