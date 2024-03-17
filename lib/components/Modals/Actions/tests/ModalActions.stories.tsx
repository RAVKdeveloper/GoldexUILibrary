import { ModalActions } from '../..';

import type { Meta, StoryObj } from '@storybook/react'



const meta: Meta<typeof ModalActions> = {
    title: 'Design System/Atoms/Modal/ModalActions',
    component: ModalActions,
    tags: ['autodocs'],
    decorators: [
        Story => (
            <div style={{ background: '#1F1F24' }}>
                <Story />
            </div>
        )
    ],
    argTypes: {
        align: {
            defaultValue: 'horizontal',
            controls: { type: 'radio' },
            options: ['horizontal', 'vertical'],
            description: 'Axis alignment'
        },
        variant: {
            defaultValue: 'confirm',
            controls: { type: 'radio' },
            options: ['confirm', 'delete'],
            description: 'Action option'
        },
        btnTextAction: {
            defaultValue: 'Action',
            description: 'Text in the action button(confirm or delete)'
        },
        btnTextCancel: {
            defaultValue: 'Cansel',
            description: 'Text in the cansel button'
        },
        cbAction: {
            description: 'Function called when an action button is clicked'
        },
        cbCansel: {
            description: 'Function called when an cansel button is clicked'
        }
    }
};

export default meta;
type Story = StoryObj<typeof ModalActions>;

export const ConfirmHorizontal: Story = {
    args: {
       align: 'horizontal',
       variant: 'confirm',
       btnTextCancel: 'Cansel',
       btnTextAction: 'Confirm',
    },
};

export const ConfirmVertical: Story = {
    args: {
       align: 'vertical',
       variant: 'confirm',
       btnTextCancel: 'Cansel',
       btnTextAction: 'Confirm',
    },
};

export const DeleteHorizontal: Story = {
    args: {
       align: 'horizontal',
       variant: 'delete',
       btnTextCancel: 'Cansel',
       btnTextAction: 'Delete',
    },
};

export const DeleteVertical: Story = {
    args: {
       align: 'vertical',
       variant: 'delete',
       btnTextCancel: 'Cansel',
       btnTextAction: 'Delete',
    },
};