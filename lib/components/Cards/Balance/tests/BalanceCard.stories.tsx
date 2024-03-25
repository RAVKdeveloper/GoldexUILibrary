import { BalanceCard } from "../ui/BalanceCard.ui";
import { USDTIcon, RubleIcon } from "goldex-icon-library";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BalanceCard> = {
  title: "Design System/Entities/BalanceCard",
  component: BalanceCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: 20, background: "#1F1F24" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    balance: {
      defaultValue: 1000000.0,
      description: "Card balance",
    },
    icon: {
      description: "Icon currency in card",
    },
    currency: {
      description: "Name currency",
    },
  },
};

export default meta;
type Story = StoryObj<typeof BalanceCard>;

export const USDTCard: Story = {
  args: {
    icon: <USDTIcon />,
    balance: 100000.0,
    currency: "USDT",
  },
};

export const RubleCard: Story = {
  args: {
    icon: <RubleIcon />,
    balance: 100000.0,
    currency: "RUB",
  },
};
