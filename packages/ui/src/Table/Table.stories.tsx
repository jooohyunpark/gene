import type { Meta, StoryObj } from '@storybook/react';
import { TableContainer, Table, TableHead } from './Table';

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {},
  render: (args) => (
    <TableContainer>
      <Table {...args}>
        <TableHead></TableHead>
      </Table>
    </TableContainer>
  ),
};
