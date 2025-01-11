import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { color } from '@gene/token';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story, context) => {
      const backgroundColor =
        context.args.color === 'primary' ? color.white : color.blue30;

      return (
        <div
          style={{
            padding: 40,
            minHeight: 80,
            backgroundColor,
            display: 'grid',
            placeContent: 'center',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    color: 'primary',
    variant: 'fill',
    onClick: action('onClick'),
    children: 'Click me!',
  },
};
