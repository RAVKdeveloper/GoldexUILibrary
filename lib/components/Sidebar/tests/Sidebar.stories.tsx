import { Sidebar } from '../Sidebar.ui'
import { BrowserRouter } from 'react-router-dom';

import type { Meta, StoryObj } from '@storybook/react'



const meta: Meta<typeof Sidebar> = {
    title: 'Design System/Entities/Sidebar/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    decorators: [
        Story => (
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        )
    ],
    argTypes: {
        balanceRub: {
            defaultValue: 10000,
            description: 'Balance ruble'
        },
        balanceUSDT: {
            defaultValue: 10000,
            description: 'Balance USDT'
        },
        user: {
            description: 'User data located in the sidebar component'
        },
        notifications: {
            description: 'Messages'
        },
        timeRemaining: {
            description: 'Time remaining'
        },
        links: {
            description: 'Links for navigation components'
        }
    }
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Basic: Story = {
    args: {
     balanceUSDT: 24243,
     balanceRub: 24324,
     user: { id: 1, name: 'London', avatar: 'test', url: '/test', role: 'Operator' },
     notifications: { Dashboard: 1, Balance: 1, Projects: 1, Invoices: 15, Transactions: 0, Account: 1 },
     timeRemaining: 'Time remaining: 60 m 00s',
     links: 
          {
            Dashboard: '/d',
            Balance: '/b',
            Projects: '/p',
            Invoices: '/i',
            Transactions: '/t',
            Account: '/a'
          }
    }
};