import { FC } from "react";

import { ChevronArrowDownIcon, ErrorIcon } from "goldex-icon-library";

import { Overflow } from "../../../main";

import { DropdownMultiSelect } from "../ui/dropdown";
import { CardMultiSelect } from "./card";

import { useMultiSelect } from "../logic/useMultiSelect.model";

import type { MultiSelectType } from "../assets/MultiSelect.type";

import s from "../assets/style.module.css";

export const MultiSelect: FC<MultiSelectType> = ({
  placeholder,
  options,
  onChangeValue,
  allDeleted,
  ...props
}) => {
  const {
    isOpenDropDown,
    openDropdown,
    value,
    changeSelectValue,
    removeValue,
    deleteAllValue,
  } = useMultiSelect(onChangeValue, allDeleted);

  return (
    <>
      <article className={s.root} {...props} data-testid="multiSelect">
        <div onClick={openDropdown} data-testid="click-to-open-dropdown">
          <div className={s.placeholder}>
            {value.length > 0 ? (
              value.map((value) => (
                <CardMultiSelect
                  cardValue={value}
                  removeItem={removeValue}
                  key={value.value}
                />
              ))
            ) : (
              <span>{placeholder}</span>
            )}
          </div>
          {value.length ? (
            <div className={s.mainIcon} onClick={deleteAllValue}>
              <ErrorIcon width={15} height={15} color="white" />
            </div>
          ) : (
            <div className={s.mainIcon}>
              <ChevronArrowDownIcon width={15} height={15} color="white" />
            </div>
          )}
        </div>
        <DropdownMultiSelect
          isOpen={isOpenDropDown}
          options={options}
          value={value}
          changeSelectValue={changeSelectValue}
          removeItem={removeValue}
        />
      </article>
      {isOpenDropDown && <Overflow cbClose={openDropdown} />}
    </>
  );
};
