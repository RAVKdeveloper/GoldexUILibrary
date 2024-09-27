import { useCallback, useEffect, useState } from 'react';

import type { SelectOptions } from '../assets/MultiSelect.type';

export const useMultiSelect = (
  changeValue: (val: SelectOptions[]) => void,
  value: SelectOptions[],
  allDeleted?: boolean
) => {
  const [isOpenDropDown, setIsOpenDropdown] = useState<boolean>(false);

  const openDropdown = useCallback(() => {
    setIsOpenDropdown((prev) => !prev);
  }, []);

  const changeSelectValue = (selectValue: SelectOptions) => {
    changeValue([...value, selectValue]);
  };

  const removeValue = (removeValue: string) => {
    changeValue(value.filter(({ value }) => value !== removeValue));
  };

  const deleteAllValue = useCallback(() => {
    changeValue([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    changeValue([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (allDeleted) {
      changeValue([]);
    }
  }, [allDeleted]);

  return {
    isOpenDropDown,
    openDropdown,
    changeSelectValue,
    value,
    removeValue,
    deleteAllValue,
  };
};
