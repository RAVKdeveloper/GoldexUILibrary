import { Checkbox } from '../ui/Checkbox.ui';

import type { Meta, StoryObj } from '@storybook/react'



const meta: Meta<typeof Checkbox> = {
    title: 'Design System/Atoms/SmallComponents/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
        selected: {
            defaultValue: false,
            description: 'Checkbox is selected?'
        },
        variant: {
            defaultValue: 'plus',
            description: 'Checkbox variants',
            options: ['plus', 'minus'],
            control: { type: 'radio' }
        },
        disabled: {
            defaultValue: false,
            description: 'Checkbox is disabled'
        },
        onClick: {
            description: 'Function click on component'
        }
    },
    decorators: [
        Story => (
            <div style={{ padding: 20, background: '#1F1F24' }}>
                <Story />
            </div>
        )
    ]
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const BasicPlus: Story = {
    args: {
       selected: false,
       onClick: () => {},
       disabled: false
    },
};

export const BasicMinus: Story = {
    args: {
       selected: false,
       onClick: () => {},
       disabled: false,
       variant: 'minus'
    },
};

export const BasicPlusActive: Story = {
    args: {
       selected: true,
       onClick: () => {},
       disabled: false
    },
};

export const BasicMinusActive: Story = {
    args: {
       selected: true,
       onClick: () => {},
       disabled: false,
       variant: 'minus'
    },
};

export const Disabled: Story = {
    args: {
       selected: false,
       onClick: () => {},
       disabled: true,
       variant: 'minus'
    },
};