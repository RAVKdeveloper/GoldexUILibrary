import { Button } from '../ui/Button'

import type { Meta, StoryObj } from '@storybook/react'



const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
    args: {
       children: 'hello',
       disabled: true
    },
};
