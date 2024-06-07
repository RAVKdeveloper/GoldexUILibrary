import { FC } from "react";

import { Button, Dropdown } from "../../../main";

import type { DropDownSelect } from "../interface/dropdown.interface";

import s from "../assets/select.module.css";

export const DropdownSelect: FC<DropDownSelect> = ({
  options,
  isOpen,
  value,
  changeSelectValue,
  cbClose,
  placeholder,
  btnText,
}) => {
  return (
    <article className={`${s.dropdown} ${isOpen && s.open}`}>
      <div className={s.list}>
        {options.map((option) => {
          const isValue = option.value === value;
          return (
            <>
              {isValue ? (
                <Dropdown
                  key={option.value}
                  placeholder={option.label}
                  value={option.value}
                  active={true}
                  isSuccess={true}
                  onClick={() => {
                    changeSelectValue({
                      label: placeholder,
                      value: placeholder,
                    }),
                      cbClose();
                  }}
                />
              ) : (
                <Dropdown
                  key={option.value}
                  placeholder={option.label}
                  value={option.value}
                  active={false}
                  isSuccess={false}
                  onClick={() => {
                    changeSelectValue(option), cbClose();
                  }}
                />
              )}
            </>
          );
        })}
      </div>
      <Button
        variant="secondary"
        size="full"
        onClick={() => {
          changeSelectValue({
            label: "",
            value: "",
          }),
            cbClose();
        }}
      >
        {btnText}
      </Button>
    </article>
  );
};
