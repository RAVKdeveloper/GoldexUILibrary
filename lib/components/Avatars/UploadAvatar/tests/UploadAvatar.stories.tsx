import { UploadAvatar } from '../ui/UploadAvatar.ui'

import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions';



const meta: Meta<typeof UploadAvatar> = {
    title: 'Design System/Atoms/Avatars/UploadAvatar',
    component: UploadAvatar,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ background: '#1F1F24', padding: 10 }}>
                <Story />
            </div>
        )
    ],
    argTypes: {
        onClick: {
            description: 'Option Click Handler',
        },
        size: {
            defaultValue: 'md',
            options: ['lg', 'md', 'sm', 'es'],
            control: { type: 'radio' },
            description: 'Size avatar component'
        }
    },
    parameters: {
        actions: { argTypesRegex: '^on.*' },
    },
};

export default meta;
type Story = StoryObj<typeof UploadAvatar>;


export const Large: Story = {
    args: {
       onClick: action('on-click'),
       size: 'lg'
    },
};

export const Middle: Story = {
    args: {
       onClick: action('on-click'),
       size: 'md'
    },
}

export const Small: Story = {
    args: {
       onClick: action('on-click'),
       size: 'sm'
    },
}

export const ExtraSmall: Story = {
    args: {
       onClick: action('on-click'),
       size: 'es'
    },
}