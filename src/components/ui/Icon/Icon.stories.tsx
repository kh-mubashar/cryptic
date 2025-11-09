import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'UI/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {
    name: 'search',
  },
  argTypes: {
    name: {
      control: 'select',
      options: [
        'search',
        'notification',
        'dashboard',
        'markets',
        'portfolio',
        'alerts',
      ],
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {};

export const WithCustomClass: Story = {
  args: {
    name: 'dashboard',
    className: 'text-2xl text-blue-500',
  },
};

export const AllIcons: Story = {
  render: () => (
    <div className="flex gap-4">
      <Icon name="search" />
      <Icon name="notification" />
      <Icon name="dashboard" />
      <Icon name="markets" />
      <Icon name="portfolio" />
      <Icon name="alerts" />
    </div>
  ),
};
