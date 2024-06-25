import {
  ChevronRightIcon,
  LanguageIcon,
  LogOutIcon,
  SupportIcon,
  ThemeIcon,
} from "goldex-icon-library";
import { FC, useEffect, useState } from "react";

import { Dropdown, LanguageModal } from "../../../../main";

import type { ProfileModalType } from "../assets/ProfileModal.type";

import s from "../assets/style.module.css";

export const ProfileModal: FC<ProfileModalType> = ({
  cbPropLogout,
  cbPropLanguage,
  cbPropSupport,
  cbPropTheme,
  isDarkMode,
  textLng,
  textLogOut,
  textSupport,
  textTheme,
  activeLng,
  changeLng,
  isOpenMainModal,
}) => {
  const [isOpenLng, setIsOpenLng] = useState<boolean>(false);

  const openLngModal = () => {
    setIsOpenLng(!isOpenLng);
    cbPropLanguage?.();
  };

  useEffect(() => {
    if (!isOpenMainModal) setIsOpenLng(false);
  }, [isOpenMainModal]);

  return (
    <article data-testid="modal" className={s.root}>
      <Dropdown
        placeholder={textLng}
        icon={<LanguageIcon opacity={1} width={16} height={16} />}
        onClick={openLngModal}
        iconEnd={<ChevronRightIcon opacity={0.4} width={16} height={16} />}
      />
      {cbPropSupport && (
        <Dropdown
          placeholder={textSupport}
          icon={<SupportIcon opacity={1} width={16} height={16} />}
          onClick={() => cbPropSupport()}
        />
      )}
      {cbPropTheme && (
        <Dropdown
          placeholder={textTheme}
          icon={<ThemeIcon opacity={1} width={16} height={16} />}
          isToggle={true}
          cbToggle={() => cbPropTheme()}
          isActiveToggle={isDarkMode}
        />
      )}
      <Dropdown
        placeholder={textLogOut}
        icon={<LogOutIcon opacity={1} width={16} height={16} />}
        onClick={() => cbPropLogout()}
      />
      <div className={`${s.lngModal} ${isOpenLng && s.open}`}>
        <LanguageModal activeLng={activeLng} changeLng={changeLng} />
      </div>
    </article>
  );
};
