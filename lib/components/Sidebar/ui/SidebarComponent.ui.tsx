import { FC } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { LogoIcon, RubleIcon, USDTIcon } from 'goldex-icon-library';
import {
  Badge,
  BalanceCard,
  NavigationItem,
  ProfileCard,
  ProfileModal,
} from '../../../main';

import type { SidebarType } from '../assets/Sidebar.type';

import { SidebarsNavItems } from '../assets/db.mock';

import s from '../assets/sidebar.module.css';

export const Sidebar: FC<SidebarType> = ({
  balanceUSDT,
  balanceRub,
  notifications,
  timeRemaining,
  links,
  user,
  cbAvatar,
  isOpenModal,
  changeLanguage,
  activeLng,
  cbMyProfile,
  cbEditProfile,
  textMyProfile,
  textEditProfile,
  cbLogOut,
  cbSupport,
  cbTheme,
}) => {
  const { pathname } = useLocation();

  const objModalTranslations = {
    lng_ru: 'Язык',
    lng_en: 'Language',
    sup_ru: 'Поддержка',
    sup_en: 'Support',
    theme_ru: 'Тема',
    theme_en: 'Theme',
    log_ru: 'Выйти',
    log_en: 'Log out',
  };

  return (
    <aside data-testid="sidebar" className={s.root}>
      <div className={s.top}>
        <LogoIcon />
        <div className={s.balances}>
          <BalanceCard
            balance={balanceRub}
            icon={<RubleIcon />}
            currency="RUB"
          />
          <BalanceCard
            balance={balanceUSDT}
            icon={<USDTIcon />}
            currency="USDT"
          />
        </div>
      </div>
      <div className={s.flexBox}>
        <ul className={s.list}>
          {SidebarsNavItems.filter(({ lng }) => lng === activeLng).map(
            ({ id, name, Icon, type, indentity, auto, childs }) => (
              <div key={id}>
                {type === 'list' ? (
                  <NavigationItem
                    key={id}
                    auto={auto}
                    type={type}
                    text={name}
                    Icon={Icon}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    isActive={pathname === links[indentity] ? true : false}
                    badge={
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-expect-error
                      notifications[indentity] > 0 ? (
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        <Badge text={notifications[indentity]} />
                      ) : (
                        ''
                      )
                    }
                    listNodes={
                      childs && childs.length > 0 ? (
                        <div className={s.childList}>
                          {childs.map(({ name, indentity, isEnd, id }) => (
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-expect-error
                            <Link key={id} to={links[indentity]}>
                              <NavigationItem
                                type="main"
                                text={name}
                                isEnd={isEnd}
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-expect-error
                                isActive={pathname === links[indentity]}
                              />
                            </Link>
                          ))}
                        </div>
                      ) : (
                        ''
                      )
                    }
                  />
                ) : (
                  <Link
                    data-testid="link"
                    key={id}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    to={!auto ? links[indentity] : '#'}
                  >
                    <NavigationItem
                      auto={auto}
                      type={type}
                      text={name}
                      Icon={Icon}
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-expect-error
                      isActive={pathname === links[indentity] ? true : false}
                      badge={
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        notifications[indentity] > 0 ? (
                          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                          // @ts-expect-error
                          <Badge text={notifications[indentity]} />
                        ) : (
                          ''
                        )
                      }
                      listNodes={
                        childs && childs.length > 0
                          ? childs.map(({ name, indentity, isEnd, id }) => (
                              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                              // @ts-expect-error
                              <Link key={id} to={links[indentity]}>
                                <NavigationItem
                                  type="main"
                                  text={name}
                                  isEnd={isEnd}
                                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                  // @ts-expect-error
                                  isActive={pathname === links[indentity]}
                                />
                              </Link>
                            ))
                          : ''
                      }
                    />
                  </Link>
                )}
              </div>
            )
          )}
        </ul>
        <div className={s.bottom}>
          <ProfileCard
            avatarNickName={user.name}
            avatarRole={user.role}
            avatarUrl={user.url}
            cbOptions={() => cbAvatar?.()}
            isOpenModal={isOpenModal}
            modal={
              <ProfileModal
                cbPropSupport={cbSupport}
                cbPropTheme={cbTheme}
                cbPropLogout={cbLogOut}
                cbMyProfile={cbMyProfile}
                cbEditProfile={cbEditProfile}
                textMyProfile={textMyProfile}
                textEditProfile={textEditProfile}
                isDarkMode={true}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                textLng={objModalTranslations[`lng_${activeLng}`]}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                textSupport={objModalTranslations[`sup_${activeLng}`]}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                textTheme={objModalTranslations[`theme_${activeLng}`]}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                textLogOut={objModalTranslations[`log_${activeLng}`]}
                activeLng={activeLng}
                changeLng={changeLanguage}
                isOpenMainModal={isOpenModal}
              />
            }
          />
          <div className={s.remainingCard}>{timeRemaining}</div>
        </div>
      </div>
    </aside>
  );
};
