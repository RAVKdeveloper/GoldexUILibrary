import { SearchIcon } from "goldex-icon-library";
import { FC, InputHTMLAttributes, forwardRef } from "react";

import s from "../assets/search.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  cbSearch?: () => void;
  disabled?: boolean;
}

export const SearchInput: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ cbSearch, disabled, ...props }, ref) => {
    return (
      <div className={`${s.wrapper} ${disabled && s.dis}`}>
        <input className={s.root} ref={ref} {...props} />
        <div onClick={() => cbSearch?.()} className={s.icon}>
          <SearchIcon width={19} height={19} opacity={0.4} />
        </div>
      </div>
    );
  }
);
