import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    href: 'https://dev.parkjoohyun.com',
    color: 'inherit',
    underline: true,
    expressive: true,
    children: 'Link to my works',
  },
};
