import type { Meta, StoryObj } from '@storybook/react';
import { ErrorMessage } from './ErrorMessage';

const meta: Meta<typeof ErrorMessage> = {
  title: 'UI/ErrorMessage',
  component: ErrorMessage,
  tags: ['autodocs'],
  args: {
    title: 'Error Title',
    message: 'Something went wrong',
  },
};

export default meta;
type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {};

export const WithAction: Story = {
  args: {
    action: {
      label: 'Try Again',
      onClick: () => alert('Action clicked'),
    },
  },
};

export const CustomTitle: Story = {
  args: {
    title: 'Custom Error',
    message: 'This is a custom error message',
  },
};
