import { DashboardIcon, BalanceIcon, ProjectsIcon, InvoicesIcon, TransactionIcon, AccountIcon, LeadIcon } from "goldex-icon-library"


interface Type {
    id: number,
    name: string,
    Icon: typeof LeadIcon
}


export const SidebarsNavItems: Type[] = [
    {
        id: 1,
        name: 'Dashboard',
        Icon: DashboardIcon
    },
    {
        id: 2,
        name: 'Balance',
        Icon: BalanceIcon
    },
    {
        id: 3,
        name: 'Projects',
        Icon: ProjectsIcon
    },
    {
        id: 4,
        name: 'Invoices',
        Icon: InvoicesIcon
    },
    {
        id: 5,
        name: 'Transactions',
        Icon: TransactionIcon
    },
    {
        id: 6,
        name: 'Account',
        Icon: AccountIcon
    },
]