import { Modal } from "../ui/Modal.ui";
import { ModalActions, ModalHeader } from "../../Modals";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Modal> = {
  title: "Design System/Atoms/Modal/Popup",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      defaultValue: false,
      description: "Is open modal?",
    },
    children: {
      description: "Children components",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ background: "#1F1F24", height: "100vh" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Defult: Story = {
  args: {
    children: (
      <>
        <ModalHeader
          title="Modal"
          paragraph="This Modal"
          cbClose={() => confirm("close")}
        />
        <ModalActions
          btnTextAction="action"
          btnTextCancel="cansel"
          cbAction={() => {}}
          cbCansel={() => {}}
        />
      </>
    ),
    isOpen: true,
  },
};
