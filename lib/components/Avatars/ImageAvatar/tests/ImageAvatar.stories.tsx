import { ImageAvatar } from '../ui/ImageAvatar.ui'

import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import testUrl from '../../../../assets/img/Rectangle 1886testAvatar.svg'


const meta: Meta<typeof ImageAvatar> = {
    title: 'Design System/Atoms/Avatars/ImageAvatar',
    component: ImageAvatar,
    tags: ['autodocs'],
    argTypes: {
        size: {
            description: 'Size image',
            control: { type: 'radio' },
            options: ['lg', 'sm', 'md', 'es']
        },
        url: {
            description: 'Url avatar image'
        },
        removeFn: {
            description: 'Delete callback'
        },
        altText: {
            defaultValue: 'Alt text',
            description: 'Alt text avatar'
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
type Story = StoryObj<typeof ImageAvatar>;

export const LargeAvatar: Story = {
    args: {
        url: testUrl,
        removeFn: action('on-click'),
        size: 'lg'
    },
};

export const MiddleAvatar: Story = {
    args: {
        url: testUrl,
        removeFn: action('on-click'),
        size: 'md'
    },
};

export const SmallAvatar: Story = {
    args: {
        url: testUrl,
        removeFn: action('on-click'),
        size: 'sm'
    },
};

export const ExtraSmallAvatar: Story = {
    args: {
        url: testUrl,
        removeFn: action('on-click'),
        size: 'es'
    },
};