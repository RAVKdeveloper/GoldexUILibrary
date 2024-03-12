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
        AltText: {
            description: 'Alt attribute text'
        },
        onClick: {
            description: 'Option Click Handler',
        }
    },
    parameters: {
        actions: { argTypesRegex: '^on.*' },
    },
};

export default meta;
type Story = StoryObj<typeof UploadAvatar>;


export const Basic: Story = {
    args: {
       AltText: 'upload avatar',
       onClick: action('on-click')
    },
};