import { FC } from "react";

import { Link, useLocation } from "react-router-dom";

import { LogoIcon, RubleIcon, USDTIcon } from "goldex-icon-library";
import {
  BalanceCard,
  NavigationItem,
  ProfileCard,
  Badge,
  ProfileModal,
} from "../../../main";

import type { SidebarType } from "../assets/Sidebar.type";

import { SidebarsNavItems } from "../assets/db.mock";

import s from "../assets/sidebar.module.css";

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
}) => {
  const { pathname } = useLocation();

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
        <ul className={s.list}>
          {SidebarsNavItems.filter(({ lng }) => lng === activeLng).map(
            ({ id, name, Icon, type, indentity, auto, childs }) => (
              <div key={id}>
                {type === "list" ? (
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
                        ""
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
                        : ""
                    }
                  />
                ) : (
                  <Link
                    data-testid="link"
                    key={id}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    to={!auto ? links[indentity] : "#"}
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
                          ""
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
                          : ""
                      }
                    />
                  </Link>
                )}
              </div>
            )
          )}
        </ul>
      </div>
      <div className={s.bottom}>
        <ProfileCard
          avatarNickName={user.name}
          avatarRole={user.role}
          avatarUrl={user.url}
          cbOptions={() => cbAvatar?.()}
          isOpenModal={isOpenModal}
          modal={
            <ProfileModal
              cbPropSupport={() => confirm("support")}
              cbPropTheme={() => confirm("theme")}
              cbPropLogout={() => confirm("logour")}
              isDarkMode={true}
              textLng="Language"
              textSupport="Support"
              textTheme="Theme"
              textLogOut="Log out"
              activeLng={activeLng}
              changeLng={changeLanguage}
            />
          }
        />
        <div className={s.remainingCard}>{timeRemaining}</div>
      </div>
    </aside>
  );
};
