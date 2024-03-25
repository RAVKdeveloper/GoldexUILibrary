import { FC } from "react";

import type { BalanceCardType } from "../assets/BalanceCard.type";

import s from "../assets/style.module.css";

export const BalanceCard: FC<BalanceCardType> = ({
  balance = 0,
  currency,
  icon,
}) => {
  return (
    <article className={s.root}>
      <div className={s.content}>
        <span className={s.balance}>
          {balance < 1000000000
            ? balance.toLocaleString("en", { minimumFractionDigits: 2 })
            : "1e"}
        </span>
        <span className={s.currency}>{currency}</span>
      </div>
      <div className={s.bgIcon}>{icon}</div>
    </article>
  );
};
