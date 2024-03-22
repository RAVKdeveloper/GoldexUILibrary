import { FC } from "react";

import type { OverflowType } from "../assets/Overflow.type";

import s from "../assets/style.module.css";

export const Overflow: FC<OverflowType> = ({
  isTransperant = true,
  cbClose,
}) => {
  return (
    <div
      data-testid="overflow"
      className={`${s.root} ${!isTransperant && s.black}`}
      onClick={() => cbClose?.()}
    ></div>
  );
};
