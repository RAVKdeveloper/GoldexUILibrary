import { TransactionCard } from "../ui/TransactionCard.ui";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TransactionCard> = {
  title: "Design System/Entities/TransactionCard",
  component: TransactionCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: 20, background: "#1F1F24" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    language: {
      defaultValue: "ru",
      description: "Language",
    },
    variant: {
      defaultValue: "deposit",
      description: "Card Option",
    },
    status: {
      defaultValue: "wait",
      description: "Transaction Status",
    },
    date: {
      defaultValue: "10 ноя 2023, 08:23",
      description: "Date transaction",
    },
    sum: {
      description: "Sum transaction",
    },
    cbOptions: {
      description: "A function that is called when you click on an option",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TransactionCard>;

export const DepositRU: Story = {
  args: {
    variant: "deposit",
    date: "10 ноя 2023, 08:23",
    status: "paid",
    sum: 3245,
    language: "ru",
  },
};

export const DepositEN: Story = {
  args: {
    variant: "deposit",
    date: "10 ноя 2023, 08:23",
    status: "paid",
    sum: 3245,
    language: "en",
  },
};

export const ExchangeRU: Story = {
  args: {
    variant: "exchange",
    date: "10 ноя 2023, 08:23",
    status: "paid",
    sum: 3245,
    language: "ru",
  },
};

export const ExchangeEN: Story = {
  args: {
    variant: "exchange",
    date: "10 ноя 2023, 08:23",
    status: "wait",
    sum: 3245,
    language: "en",
  },
};

export const InferenceRU: Story = {
  args: {
    variant: "inference",
    date: "10 ноя 2023, 08:23",
    status: "wait",
    sum: 3245,
    language: "ru",
  },
};

export const InferenceEN: Story = {
  args: {
    variant: "inference",
    date: "10 ноя 2023, 08:23",
    status: "paid",
    sum: 3245,
    language: "en",
  },
};
