import { FC } from "react";
import { AltArrowUpIcon, AltArrowDownIcon } from "goldex-icon-library";

import type { PercentType } from "../assets/Percent.type";

import s from "../assets/style.module.css";

export const Percent: FC<PercentType> = ({ value }) => {
  const action = value > 0 || value === 0 ? true : false;

  return (
    <div data-testid="percent" className={s.root}>
      {action ? (
        <AltArrowUpIcon width={16} height={16} color="#17B26A" />
      ) : (
        <AltArrowDownIcon width={16} height={16} color="#F04438" />
      )}
      <span className={`${action ? s.top : s.down}`}>{value} %</span>
    </div>
  );
};
