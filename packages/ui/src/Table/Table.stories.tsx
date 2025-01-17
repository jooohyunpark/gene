import type { Meta, StoryObj } from '@storybook/react';
import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  subcomponents: {
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'radio',
      options: ['primary', 'neutral'],
    },
    align: {
      control: 'radio',
      options: ['left', 'center', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    color: 'primary',
    expressive: true,
    borderBottom: true,
    align: 'center',
  },
  render: (args) => (
    <TableContainer>
      <Table>
        <caption>All Nobel Prizes 2024</caption>

        <TableHead color={args.color}>
          <TableRow>
            <TableCell align={args.align}>Category</TableCell>
            <TableCell align={args.align}>Winners</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            expressive={args.expressive}
            borderBottom={args.borderBottom}
          >
            <TableCell align={args.align}>Physics</TableCell>
            <TableCell align={args.align}>
              John J. Hopfield, Geoffrey Hinton
            </TableCell>
          </TableRow>
          <TableRow
            expressive={args.expressive}
            borderBottom={args.borderBottom}
          >
            <TableCell align={args.align}>Chemistry</TableCell>
            <TableCell align={args.align}>
              David Baker, Demis Hassabis, and John M. Jumper
            </TableCell>
          </TableRow>
          <TableRow
            expressive={args.expressive}
            borderBottom={args.borderBottom}
          >
            <TableCell align={args.align}>Physiology or Medicine</TableCell>
            <TableCell align={args.align}>Victor Ambros, Gary Ruvkun</TableCell>
          </TableRow>
          <TableRow
            expressive={args.expressive}
            borderBottom={args.borderBottom}
          >
            <TableCell align={args.align}>Literature</TableCell>
            <TableCell align={args.align}>Han Kang</TableCell>
          </TableRow>
          <TableRow
            expressive={args.expressive}
            borderBottom={args.borderBottom}
          >
            <TableCell align={args.align}>Peace</TableCell>
            <TableCell align={args.align}>Nihon Hidankyo</TableCell>
          </TableRow>
          <TableRow
            expressive={args.expressive}
            borderBottom={args.borderBottom}
          >
            <TableCell align={args.align}>Economic Sciences</TableCell>
            <TableCell align={args.align}>
              Daron Acemoglu, Simon Johnson, and James A. Robinson
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  ),
};
