import { ProfileCard } from "../ui/ProfileCard.ui";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProfileCard> = {
  title: "Design System/Entities/ProfileCard",
  component: ProfileCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: 20, background: "#1F1F24" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    avatarNickName: {
      description: "NickName user",
      defaultValue: "Test",
    },
    avatarUrl: {
      description: "URL user avatar",
      defaultValue:
        "https://th.bing.com/th/id/OIP.kBYYR1K4b69A9FLskKJXOAHaHa?rs=1&pid=ImgDetMain",
    },
    avatarRole: {
      description: "Role user",
      defaultValue: "Оператор",
    },
    isOpenModal: {
      defaultValue: false,
      description: "Is open action modal",
    },
    modal: {
      description: "Modal component",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

const icon =
  "https://th.bing.com/th/id/OIP.kBYYR1K4b69A9FLskKJXOAHaHa?rs=1&pid=ImgDetMain";

export const Basic: Story = {
  args: {
    avatarNickName: "Test",
    avatarUrl: icon,
    avatarRole: "Operator",
  },
};
