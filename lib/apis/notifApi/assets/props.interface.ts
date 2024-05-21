import { ReactNode } from "react";

export interface NatifApiProps {
  message: string | ReactNode;
  variant: "error" | "success" | "warning" | "info";
}
