import { FC } from "react";
import { Percent } from "../../../../main";

import type { NumericCardType } from "../assets/NumericCard.type";

import s from "../assets/style.module.css";

export const NumericCard: FC<NumericCardType> = ({
  totalBalance,
  chart,
  term,
  profitability,
  textTotal,
  ...props
}) => {
  return (
    <article {...props} className={s.root}>
      <div className={s.content}>
        <div className={s.top}>
          <span className={s.balance}>
            {totalBalance.toLocaleString("en", { minimumFractionDigits: 2 })}
          </span>
          <Percent value={profitability} />
        </div>
        <div className={s.bottom}>
          <span>{textTotal}</span>
          <span>{term}</span>
        </div>
      </div>
      <div className={s.chart}>{chart}</div>
    </article>
  );
};
