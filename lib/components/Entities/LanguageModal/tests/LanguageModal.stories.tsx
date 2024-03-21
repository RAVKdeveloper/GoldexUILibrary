import { LanguageModal } from "../ui/LanguageModal.ui";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LanguageModal> = {
  title: "Design System/Entities/Modals/LanguageModal",
  component: LanguageModal,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: 20, background: "#1F1F24" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    activeLng: {
      defaultValue: "ru",
      description: "Active language",
      control: { type: "radio" },
      options: ["ru", "en"],
    },
    changeLng: {
      description: "Language-Changing Function",
    },
  },
};

export default meta;
type Story = StoryObj<typeof LanguageModal>;

export const BasicRu: Story = {
  args: {
    activeLng: "ru",
  },
};

export const BasicEn: Story = {
  args: {
    activeLng: "en",
  },
};
