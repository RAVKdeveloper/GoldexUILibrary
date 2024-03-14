import { BalanceCard } from '../ui/BalanceCard.ui'

import type { Meta, StoryObj } from '@storybook/react'



const meta: Meta<typeof BalanceCard> = {
    title: 'Design System/Entities/BalanceCard',
    component: BalanceCard,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ padding: 20, background: '#1F1F24' }}>
                <Story />
            </div>
        )
    ],
    argTypes: {
        variant: {
            control: { type: 'radio' },
            options: ['usdt', 'rub'],
            defaultValue: 'usdt',
            description: 'Card currency options'
        },
        balance: {
            defaultValue: 1000000.00,
            description: 'Card balance'
        }
    }
};

export default meta;
type Story = StoryObj<typeof BalanceCard>;


export const USDTCard: Story = {
    args: {
      variant: 'usdt',
      balance: 100000.00
    }
}

export const RubleCard: Story = {
    args: {
      variant: 'rub',
      balance: 100000.00
    }
}