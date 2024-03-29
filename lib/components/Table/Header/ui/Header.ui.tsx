import { FC } from "react";

import type { HeaderTableType } from "../assets/HeaderTable.type";

import s from "../assets/style.module.css";

export const HeaderTable: FC<HeaderTableType> = ({ text, children }) => {
  return (
    <th className={s.root}>
      {text}
      {children}
    </th>
  );
};
