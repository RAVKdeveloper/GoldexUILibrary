import { Spinner } from '../ui/Spiner.ui';

import type { Meta, StoryObj } from '@storybook/react'



const meta: Meta<typeof Spinner> = {
    title: 'Design System/Atoms/Spinner',
    component: Spinner,
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
            defaultValue: 'md',
            control: { type: 'radio' },
            options: ['lg', 'md', 'sm', 'es'],
            description: 'Size spinner'
        }
    }
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const LargeSpinner: Story = {
    args: {
       size: 'lg'
    },
};

export const MiddleSpinner: Story = {
    args: {
       size: 'md'
    },
};

export const SmallSpinner: Story = {
    args: {
       size: 'sm'
    },
};

export const ExtraSmallSpinner: Story = {
    args: {
       size: 'es'
    },
};