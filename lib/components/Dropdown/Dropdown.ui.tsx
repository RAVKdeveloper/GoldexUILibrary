import { FC } from "react";

import { InputDropdown } from "./ui/Input.ui";

import type { DropdownType } from "./assets/Dropdown.type";

export const Dropdown: FC<DropdownType> = (props) => {
  return (
    <fieldset className="w-full">
      <InputDropdown {...props} />
    </fieldset>
  );
};
