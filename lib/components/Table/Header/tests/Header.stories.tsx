import { HeaderTable } from '../ui/Header.ui';

import type { Meta, StoryObj } from '@storybook/react'



const meta: Meta<typeof HeaderTable> = {
    title: 'Design System/Atoms/Table/HeaderTable',
    component: HeaderTable,
    tags: ['autodocs'],
    argTypes: {
        text: {
            defaultValue: 'Example header',
            description: 'Text in component'
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
type Story = StoryObj<typeof HeaderTable>;

export const Basic: Story = {
    args: {
       text: 'Example header'
    },
};