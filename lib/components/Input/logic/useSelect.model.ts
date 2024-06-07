import { useState } from "react";

export const useSelect = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);

  const openDropdown = () => {
    setIsOpenDropdown((prev) => !prev);
  };

  return {
    isOpenDropdown,
    openDropdown,
  };
};
