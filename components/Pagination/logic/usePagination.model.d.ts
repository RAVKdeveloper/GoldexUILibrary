import type { OptionType } from "../../SelectInput/assets/SelectInput.type";
interface Returned {
    isBack: boolean;
    isNext: boolean;
    changeLimit: (val: OptionType) => void;
    limit: number;
}
export declare const usePagination: (currentPage: number, pages: number, defaultLimit: number, onChangeLimit?: ((limit: number) => void) | undefined) => Returned;
export {};
