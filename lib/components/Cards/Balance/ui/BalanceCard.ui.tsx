import { FC } from "react";

import type { BalanceCardType } from "../assets/BalanceCard.type";

import s from "../assets/style.module.css";

export const BalanceCard: FC<BalanceCardType> = ({
  balance = 0,
  currency,
  icon,
  height = "sm",
}) => {
  return (
    <article className={`${s.root} ${height === "lg" && s.lg}`}>
      <div className={s.content}>
        <span className={`${s.balance} ${height === "lg" && s.lg}`}>
          {balance < 1000000000
            ? balance.toLocaleString("en", { minimumFractionDigits: 2 })
            : "1e"}
        </span>
        <span className={s.currency}>{currency}</span>
      </div>
      {icon && <div className={s.bgIcon}>{icon}</div>}
    </article>
  );
};
