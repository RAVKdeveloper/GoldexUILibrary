import { TextAvatar } from '../ui/TextAvatar.ui'

import type { Meta, StoryObj } from '@storybook/react'



const meta: Meta<typeof TextAvatar> = {
    title: 'Design System/Atoms/Avatars/TextAvatar',
    component: TextAvatar,
    tags: ['autodocs'],
    argTypes: {
        bgColor: {
            description: 'Used to change the background color',
            control: { type: 'radio' },
            options: ['green', 'pink', 'purple', 'yellow', 'lightPurple', 'blue']
        },
        name: {
            description: 'The meaning of the avatar itself',
        },
        auto: {
            description: 'Automatically extract the first letters from a word',
        },
        sizeType: {
            defaultValue: 'md',
            options: ['lg', 'md', 'sm', 'es'],
            control: { type: 'radio' },
            description: 'Sizes textavatar component'
        }
    }
};

export default meta;
type Story = StoryObj<typeof TextAvatar>;


export const BasicMiddle: Story = {
    args: {
       name: 'R',
       bgColor: 'purple',
       auto: false
    },
};

export const WithAuto: Story = {
    args: {
       name: 'Worker',
       bgColor: 'pink',
       auto: true
    },
};


export const Large: Story = {
    args: {
       name: 'R',
       bgColor: 'purple',
       auto: false,
       sizeType: 'lg'
    },
};

export const Small: Story = {
    args: {
       name: 'Worker',
       bgColor: 'pink',
       auto: true,
       sizeType: 'sm'
    },
};

export const ExtraSmall: Story = {
    args: {
       name: 'Worker',
       bgColor: 'pink',
       auto: true,
       sizeType: 'es'
    },
};