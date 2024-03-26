import { ProjectCard } from "../ui/Project.ui";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProjectCard> = {
  title: "Design System/Entities/ProjectCard",
  component: ProjectCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: 20, background: "#1F1F24" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    name: {
      description: "Name project",
    },
    status: {
      description: "Status project",
      defaultValue: "active",
    },
    turnover: {
      description: "Turnover project",
    },
    textStatus: {
      description: "Text status",
    },
    textTurnover: {
      description: "Text turnover",
    },
    minus: {
      description: "Turnover minus",
    },
    plus: {
      description: "Turnover plus",
    },
    cbOptions: {
      description: "Function called on click options",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Basic: Story = {
  args: {
    name: "Test Project wrwerewjtj0ietij0eti0eiherhithier",
    status: "active",
    turnover: "3435,534,534 RUB",
    minus: -33,
    plus: 50,
    textStatus: "Активный",
    textTurnover: "Оборот за сутки",
  },
};

export const Blocked: Story = {
  args: {
    name: "Test Project wrwerewjtj0ietij0eti0eiherhithier",
    status: "blocked",
    turnover: "3435,534,534 RUB",
    minus: -33,
    plus: 50,
    textStatus: "Блокировка",
    textTurnover: "Оборот за сутки",
  },
};
