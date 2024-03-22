import { Overflow } from "../ui/Overflow.ui";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Overflow> = {
  title: "Design System/Atoms/Overflow",
  component: Overflow,
  tags: ["autodocs"],
  argTypes: {
    isTransperant: {
      defaultValue: true,
      description: "Is transperant component",
    },
    cbClose: {
      description: "Callback called on click component",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Overflow>;

export const Transperant: Story = {
  args: {
    isTransperant: true,
  },
};

export const NoTransperant: Story = {
  args: {
    isTransperant: false,
  },
};
