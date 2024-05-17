import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '../ui/DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Design System/Atoms/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    date: {
      description: 'Date',
      defaultValue: new Date(),
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const DatePickerComponent: Story = {
  args: {
    date: new Date(),
    setDate: () => {},
  },
};
