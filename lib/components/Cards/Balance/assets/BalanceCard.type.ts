import { ReactNode } from "react";

export interface BalanceCardType {
  balance: number;
  icon?: ReactNode;
  currency: string;
  height?: "sm" | "lg";
}
