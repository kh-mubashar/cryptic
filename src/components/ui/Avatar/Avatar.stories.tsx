import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    name: 'John Doe',
    size: 32,
  },
  argTypes: {
    src: { control: 'text' },
    name: { control: 'text' },
    size: { control: 'number' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const WithCustomSize: Story = {
  args: {
    name: 'John Doe',
    size: 64,
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/300',
    name: 'John Doe',
  },
};

export const WithCustomClass: Story = {
  args: {
    name: 'John Doe',
    className: 'border-2 border-blue-500',
  },
};
