import { LeadIcon } from "goldex-icon-library";
interface ChildType {
    id: number;
    name: string;
    isEnd: boolean;
    indentity: string;
}
interface Type {
    id: number;
    name: string;
    Icon: typeof LeadIcon;
    type: "list" | "main";
    auto: boolean;
    lng: "ru" | "en";
    indentity: string;
    childs?: ChildType[];
}
export declare const SidebarsNavItems: Type[];
export {};
