import { MultiSelect } from "../";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MultiSelect> = {
  title: "Design System/Atoms/Multi Select",
  component: MultiSelect,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      defaultValue: "Placeholder",
      description: "Placeholder in the select",
    },
    options: {
      description: `Array options in the render to dropdown. Example object in array:
         <pre>
        {
          label: string,
          value: string
        }
         </pre>
        `,
    },
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const Basic: Story = {
  args: {
    placeholder: "Click Me",
    options: [
      { label: "Me", value: "Me" },
      { label: "You", value: "You" },
    ],
  },
};
