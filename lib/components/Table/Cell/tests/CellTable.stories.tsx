import { CellTable } from '../ui/Cell.ui';
import { LeadIcon } from 'goldex-icon-library';

import type { Meta, StoryObj } from '@storybook/react'



const meta: Meta<typeof CellTable> = {
    title: 'Design System/Atoms/Table/CellTable',
    component: CellTable,
    tags: ['autodocs'],
    argTypes: {
        text: {
            defaultValue: 'Example header',
            description: 'Text in component'
        },
        icon: {
            description: 'Icon in component'
        }
    },
};

export default meta;
type Story = StoryObj<typeof CellTable>;

export const Basic: Story = {
    args: {
       text: 'Example header'
    },
};

export const CellWithIcon: Story = {
    args: {
       text: 'Example header',
       icon: <LeadIcon width={20} height={20} />
    },
};