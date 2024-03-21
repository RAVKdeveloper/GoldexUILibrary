import { Status } from '../ui/Status.ui';
import type { Meta, StoryObj } from '@storybook/react';
declare const meta: Meta<typeof Status>;
export default meta;
type Story = StoryObj<typeof Status>;
export declare const PaidStatus: Story;
export declare const WaitStatus: Story;
export declare const RejectedStatus: Story;
export declare const ExpiredStatus: Story;
