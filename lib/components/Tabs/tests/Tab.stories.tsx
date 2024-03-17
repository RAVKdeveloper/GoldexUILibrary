import { Tab } from '../ui/Tab.ui'

import type { Meta, StoryObj } from '@storybook/react'



const meta: Meta<typeof Tab> = {
    title: 'Design System/Atoms/Tab',
    component: Tab,
    tags: ['autodocs'],
    argTypes: {
        text: {
            defaultValue: 'Label',
            description: 'Text in Tab component'
        },
        isActive: {
            defaultValue: false,
            description: 'Tab is active'
        },
        sizeType: {
            defaultValue: 'lg',
            description: 'Size Tab component',
            controls: { type: 'radio' }
        },
        disabled: {
            defaultValue: false,
            description: 'Component is disabled'
        }
    }
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const BasicLarge: Story = {
    args: {
       text: 'Label',
       sizeType:'lg'
    },
};

export const BasicSmall: Story = {
    args: {
       text: 'Label',
       sizeType: 'sm'
    },
};

export const ActiveTab: Story = {
    args: {
       text: 'Label',
       isActive: true
    },
};

export const DisabledTab: Story = {
    args: {
       text: 'Label',
       disabled: true
    },
};