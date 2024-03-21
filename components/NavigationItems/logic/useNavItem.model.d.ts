interface IsOpenType {
    isOpen: boolean;
    keyOpen: number | null;
}
export declare const useNavItem: (key: number) => {
    open: () => void;
    isOpen: IsOpenType;
};
export {};
