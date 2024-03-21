import { FC } from "react";
import { RussianFlagIcon, GBFlagIcon } from "goldex-icon-library";

import { Dropdown } from "../../../../main";

import type { LngModalType } from "../assets/LngModal.type";

import s from "../assets/style.module.css";

export const LanguageModal: FC<LngModalType> = ({ activeLng, changeLng }) => {
  const languages = [
    {
      Icon: RussianFlagIcon,
      lng: "ru",
      name: activeLng === "ru" ? "Русский" : "Russian",
    },
    {
      Icon: GBFlagIcon,
      lng: "en",
      name: activeLng === "ru" ? "Английский" : "English",
    },
  ];

  return (
    <article className={s.root}>
      {languages.map(({ Icon, lng, name }) => (
        <Dropdown
          icon={<Icon width={16} height={16} />}
          onClick={() => changeLng(lng)}
          placeholder={name}
          isSuccess={activeLng === lng ? true : false}
          active={activeLng === lng ? true : false}
        />
      ))}
    </article>
  );
};
