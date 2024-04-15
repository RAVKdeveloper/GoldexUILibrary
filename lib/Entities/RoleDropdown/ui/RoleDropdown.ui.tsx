import { FC } from "react";
import { Dropdown } from "../../../main";

import { Roles } from "../assets/roles.data";

import type { RoleDropdownType } from "../assets/RoleDropdown.type";

import s from "../assets/style.module.css";

export const RoleDropdown: FC<RoleDropdownType> = ({
  data,
  activeTab,
  click,
  isOpen,
  ...props
}) => {
  return (
    <article {...props} className={`${s.root} ${isOpen && s.open}`}>
      <div className={s.wrapper}>
        {data &&
          data.map((el, i) => (
            <Dropdown
              placeholder={el}
              active={el === activeTab ? true : false}
              isSuccess={el === activeTab ? true : false}
              key={i}
              onClick={() => click(el)}
            />
          ))}
        {!data &&
          Roles.map((el, i) => (
            <Dropdown
              placeholder={el}
              active={el === activeTab ? true : false}
              isSuccess={el === activeTab ? true : false}
              key={i}
              onClick={() => click(el)}
            />
          ))}
      </div>
    </article>
  );
};
