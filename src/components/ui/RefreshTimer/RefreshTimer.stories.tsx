import type { Meta, StoryObj } from '@storybook/react';
import { RefreshTimer } from './RefreshTimer';

const meta: Meta<typeof RefreshTimer> = {
  title: 'UI/RefreshTimer',
  component: RefreshTimer,
  tags: ['autodocs'],
  args: {
    interval: 30000,
    isLoading: false,
    onRefresh: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },
  },
  argTypes: {
    interval: {
      control: 'select',
      options: [30000, 60000, 300000, 900000],
      description: 'Refresh interval in milliseconds',
    },
    isLoading: {
      control: 'boolean',
      description: 'Loading state',
    },
    onRefresh: {
      description: 'Callback function triggered on refresh',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RefreshTimer>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const LongInterval: Story = {
  args: {
    interval: 900000, // 15 minutes
  },
};
