import { useCallback, useState } from "react";

import type { SelectOptions } from "../assets/MultiSelect.type";

export const useMultiSelect = () => {
  const [isOpenDropDown, setIsOpenDropdown] = useState<boolean>(false);
  const [value, setValue] = useState<SelectOptions[]>([]);

  const openDropdown = useCallback(() => {
    setIsOpenDropdown((prev) => !prev);
  }, []);

  const changeSelectValue = (selectValue: SelectOptions) => {
    setValue((prev) => [...prev, selectValue]);
  };

  const removeValue = (removeValue: string) => {
    setValue((prev) => prev.filter(({ value }) => value !== removeValue));
  };

  const deleteAllValue = useCallback(() => {
    setValue([]);
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
