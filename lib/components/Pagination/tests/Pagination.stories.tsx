import { Pagination } from '../ui/Pagination.ui';
import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react'



const meta: Meta<typeof Pagination> = {
    title: 'Design System/Entities/Pagination',
    component: Pagination,
    tags: ['autodocs'],
    parameters: {
        actions: { argTypesRegex: '^on.*' },
    },
    argTypes: {
        currentPage: {
            defaultValue: 1,
            description: 'Current page'
        },
        pages: {
            defaultValue: 10,
            description: 'All pages'
        },
        textContent: {
            defaultValue: 'Page 1 of 10',
            description: 'Text in pagination component',
        },
        next: {
            description: 'Function called when clicking the Next button'
        },
        back: {
            description: 'Function called when clicking the Back button'
        },
        btnPrev: {
            defaultValue: 'Back',
            description: 'Button text back'
        },
        btnNext: {
            defaultValue: 'Next',
            description: 'Button text next'
        }
    }
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Basic: Story = {
    args: {
       currentPage: 1,
       pages: 10,
       textContent: 'Page 1 of 10',
       next: action('onClick'),
       back: action('onClick')
    },
};

export const MaxCount: Story = {
    args: {
       currentPage: 10,
       pages: 10,
       textContent: 'Page 1 of 10',
       next: action('onClick'),
       back: action('onClick')
    },
};