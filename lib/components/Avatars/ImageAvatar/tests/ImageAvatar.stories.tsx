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
            options: ['lg', 'sm']
        },
        url: {
            description: 'Url avatar image'
        },
        removeFn: {
            description: 'Delete callback'
        }
    }
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