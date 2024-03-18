import { Toggle } from '../ui/Toggle.ui';

import type { Meta, StoryObj } from '@storybook/react'



const meta: Meta<typeof Toggle> = {
    title: 'Design System/Atoms/SmallComponents/Toggle',
    component: Toggle,
    tags: ['autodocs'],
    decorators: [
        Story => (
            <div style={{ padding: 20, background: '#1F1F24' }}>
                <Story />
            </div>
        )
    ],
    argTypes: {
        size: {
            defaultValue: 'lg',
            description: 'Size toggle',
            control: { type: 'radio' },
            options: ['lg', 'sm']
        },
        active: {
            defaultValue: false,
            description: 'Is active toggle'
        },
        disabled: {
            defaultValue: false,
            description: 'Is disabled toggle'
        },
        onClick: {
            description: 'Function called when clicking on toggle'
        }
    }
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const BasicLarge: Story = {
    args: {
        size: 'lg',
        active: false,
        disabled: false
    },
}; 

export const BasicSmall: Story = {
    args: {
        size: 'sm',
        active: false,
        disabled: false
    },
};

export const ActiveLarge: Story = {
    args: {
        size: 'lg',
        active: true,
        disabled: false
    },
}; 

export const ActiveSmall: Story = {
    args: {
        size: 'sm',
        active: true,
        disabled: false
    },
};

export const DisabledActive: Story = {
    args: {
        size: 'lg',
        active: true,
        disabled: true
    },
};

export const DisabledBasic: Story = {
    args: {
        size: 'lg',
        active: false,
        disabled: true
    },
};