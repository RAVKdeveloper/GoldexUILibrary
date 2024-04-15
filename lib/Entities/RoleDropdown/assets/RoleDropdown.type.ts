import { HTMLAttributes } from "react";

export interface RoleDropdownType extends HTMLAttributes<HTMLDivElement> {
  data?: string[];
  activeTab: string;
  click: (str: string) => void;
  isOpen: boolean;
}
