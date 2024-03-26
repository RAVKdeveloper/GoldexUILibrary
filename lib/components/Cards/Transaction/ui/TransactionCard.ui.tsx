import { FC } from "react";
import { MenuDotsIcon } from "goldex-icon-library";

import { Status } from "../../../../main";

import s from "../assets/style.module.css";

import { objVariantFields, objWordsVariantCard } from "../assets/data.mock";

import type { TransactionCardType } from "../assets/Transaction.type";

export const TransactionCard: FC<TransactionCardType> = ({
  variant,
  date,
  status,
  sum,
  language,
  cbOptions,
}) => {
  return (
    <article className={s.root}>
      <div className={s.left}>
        <div className={s.iconBody}>{objVariantFields[variant]}</div>
        <div className={s.column}>
          <p className={s.title}>
            {objWordsVariantCard[`${variant}_${language}`]}
          </p>
          <p className={s.date}>{date}</p>
        </div>
      </div>
      <div className={s.right}>
        <div className={s.dekstop}>
          <Status text={status} variant={status} />
        </div>
        <div className={s.mobile}>
          <Status text="" variant={status} />
        </div>
        <div className={s.content}>
          <p className={s.sum}>+ {sum} RUB</p>
          <div
            onClick={() => cbOptions?.()}
            className={s.optionsBody}
            data-testid="clickOption"
          >
            <MenuDotsIcon width={20} height={20} opacity={0.4} />
          </div>
        </div>
      </div>
    </article>
  );
};
