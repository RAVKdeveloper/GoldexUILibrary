import { NavigationItem } from '../ui/NavigationItem.ui'
import { LeadIcon } from 'goldex-icon-library'
import { Badge } from '../../../main'

import type { Meta, StoryObj } from '@storybook/react'



const meta: Meta<typeof NavigationItem> = {
    title: 'Design System/Atoms/NavigationItem',
    component: NavigationItem,
    tags: ['autodocs'],
    decorators: [
        Story => (
            <div style={{ padding: 20, background: '#1F1F24', height: 200 }}>
                <Story />
            </div>
        )
    ],
    argTypes: {
        text: {
            defaultValue: 'Name item',
            description: 'Text in navigation item'
        },
        type: {
            defaultValue: 'main',
            description: 'Navigation item type',
            controls: { type: 'radio' }
        },
        disabled: {
            defaultValue: false,
            description: 'Is disabled navigation item'
        },
        isActive: {
            defaultValue: false,
            description: 'Element is active?'
        },
        keyOpen: {
            description: 'Key for automatic opening of children'
        },
        badge: {
            description: 'Badge in element'
        },
        Icon: {
            description: 'Icon in element'
        },
        isEnd: {
            defaultValue: false,
            description: 'Is the item last on the list?'
        },
        listNodes: {
            description: 'Dropdown List Subelements'
        }
    }
};

export default meta;
type Story = StoryObj<typeof NavigationItem>;

export const BasicMain: Story = {
    args: {
        text: 'Name item',
        keyOpen: 1,
        type: 'main'
    }
};

export const BasicMainWithBadge: Story = {
    args: {
        text: 'Name item',
        keyOpen: 1,
        type: 'main',
        badge: <Badge text='14' />
    }
};

export const BasicMainWithIcon: Story = {
    args: {
        text: 'Name item',
        keyOpen: 1,
        Icon: LeadIcon,
        type: 'main'
    }
};

export const ActiveMainWithIcon: Story = {
    args: {
        text: 'Name item',
        keyOpen: 1,
        Icon: LeadIcon,
        isActive: true,
        type: 'main'
    }
};

export const ActiveMainEnd: Story = {
    args: {
        text: 'Name item',
        keyOpen: 1,
        isActive: true,
        type: 'main',
        isEnd: true
    }
};

export const BasicList: Story = {
    args: {
        text: 'Name item',
        keyOpen: 1,
        type: 'list'
    }
};

export const ActiveList: Story = {
    args: {
        text: 'Name item',
        keyOpen: 1,
        type: 'list',
        isActive: true,
        Icon: LeadIcon
    }
}

export const DisabledItem: Story = {
    args: {
        text: 'Name item',
        keyOpen: 1,
        type: 'main',
        isActive: false,
        disabled: true
    }
}

export const ItemsList: Story = {
    args: {
        text: 'Name item',
        keyOpen: 1,
        type: 'list',
        Icon: LeadIcon,
        badge: <Badge text='14' />,
        listNodes: 
        <>
         <NavigationItem text='Item' />
         <NavigationItem text='Item' isActive={true} />
         <NavigationItem text='Item' isEnd={true} />
        </>
    }
};