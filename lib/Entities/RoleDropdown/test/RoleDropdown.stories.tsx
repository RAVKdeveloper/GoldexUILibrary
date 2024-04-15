import { RoleDropdown } from "../ui/RoleDropdown.ui";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RoleDropdown> = {
  title: "Design System/Entities/RoleDropdown",
  component: RoleDropdown,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: 600, position: "relative" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    activeTab: {
      description: "Active tab in dropdown",
    },
    click: {
      description: "Function called on click dropdown",
    },
    data: {
      description: "Custom array(string[])",
      defaultValue: ["value", "value"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof RoleDropdown>;

export const Default: Story = {
  args: {
    isOpen: true,
    activeTab: "TRAIDER_ADMIN",
  },
};
