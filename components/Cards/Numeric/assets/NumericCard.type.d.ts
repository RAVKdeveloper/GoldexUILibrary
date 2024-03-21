import { HTMLAttributes, ReactElement, ReactNode } from "react";
export interface NumericCardType extends HTMLAttributes<HTMLDivElement> {
    totalBalance: number;
    term: string;
    chart: ReactNode | ReactElement;
    profitability: number;
    textTotal: string;
}
