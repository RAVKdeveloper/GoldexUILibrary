import { TextField } from '../TextField.ui'
import { EyeIcon } from 'goldex-icon-library'

import type { Meta, StoryObj } from '@storybook/react'



const meta: Meta<typeof TextField> = {
    title: 'Design System/Atoms/TextField',
    component: TextField,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            defaultValue: 'input',
            description: 'Options for input types'
        },
        label: {
            defaultValue: 'Label',
            description: 'Label input'
        },
        sizeType: {
            defaultValue: 'lg',
            description: 'Types of input sizes(Not in the search variant)'
        },
        isError: {
            defaultValue: false,
            description: 'Error status'
        },
        helpText: {
            defaultValue: 'Help text',
            description: 'Auxiliary text under the input'
        },
        icon: {
            description: 'Additional icon in the component (not available in the search variant)'
        },
        cbIcon: {
            description: `A function called when you click on the icon (in the case of a select variant, 
                          when you click on the select itself)`
        }
    }
};

export default meta;
type Story = StoryObj<typeof TextField>;


export const InputVariant: Story = {
    args: {
      label: 'Label',
      variant: 'input',
      sizeType: 'lg',
      placeholder: 'Placeholder',
    }
};

export const InputVariantWithIcon: Story = {
    args: {
      label: 'Label',        
      variant: 'input',
      sizeType: 'lg',
      placeholder: 'Placeholder',
      icon: <EyeIcon width={20} height={20} opacity={0.4} />
    }
};

export const InputVariantWithIconAndError: Story = {
    args: {
      label: 'Label',
      variant: 'input',
      sizeType: 'lg',
      placeholder: 'Placeholder',
      icon: <EyeIcon width={20} height={20} opacity={0.4} />,
      isError: true,
      helpText: 'Error text'
    }
};

export const SearchVariant: Story = {
    args: {
      label: 'Label',
      variant: 'search',
      sizeType: 'lg',
      placeholder: 'Search....',
      isError: true,
      helpText: 'Error text'
    }
};

export const SelectVariant: Story = {
    args: {
      label: 'Label',
      variant: 'select',
      sizeType: 'lg',
      placeholder: 'Select',
      isError: false,
      helpText: 'Help text',
    }
};

export const SelectVariantWithIcon: Story = {
    args: {
      label: 'Label',
      variant: 'select',
      sizeType: 'lg',
      placeholder: 'Select',
      isError: false,
      helpText: 'Help text',
      icon: <EyeIcon width={20} height={20} opacity={0.4} />,
    }
};

export const SelectVariantError: Story = {
    args: {
      label: 'Label',
      variant: 'select',
      sizeType: 'lg',
      placeholder: 'Select',
      isError: true,
      helpText: 'Error text',
    }
};