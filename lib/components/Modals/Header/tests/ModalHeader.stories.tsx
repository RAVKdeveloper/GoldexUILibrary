import { ModalHeader } from '../ui/ModalHeader.ui';
import { FeaturedIcon } from 'goldex-icon-library';

import type { Meta, StoryObj } from '@storybook/react'



const meta: Meta<typeof ModalHeader> = {
    title: 'Design System/Atoms/Modal/ModalHeader',
    component: ModalHeader,
    tags: ['autodocs'],
    decorators: [
        Story => (
            <div style={{ background: '#1F1F24', maxWidth: 500 }}>
                <Story />
            </div>
        )
    ],
    argTypes: {
        align: {
            defaultValue: 'default',
            description: 'Axis alignment'
        },
        title: {
            defaultValue: 'Blog post',
            description: 'Title header'
        },
        paragraph: {
            description: 'Text in component(tag p)'
        },
        cbClose: {
            description: 'The function called when a call is made to close'
        },
        icon: {
            description: 'Icon in component'
        }
    }
};

export default meta;
type Story = StoryObj<typeof ModalHeader>;

export const Basic: Story = {
    args: {
       align: 'default',
       title: 'Blog post',
       paragraph: `More information is available to you here, by checking it you can resolve the dispute 
       in favor of the client or team.`,
       cbClose: () => {},
    },
};

export const Center: Story = {
    args: {
       align: 'center',
       title: 'Blog post',
       paragraph: `More information is available to you here, by checking it you can resolve the dispute 
       in favor of the client or team.`,
       cbClose: () => {},
    },
};

export const BasicWithIcon: Story = {
    args: {
       align: 'default',
       title: 'Blog post',
       paragraph: `More information is available to you here, by checking it you can resolve the dispute 
       in favor of the client or team.`,
       cbClose: () => {},
       icon: <FeaturedIcon size='lg' />
    },
};

export const CenterWithIcon: Story = {
    args: {
       align: 'center',
       title: 'Blog post',
       paragraph: `More information is available to you here, by checking it you can resolve the dispute 
       in favor of the client or team.`,
       cbClose: () => {},
       icon: <FeaturedIcon size='lg' />
    },
}