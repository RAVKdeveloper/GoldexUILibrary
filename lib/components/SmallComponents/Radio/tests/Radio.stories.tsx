import { Radio } from '../ui/Radio.ui';

import type { Meta, StoryObj } from '@storybook/react'



const meta: Meta<typeof Radio> = {
    title: 'Design System/Atoms/SmallComponents/Radio',
    component: Radio,
    tags: ['autodocs'],
    argTypes: {
        selected: {
            defaultValue: false,
            description: 'Radio is selected?'
        },
        disabled: {
            defaultValue: false,
            description: 'Radio is disabled'
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
type Story = StoryObj<typeof Radio>;

export const Basic: Story = {
    args: {
       selected: false,
       onClick: () => {},
       disabled: false
    },
};

export const Active: Story = {
    args: {
       selected: true,
       onClick: () => {},
       disabled: false
    },
};

export const Disabled: Story = {
    args: {
       selected: false,
       onClick: () => {},
       disabled: true
    },
};