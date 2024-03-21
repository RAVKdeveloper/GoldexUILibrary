export interface CheckboxType {
    selected: boolean;
    variant?: 'plus' | 'minus';
    disabled?: boolean;
    onClick: () => void;
}
