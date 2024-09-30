interface UserSidebarType {
    id: number;
    url?: string;
    avatar: string;
    name: string;
    role: string;
}
interface NotificationsType {
    Dashboard: number;
    Balance: number;
    Projects: number;
    Invoices: number;
    Transactions: number;
    Account: number;
}
interface ObjLinks {
    Dashboard: string;
    Balance: string;
    Projects: string;
    Invoices: string;
    Transactions: string;
    Account: string;
    DashboardSucces: string;
    DashBoardUnSucces: string;
    DashBoardAppeal: string;
    DashboardProcessing: string;
    BalanceInfo: string;
    BalanceTransaction: string;
    AccGeneral: string;
    AccAll: string;
}
export interface SidebarType {
    balanceRub: number;
    balanceUSDT: number;
    user: UserSidebarType;
    timeRemaining: string | number;
    notifications: NotificationsType;
    links: ObjLinks;
    cbAvatar?: () => void;
    isOpenModal: boolean;
    changeLanguage: (lng: string) => void;
    activeLng: string;
    textMyProfile: string;
    textEditProfile: string;
    cbMyProfile: () => void;
    cbEditProfile: () => void;
    cbLogOut: () => void;
    cbSupport?: () => void;
    cbTheme?: () => void;
}
export {};
