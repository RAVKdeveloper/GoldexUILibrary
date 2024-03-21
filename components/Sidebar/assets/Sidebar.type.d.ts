interface UserSidebarType {
    id: number;
    url: string;
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
}
export interface SidebarType {
    balanceRub: number;
    balanceUSDT: number;
    user: UserSidebarType;
    timeRemaining: string | number;
    notifications: NotificationsType;
    links: ObjLinks;
    cbAvatar?: () => void;
}
export {};
