import { Textarea } from '../ui/Textarea.ui'; 

import type { Meta, StoryObj } from '@storybook/react'



const meta: Meta<typeof Textarea> = {
    title: 'Design System/Atoms/Textarea',
    component: Textarea,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ padding: 20, background: '#1F1F24' }}>
                <Story />
            </div>
        )
    ],
    argTypes: {
        isError: {
            defaultValue: false,
            description: 'Does the element have an error?'
        },
        helpText: {
            defaultValue: 'Help text',
            description: 'Auxiliary text under the element (if there is an error, the color is red)'
        },
        label: {
            defaultValue: 'Label',
            description: 'Label (text above the element)'
        },
        disabled: {
            defaultValue: false,
            description: 'Is the item blocked?'
        },
        placeholder: {
            defaultValue: 'Placeholder',
            description: 'Placeholder textarea'
        }
    }
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const TextareaDefault: Story = {
    args: {
       helpText: 'Help text',
       label: 'Label',
       placeholder: 'Placeholder'
    },
};

export const TextareaError: Story = {
    args: {
       helpText: 'Error text',
       label: 'Label',
       placeholder: 'Placeholder',
       isError: true
    },
};

export const TextareaDisabled: Story = {
    args: {
       helpText: 'Help text',
       label: 'Label',
       placeholder: 'Placeholder',
       disabled: true
    },
};