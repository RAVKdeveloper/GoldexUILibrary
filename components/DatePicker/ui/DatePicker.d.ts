import { FC } from 'react';
interface DatePickerProps {
    date: Date;
    setDate: (date: Date) => void;
    toggleShow?: (isShow: boolean) => void;
}
export declare const DatePicker: FC<DatePickerProps>;
export {};
