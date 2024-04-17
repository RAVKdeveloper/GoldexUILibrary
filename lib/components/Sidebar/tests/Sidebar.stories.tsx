import { Sidebar } from "../Sidebar.ui";
import { BrowserRouter } from "react-router-dom";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Sidebar> = {
  title: "Design System/Entities/Sidebar/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {
    balanceRub: {
      defaultValue: 10000,
      description: "Balance ruble",
    },
    balanceUSDT: {
      defaultValue: 10000,
      description: "Balance USDT",
    },
    user: {
      description: "User data located in the sidebar component",
    },
    notifications: {
      description: "Messages",
    },
    timeRemaining: {
      description: "Time remaining",
    },
    links: {
      description: "Links for navigation components",
    },
    activeLng: {
      defaultValue: "en",
      description: "Language sidebar",
      control: { type: "radio" },
      options: ["en", "ru"],
    },
    changeLanguage: {
      description: "Function for change language",
    },
    isOpenModal: {
      description: "Is open avatar modal?",
      defaultValue: false,
    },
    cbAvatar: {
      description: "Function called on click options in profile card",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const BasicEn: Story = {
  args: {
    balanceUSDT: 24243,
    balanceRub: 24324,
    user: {
      id: 1,
      name: "London",
      avatar: "test",
      url: "/test",
      role: "Operator",
    },
    notifications: {
      Dashboard: 1,
      Balance: 1,
      Projects: 1,
      Invoices: 15,
      Transactions: 0,
      Account: 1,
    },
    timeRemaining: "Time remaining: 60 m 00s",
    links: {
      Dashboard: "/d",
      Balance: "/b",
      Projects: "/p",
      Invoices: "/i",
      Transactions: "/t",
      Account: "/a",
      DashboardSucces: "/ds",
      DashBoardUnSucces: "/du",
      DashBoardAppeal: "/da",
      DashboardProcessing: "/dp",
      BalanceInfo: "/bi",
      BalanceTransaction: "/bt",
      AccAll: "/al",
      AccGeneral: "/ag",
    },
    activeLng: "en",
  },
};

export const BasicRu: Story = {
  args: {
    balanceUSDT: 24243,
    balanceRub: 24324,
    user: {
      id: 1,
      name: "London",
      avatar: "test",
      url: "/test",
      role: "Operator",
    },
    notifications: {
      Dashboard: 1,
      Balance: 1,
      Projects: 1,
      Invoices: 15,
      Transactions: 0,
      Account: 1,
    },
    timeRemaining: "Time remaining: 60 m 00s",
    links: {
      Dashboard: "/d",
      Balance: "/b",
      Projects: "/p",
      Invoices: "/i",
      Transactions: "/t",
      Account: "/a",
      DashboardSucces: "/ds",
      DashBoardUnSucces: "/du",
      DashBoardAppeal: "/da",
      DashboardProcessing: "/dp",
      BalanceInfo: "/bi",
      BalanceTransaction: "/bt",
      AccAll: "/al",
      AccGeneral: "/ag",
    },
    activeLng: "ru",
  },
};

export const NotAvatarUrl: Story = {
  args: {
    balanceUSDT: 24243,
    balanceRub: 24324,
    user: {
      id: 1,
      name: "London",
      avatar: "test",
      role: "Operator",
    },
    notifications: {
      Dashboard: 1,
      Balance: 1,
      Projects: 1,
      Invoices: 15,
      Transactions: 0,
      Account: 1,
    },
    timeRemaining: "Time remaining: 60 m 00s",
    links: {
      Dashboard: "/d",
      Balance: "/b",
      Projects: "/p",
      Invoices: "/i",
      Transactions: "/t",
      Account: "/a",
      DashboardSucces: "/ds",
      DashBoardUnSucces: "/du",
      DashBoardAppeal: "/da",
      DashboardProcessing: "/dp",
      BalanceInfo: "/bi",
      BalanceTransaction: "/bt",
      AccAll: "/al",
      AccGeneral: "/ag",
    },
    activeLng: "ru",
  },
};
