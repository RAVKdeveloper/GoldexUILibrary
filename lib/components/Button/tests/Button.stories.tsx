import { Button } from '../ui/Button'
import { CircleIcon } from '../../../main'

import type { Meta, StoryObj } from '@storybook/react'



const meta: Meta<typeof Button> = {
    title: 'Design System/Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ background: '#1F1F24', padding: 10 }}>
                <Story />
            </div>
        )
    ]
};

export default meta;
type Story = StoryObj<typeof Button>;

export const BasicPrimary: Story = {
    args: {
       children: 'Button',
       disabled: true,
       variant: 'primary',
       size: 'md',
       isActive: false
    },
};

export const BasicSecondary: Story = {
    args: {
       children: 'Button',
       disabled: false,
       variant: 'secondary',
       size: 'lg',
       isActive: false
    },
};

export const BasicCritical: Story = {
    args: {
       children: 'Button',
       disabled: false,
       variant: 'critical',
       size: 'lg',
       isActive: false
    },
};

export const PrimaryWithIcon: Story = {
    args: {
       children: 'Button',
       disabled: false,
       variant: 'primary',
       size: 'lg',
       icon: <CircleIcon width={20} height={20} />,
       isActive: false
    },
};

export const SecondaryWithIcon: Story = {
    args: {
       children: 'Button',
       disabled: false,
       variant: 'secondary',
       size: 'lg',
       icon: <CircleIcon width={20} height={20} />,
       isActive: false
    },
}

export const CriticalWithIcon: Story = {
    args: {
       children: 'Button',
       disabled: false,
       variant: 'critical',
       size: 'lg',
       icon: <CircleIcon width={20} height={20} />,
       isActive: false
    },
}

export const PrimaryIconBtn: Story = {
    args: {
       disabled: false,
       variant: 'primary',
       size: 'lg',
       icon: <CircleIcon width={20} height={20} />,
       isActive: false
    },
}

export const SecondaryIconBtn: Story = {
    args: {
       disabled: false,
       variant: 'secondary',
       size: 'lg',
       icon: <CircleIcon width={20} height={20} />,
       isActive: false
    }
}

export const CriticalIconBtn: Story = {
    args: {
       disabled: false,
       variant: 'critical',
       size: 'lg',
       icon: <CircleIcon width={20} height={20} />,
       isActive: false
    }
}

export const ActiveBtn: Story = {
    args: {
        children: 'Button',
        disabled: false,
        variant: 'primary',
        size: 'lg',
        isActive: true
     },
}


