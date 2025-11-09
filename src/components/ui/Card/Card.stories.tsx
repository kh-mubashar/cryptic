import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    title: 'Example Card',
    children: 'This is the card content',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const WithoutTitle: Story = {
  args: {
    title: undefined,
    children: 'Card without title',
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'bg-blue-100',
    children: 'Card with custom background',
  },
};
