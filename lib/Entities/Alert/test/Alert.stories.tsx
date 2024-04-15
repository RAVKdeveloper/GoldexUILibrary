import { Alert } from "../ui/Alert.ui";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Alert> = {
  title: "Design System/Entities/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "Varints alert",
      control: { type: "radio" },
      options: ["success", "info", "error", "warning"],
      defaultValue: "success",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "Error",
  },
};
export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning",
  },
};
export const Info: Story = {
  args: {
    variant: "info",
    children: "Info",
  },
};
