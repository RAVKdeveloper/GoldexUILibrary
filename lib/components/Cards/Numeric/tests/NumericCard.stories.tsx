import { NumericCard } from "../ui/NumericCard.ui";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NumericCard> = {
  title: "Design System/Entities/NumericCard",
  component: NumericCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: 20, background: "#1F1F24" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    totalBalance: {
      description: "Balance in card",
      defaultValue: 234444,
    },
    profitability: {
      description: "Card profitability",
    },
    term: {
      description: "Income period",
    },
    chart: {
      description:
        "Graph in cards (visible at resolutions greater than 1024 pixels)",
    },
    textTotal: {
      description: "Text under balance",
    },
  },
};

export default meta;
type Story = StoryObj<typeof NumericCard>;

export const Basic: Story = {
  args: {
    totalBalance: 234444,
    profitability: 10,
    term: "vs last month",
    chart: <div style={{ background: "red", width: 329, height: 80 }} />,
    textTotal: "Total",
  },
};
