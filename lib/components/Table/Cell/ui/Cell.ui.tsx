import { FC } from "react";

import type { CellTableType } from "../assets/CellTable.type";

import s from "../assets/style.module.css";

export const CellTable: FC<CellTableType> = ({ text, icon }) => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        {icon && icon}
        {text}
      </div>
    </div>
  );
};
