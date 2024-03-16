import { SidebarMobile } from '../Sidebar.ui'
import { BrowserRouter } from 'react-router-dom';

import type { Meta, StoryObj } from '@storybook/react'



const meta: Meta<typeof SidebarMobile> = {
    title: 'Design System/Entities/Sidebar/SidebarMobile',
    component: SidebarMobile,
    tags: ['autodocs'],
    decorators: [
        Story => (
          <BrowserRouter>
          <div>Видно только при разрешении меньше 764px</div>
            <Story />
          </BrowserRouter>
        )
    ],
    argTypes: {
        userName: {
            defaultValue: 'Regexer',
            description: 'Username'
        },
        avatarUrl: {
            defaultValue: '/user',
            description: 'Link to user profile (for the avatar component)'
        },
        onOpenSidebar: {
            description: 'Function for opening the sidebar'
        }
    },
};

export default meta;
type Story = StoryObj<typeof SidebarMobile>;

export const Basic: Story = {
    args: {
        userName: 'Regexer',
        avatarUrl: '/user'
    }
};