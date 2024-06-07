import { FC, ReactNode } from "react";

import { DropdownSelect } from "./dropdown";
import { PlaceholderComponent } from "./placeholder.component";

import { useSelect } from "../logic/useSelect.model";

import type { SelectOptions } from "../assets/TextField.types";

import s from "../assets/select.module.css";

interface Props {
  icon?: ReactNode;
  placeholder?: string;
  callback?: () => void;
  sizeType?: "lg" | "sm" | "full";
  isError?: boolean;
  disabled?: boolean;
  options?: SelectOptions[];
  activeValue?: string | number;
  changeSelectValue?: (value: SelectOptions) => void;
  isOpenOverflow?: boolean;
  readonly btnText?: string;
}

export const SelectComponent: FC<Props> = ({
  icon,
  placeholder,
  callback,
  sizeType = "lg",
  isError = false,
  disabled = false,
  options,
  activeValue,
  changeSelectValue,
  isOpenOverflow,
  btnText,
}) => {
  const { isOpenDropdown, openDropdown } = useSelect();

  return (
    <>
      {isOpenOverflow && !options && (
        <div className={s.overflow} onClick={() => callback?.()} />
      )}
      {isOpenDropdown && options && (
        <div className={s.overflow} onClick={openDropdown} />
      )}
      <div className={s.selectBox}>
        {options && changeSelectValue && activeValue ? (
          <div
            onClick={openDropdown}
            className={`${s.root} ${s[sizeType]} ${isError && s.error} ${
              disabled && s.dis
            }`}
          >
            <PlaceholderComponent icon={icon} placeholder={placeholder} />
          </div>
        ) : (
          <div
            onClick={() => callback?.()}
            className={`${s.root} ${s[sizeType]} ${isError && s.error} ${
              disabled && s.dis
            }`}
          >
            <PlaceholderComponent icon={icon} placeholder={placeholder} />
          </div>
        )}
        {options && changeSelectValue && (
          <DropdownSelect
            options={options}
            value={activeValue ? activeValue.toString() : ""}
            isOpen={isOpenDropdown}
            changeSelectValue={changeSelectValue}
            cbClose={openDropdown}
            placeholder={placeholder ?? ""}
            btnText={btnText ?? ""}
          />
        )}
      </div>
    </>
  );
};
