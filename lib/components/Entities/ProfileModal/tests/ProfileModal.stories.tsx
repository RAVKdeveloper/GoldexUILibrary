import { ProfileModal } from "../ui/ProfileModal.ui";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProfileModal> = {
  title: "Design System/Entities/Modals/ProfileModal",
  component: ProfileModal,
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
    textLng: {
      description: "Text in Language dropdown",
    },
    textSupport: {
      description: "Text in Support dropdown",
    },
    textTheme: {
      description: "Text in Theme dropdown",
    },
    textLogOut: {
      description: "Text in LogOut dropdown",
    },
    cbPropLanguage: {
      description: "Function called on click language dropdown",
    },
    cbPropLogout: {
      description: "Function called on click log out dropdown",
    },
    cbPropSupport: {
      description: "Function called on click support dropdown",
    },
    cbPropTheme: {
      description: "Function called on click theme dropdown",
    },
    isDarkMode: {
      defaultValue: true,
      description: "Is dark mode?",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProfileModal>;

export const BasicWithDarkMode: Story = {
  args: {
    activeLng: "ru",
    isDarkMode: true,
    textLng: "Language",
    textSupport: "Support",
    textTheme: "Theme",
    textLogOut: "Log out",
  },
};

export const BasicWithLightMode: Story = {
  args: {
    activeLng: "en",
    isDarkMode: false,
    textLng: "Language",
    textSupport: "Support",
    textTheme: "Theme",
    textLogOut: "Log out",
  },
};
