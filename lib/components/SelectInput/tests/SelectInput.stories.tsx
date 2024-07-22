import type { Meta, StoryObj } from "@storybook/react";
import { SelectInput } from "../ui/SelectInput";

const meta: Meta<typeof SelectInput> = {
  title: "Design System/Atoms/SelectInput",
  component: SelectInput,
  tags: ["autodocs"],
  argTypes: {
    active: {
      description: "active Label",
      defaultValue: "",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SelectInput>;

export const SelectInputComponent: Story = {
  args: {
    options: [
      { id: 1, label: "10 / page", value: "10" },
      { id: 2, label: "20 / page", value: "20" },
      { id: 3, label: "50 / page", value: "50" },
      { id: 4, label: "100 / page", value: "100" },
    ],
    active: "",
    onClickOption: () => {},
  },
};
