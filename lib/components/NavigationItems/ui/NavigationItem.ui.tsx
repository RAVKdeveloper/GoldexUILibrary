import { FC } from "react";

import type { NavigationItemType } from "../assets/NavigationItem.type";

import { useNavItem } from "../logic/useNavItem.model";

import s from "../assets/style.module.css";

export const NavigationItem: FC<NavigationItemType> = ({
  Icon,
  listNodes,
  badge,
  isEnd = false,
  text,
  isActive = false,
  disabled = false,
  type = "main",
  keyOpen = 0,
  auto = false,
}) => {
  const { open, isOpen } = useNavItem(keyOpen);

  const isOpenedList = isOpen.keyOpen === keyOpen && isOpen.isOpen;

  return (
    <li className={s.wrapper}>
      <div
        className={`
         ${s.root} 
         ${s[type]}
         ${isActive && s.active}
         ${auto && isOpenedList && s.active}
         ${disabled && s.dis}
         ${Icon ? "" : isEnd ? s.endBorder : s.middleBorder}
         `}
        onClick={open}
      >
        <div className={s.content}>
          {Icon && (
            <Icon
              width={20}
              height={20}
              opacity={isActive || (isOpenedList && auto) ? 1 : 0.4}
            />
          )}
          {text}
        </div>
        <div className={s.badge}>{badge && badge}</div>
      </div>
      {listNodes && (
        <ul className={`${s.listNodes} ${isOpenedList && s.open}`}>
          {listNodes}
        </ul>
      )}
    </li>
  );
};
