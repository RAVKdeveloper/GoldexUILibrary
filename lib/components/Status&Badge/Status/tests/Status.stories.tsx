import { Status } from '../ui/Status.ui'

import type { Meta, StoryObj } from '@storybook/react'



const meta: Meta<typeof Status> = {
    title: 'Design System/Atoms/Status',
    component: Status,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            description: 'Selecting a status option',
            defaultValue: 'paid'
        },
        text: {
            description: 'Text status',
            defaultValue: 'Оплачено'
        }
    }
};

export default meta;
type Story = StoryObj<typeof Status>;

export const PaidStatus: Story = {
    args: {
       variant: 'paid',
    },
};

export const WaitStatus: Story = {
    args: {
       variant: 'wait',
       text: 'Ожидание'
    },
};

export const RejectedStatus: Story = {
    args: {
       variant: 'rejected',
       text: 'Отмена'
    },
};

export const ExpiredStatus: Story = {
    args: {
       variant: 'expired',
       text: 'Истекло'
    },
};