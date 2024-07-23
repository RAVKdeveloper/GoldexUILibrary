import { FC } from "react";

import { Button, SelectInput } from "../../../main";
import type { PaginationType } from "../assets/Pagination.type";
import { usePagination } from "../logic/usePagination.model";

import s from "../assets/style.module.css";

export const Pagination: FC<PaginationType> = ({
  currentPage,
  pages,
  btnPrev = "Back",
  btnNext = "Next",
  textContent,
  next,
  back,
  disabledNext,
  disabledPrev,
  defaultLimit,
  limitText,
  onChangeLimit,
}) => {
  const { isBack, isNext, limit, changeLimit } = usePagination(
    currentPage,
    pages,
    defaultLimit ?? 10,
    onChangeLimit
  );

  return (
    <article className={s.root}>
      <div className={s.content}>{textContent}</div>
      <div className={s.actions}>
        <SelectInput
          options={[
            { label: "10", value: "10", id: 1 },
            { label: "20", value: "20", id: 1 },
            { label: "50", value: "50", id: 1 },
            { label: "100", value: "100", id: 1 },
          ]}
          active={limit?.toString() ?? "10"}
          onClickOption={changeLimit}
          placeholder={limitText ?? "Limit"}
          sizeType="sm"
        />
        <div className={s.btnRow}>
          <Button
            variant="secondary"
            size="sm"
            disabled={!isBack || disabledPrev}
            onClick={back}
          >
            {btnPrev}
          </Button>
          <Button
            variant="secondary"
            size="sm"
            disabled={!isNext || disabledNext}
            onClick={next}
          >
            {btnNext}
          </Button>
        </div>
      </div>
    </article>
  );
};
