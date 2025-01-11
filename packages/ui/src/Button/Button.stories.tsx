import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { color } from '@gene/token';
import { Card } from '../Card';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: 'primary',
    type: 'fill',
    onClick: action('onClick'),
  },
  render: (args) => <Button {...args}>Click me!</Button>,
};
