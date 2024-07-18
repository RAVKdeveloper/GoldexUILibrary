import { useCallback, useEffect, useState } from "react";

import type { SelectOptions } from "../assets/MultiSelect.type";

export const useMultiSelect = (changeValue: (val: SelectOptions[]) => void) => {
  const [isOpenDropDown, setIsOpenDropdown] = useState<boolean>(false);
  const [value, setValue] = useState<SelectOptions[]>([]);

  const openDropdown = useCallback(() => {
    setIsOpenDropdown((prev) => !prev);
  }, []);

  const changeSelectValue = (selectValue: SelectOptions) => {
    changeValue([...value, selectValue]);
    setValue((prev) => [...prev, selectValue]);
  };

  const removeValue = (removeValue: string) => {
    changeValue(value.filter(({ value }) => value !== removeValue));
    setValue((prev) => prev.filter(({ value }) => value !== removeValue));
  };

  const deleteAllValue = useCallback(() => {
    setValue([]);
    changeValue([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    changeValue([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isOpenDropDown,
    openDropdown,
    changeSelectValue,
    value,
    removeValue,
    deleteAllValue,
  };
};
