import { Percent } from "../ui/Percent.ui";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Percent> = {
  title: "Design System/Atoms/SmallComponents/Percent",
  component: Percent,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: 20, background: "#1F1F24" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    value: {
      defaultValue: 0,
      description: "Value percent",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Percent>;

export const Top: Story = {
  args: {
    value: 100,
  },
};

export const Down: Story = {
  args: {
    value: -100,
  },
};
