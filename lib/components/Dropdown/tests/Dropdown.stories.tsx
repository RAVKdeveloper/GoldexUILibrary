import { Dropdown } from '../Dropdown.ui'
import { LeadIcon } from 'goldex-icon-library';

import type { Meta, StoryObj } from '@storybook/react'



const meta: Meta<typeof Dropdown> = {
    title: 'Design System/Atoms/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
    decorators: [
        Story => (
            <div style={{ padding: 20, background: '#1F1F24' }}>
                <Story />
            </div>
        )
    ],
    argTypes: {
        active: {
            defaultValue: false,
            description: 'Is active dropdown'
        },
        isSuccess: {
            defaultValue: false,
            description: 'Is success icon in dropdown'
        },
        isCheckbox: {
            defaultValue: false,
            description: 'Does the component have a checkbox?'
        },
        isToggle: {
            defaultValue: false,
            description: 'Does the component have a toggle?'
        },
        isActiveCheckbox: {
            defaultValue: false,
            description: 'Is active checkbox'
        },
        isActiveToggle: {
            defaultValue: false,
            description: 'Is active toggle'
        },
        disabled: {
            defaultValue: false,
            description: 'Dropdown is disabled'
        },
        icon: {
            description: 'Icon in dropdown(start, before text)'
        },
        iconEnd: {
            description: 'Icon in dropdown(end, after text)'
        },
        cbCheckbox: {
            description: 'Function called when a checkbox is clicked'
        },
        cbToggle: {
            description: 'Function called when a toggle is clicked'
        }
    }
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
    args: {
        placeholder: 'Placeholder',
        active: false,
        isSuccess: false,
        isToggle: false,
        isCheckbox: false
    },
};

export const DefaultActive: Story = {
    args: {
        placeholder: 'Placeholder',
        active: true,
        isSuccess: true,
        isToggle: false,
        isCheckbox: false
    },
};

export const DropdownWithIcon: Story = {
    args: {
        placeholder: 'Placeholder',
        active: false,
        isSuccess: false,
        isToggle: false,
        isCheckbox: false,
        icon: <LeadIcon width={20} height={20} />
    },
};

export const DropdownWithToggle: Story = {
    args: {
        placeholder: 'Placeholder',
        active: false,
        isSuccess: false,
        isToggle: true,
        isCheckbox: false,
        isActiveToggle: true
    },
};

export const DropdownWithCheckbox: Story = {
    args: {
        placeholder: 'Placeholder',
        active: false,
        isSuccess: false,
        isToggle: false,
        isCheckbox: true,
        isActiveCheckbox: true,
        iconEnd: <LeadIcon width={20} height={20} />
    },
};

export const DropdownDisabled: Story = {
    args: {
        placeholder: 'Placeholder',
        disabled: true
    },
};