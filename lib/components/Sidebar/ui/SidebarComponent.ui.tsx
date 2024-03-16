import { FC } from 'react'

import { Link, useLocation } from 'react-router-dom'

import { LogoIcon } from 'goldex-icon-library'
import { BalanceCard, NavigationItem, ProfileCard, Badge } from '../../../main'

import type { SidebarType } from '../assets/Sidebar.type'

import { SidebarsNavItems } from '../assets/db.mock'

import s from '../assets/sidebar.module.css'


export const Sidebar: FC<SidebarType> = ({
    balanceUSDT, balanceRub, notifications, timeRemaining, links, user
}) => {

    const { pathname } = useLocation()

    return (

        <aside data-testid='sidebar' className={s.root}>
          <div className={s.top}>
          <LogoIcon />
          <div className={s.balances}>
            <BalanceCard balance={balanceRub} variant='rub' />
            <BalanceCard balance={balanceUSDT} variant='usdt' />
          </div>
          <ul className={s.list}>
            {
                SidebarsNavItems.map(({ id, name, Icon }) => (
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    <Link data-testid='link' key={id} to={links[name]}>
                        <NavigationItem 
                         text={name}
                         Icon={Icon}
                         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                         // @ts-expect-error
                         isActive={pathname === links[name] ? true : false}
                         badge={
                         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                         // @ts-expect-error
                         notifications[name] > 0 ?
                              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                             // @ts-expect-error
                           <Badge text={notifications[name]} />
                         :
                         ''
                        }
                        />
                    </Link>
                ))
            }
          </ul>
          </div>
          <div className={s.bottom}>
            <ProfileCard 
              avatarNickName={user.name}
              avatarRole={user.role}
              avatarUrl={user.url}
              cbOptions={() => console.log('hello')}
            />
            <div className={s.remainingCard}>
                {timeRemaining}
            </div>
          </div>
        </aside>
    )
}