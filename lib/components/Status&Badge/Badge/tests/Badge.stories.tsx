import { Badge } from '../Badge.ui'

import type { Meta, StoryObj } from '@storybook/react'



const meta: Meta<typeof Badge> = {
    title: 'Design System/Atoms/Badge',
    component: Badge,
    tags: ['autodocs'],
    argTypes: {
        text: {
            description: 'Text badge',
            defaultValue: 'Badge'
        }
    }
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Basic: Story = {
    args: {
       text: 'Badge'
    },
};