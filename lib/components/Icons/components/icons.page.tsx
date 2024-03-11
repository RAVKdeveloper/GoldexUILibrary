import { FC } from 'react'
import { LogoIcon, ArrowBottomIcon, UsdtIcon, RubleIcon, ArrowTopIcon, CircleIcon } from './Main'
import { 
    DashBoardFullIcon,
    CardHolderIcon,
    TimeIcon,
    TransactionIcon,
    InvoicesIcon,
    DashBoardIcon,
    ProjectsIcon
} from './Transfer'
import {
    CalendarSearchIcon,
    DangerIcon,
    InfoIcon,
    UserIcon,
    HashTagIcon,
    SearchIcon,
    FilterIcon,
    DowloandIcon
} from './Info'


export const IconsPage: FC = () => {

    return (

        <main>
            <div>
            <h3>Main icons</h3>
            <LogoIcon />
            <ArrowTopIcon />
            <ArrowBottomIcon />
            <UsdtIcon />
            <RubleIcon />
            <CircleIcon />
            </div>
            <div>
            <h3>Transfer icons</h3>
             <DashBoardFullIcon />
             <CardHolderIcon />
             <TimeIcon />
             <TransactionIcon />
             <InvoicesIcon />
             <DashBoardIcon />
             <ProjectsIcon />
            </div>
            <div>
            <h3>Info icons</h3>
             <CalendarSearchIcon />
             <DangerIcon />
             <InfoIcon />
             <UserIcon />
             <HashTagIcon />
             <SearchIcon />
             <FilterIcon />
             <DowloandIcon />
            </div>
        </main>
    )
}