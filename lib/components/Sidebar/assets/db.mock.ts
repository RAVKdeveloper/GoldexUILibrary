import {
  DashboardIcon,
  BalanceIcon,
  ProjectsIcon,
  InvoicesIcon,
  TransactionIcon,
  AccountIcon,
  LeadIcon,
} from "goldex-icon-library";

interface ChildType {
  id: number;
  name: string;
  isEnd: boolean;
  indentity: string;
}

interface Type {
  id: number;
  name: string;
  Icon: typeof LeadIcon;
  type: "list" | "main";
  auto: boolean;
  lng: "ru" | "en";
  indentity: string;
  childs?: ChildType[];
}

export const SidebarsNavItems: Type[] = [
  {
    id: 1,
    auto: true,
    name: "Dashboard",
    Icon: DashboardIcon,
    type: "list",
    lng: "en",
    indentity: "Dashboard",
    childs: [
      {
        id: 10,
        name: "Successful",
        isEnd: false,
        indentity: "DashboardSucces",
      },
      {
        id: 11,
        name: "Unsuccessful",
        isEnd: false,
        indentity: "DashBoardUnSucces",
      },
      {
        id: 12,
        name: "Appeal",
        isEnd: false,
        indentity: "DashBoardAppeal",
      },
      {
        id: 13,
        name: "Processing",
        isEnd: true,
        indentity: "DashboardProcessing",
      },
    ],
  },
  {
    id: 2,
    auto: true,
    name: "Balance",
    Icon: BalanceIcon,
    type: "list",
    lng: "en",
    indentity: "Balance",
    childs: [
      {
        id: 20,
        name: "Information",
        isEnd: false,
        indentity: "BalanceInfo",
      },
      {
        id: 21,
        name: "Transactions",
        isEnd: true,
        indentity: "BalanceTransaction",
      },
    ],
  },
  {
    id: 3,
    auto: false,
    name: "Projects",
    Icon: ProjectsIcon,
    type: "main",
    lng: "en",
    indentity: "Projects",
  },
  {
    id: 4,
    auto: false,
    name: "Invoices",
    Icon: InvoicesIcon,
    type: "main",
    lng: "en",
    indentity: "Invoices",
  },
  {
    id: 5,
    auto: false,
    name: "Transactions",
    Icon: TransactionIcon,
    type: "main",
    lng: "en",
    indentity: "Transactions",
  },
  {
    id: 6,
    auto: true,
    name: "Account",
    Icon: AccountIcon,
    type: "list",
    lng: "en",
    indentity: "Account",
    childs: [
      {
        id: 30,
        name: "General",
        isEnd: false,
        indentity: "AccGeneral",
      },
      {
        id: 21,
        name: "All accounts",
        isEnd: true,
        indentity: "AccAll",
      },
    ],
  },

  // Ru
  {
    id: 1,
    auto: true,
    name: "Dashboard",
    Icon: DashboardIcon,
    type: "list",
    lng: "ru",
    indentity: "Dashboard",
    childs: [
      {
        id: 10,
        name: "Успешные",
        isEnd: false,
        indentity: "DashboardSucces",
      },
      {
        id: 11,
        name: "Неуспешные",
        isEnd: false,
        indentity: "DashBoardUnSucces",
      },
      {
        id: 12,
        name: "Апелляции",
        isEnd: false,
        indentity: "DashBoardAppeal",
      },
      {
        id: 13,
        name: "В процессе",
        isEnd: true,
        indentity: "DashboardProcessing",
      },
    ],
  },
  {
    id: 2,
    auto: true,
    name: "Баланс",
    Icon: BalanceIcon,
    type: "list",
    lng: "ru",
    indentity: "Balance",
    childs: [
      {
        id: 20,
        name: "Информация",
        isEnd: false,
        indentity: "BalanceInfo",
      },
      {
        id: 21,
        name: "Транзакции",
        isEnd: true,
        indentity: "BalanceTransaction",
      },
    ],
  },
  {
    id: 3,
    auto: false,
    name: "Проекты",
    Icon: ProjectsIcon,
    type: "main",
    lng: "ru",
    indentity: "Projects",
  },
  {
    id: 4,
    auto: false,
    name: "Счета",
    Icon: InvoicesIcon,
    type: "main",
    lng: "ru",
    indentity: "Invoices",
  },
  {
    id: 5,
    auto: false,
    name: "Транзакции",
    Icon: TransactionIcon,
    type: "main",
    lng: "ru",
    indentity: "Transactions",
  },
  {
    id: 6,
    auto: true,
    name: "Аккаунт",
    Icon: AccountIcon,
    type: "list",
    lng: "ru",
    indentity: "Account",
    childs: [
      {
        id: 30,
        name: "Общее",
        isEnd: false,
        indentity: "AccGeneral",
      },
      {
        id: 21,
        name: "Все аккаунты",
        isEnd: true,
        indentity: "AccAll",
      },
    ],
  },
];
