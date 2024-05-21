import { FC } from "react";

import { CloseIcon } from "goldex-icon-library";

import type { CardMultiSelectType } from "../assets/MultiSelect.type";

import s from "../assets/style.module.css";

export const CardMultiSelect: FC<CardMultiSelectType> = ({
  cardValue,
  removeItem,
}) => {
  return (
    <div className={s.card}>
      {cardValue.label}
      <div onClick={() => removeItem(cardValue.value)}>
        <CloseIcon width={12} height={12} color="gray" />
      </div>
    </div>
  );
};
