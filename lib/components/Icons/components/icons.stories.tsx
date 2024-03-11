import { IconsPage } from './icons.page'

import type { Meta, StoryObj } from '@storybook/react'



const meta: Meta<typeof IconsPage> = {
    title: 'Design System/Icons',
    component: IconsPage,
};

export default meta;
type Story = StoryObj<typeof IconsPage>;

export const Basic: Story = {};
