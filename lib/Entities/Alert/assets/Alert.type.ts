import { ReactNode } from "react";

export interface AlertType {
  variant: "success" | "info" | "error" | "warning";
  children: ReactNode;
  sizeType?: "full" | "standart";
  isOpen: boolean;
}
