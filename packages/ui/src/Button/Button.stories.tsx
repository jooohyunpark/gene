import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { color } from '@jooohyunpark/gene-token';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
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
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    color: 'primary',
    variant: 'fill',
    expressive: true,
    onClick: action('onClick'),
    children: 'Click me',
  },
};
