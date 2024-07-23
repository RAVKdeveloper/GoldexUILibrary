import { useEffect, useState } from "react";

import type { OptionType } from "../../SelectInput/assets/SelectInput.type";

interface Returned {
  isBack: boolean;
  isNext: boolean;
  changeLimit: (val: OptionType) => void;
  limit: number;
}

export const usePagination = (
  currentPage: number,
  pages: number,
  defaultLimit: number,
  onChangeLimit?: (limit: number) => void
): Returned => {
  const [isBack, setIsBack] = useState<boolean>(false);
  const [isNext, setIsNext] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(defaultLimit);

  const changeLimit = (val: OptionType) => {
    if (!isNaN(+val.value)) {
      setLimit(+val.value);
      onChangeLimit?.(+val.value);
    }
  };

  const checkActivated = () => {
    if (currentPage >= pages) {
      setIsNext(false);
      setIsBack(true);
    } else if (currentPage < pages) {
      if (currentPage === 1) {
        setIsNext(true);
        setIsBack(false);
      } else {
        setIsBack(true);
        setIsNext(true);
      }
    }
  };

  useEffect(() => {
    checkActivated();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, pages]);

  return {
    isBack,
    isNext,
    changeLimit,
    limit,
  };
};
