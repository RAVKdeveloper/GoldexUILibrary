import { FC } from "react";

import { Dropdown } from "../../../main";

import type { DropDownMultiSelect } from "../assets/MultiSelect.type";

import s from "../assets/style.module.css";

export const DropdownMultiSelect: FC<DropDownMultiSelect> = ({
  options,
  isOpen,
  value,
  changeSelectValue,
  removeItem,
}) => {
  return (
    <article className={`${s.dropdown} ${isOpen && s.open}`}>
      <div className={s.list}>
        {options.map((option) => {
          return value.find(({ value }) => value === option.value) ? (
            <Dropdown
              key={option.value}
              placeholder={option.label}
              value={option.value}
              onClick={() => removeItem(option.value)}
              active={true}
              isSuccess={true}
            />
          ) : (
            <Dropdown
              key={option.value}
              placeholder={option.label}
              value={option.value}
              onClick={() => changeSelectValue(option)}
            />
          );
        })}
      </div>
    </article>
  );
};
