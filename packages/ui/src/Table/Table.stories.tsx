import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  subcomponents: {},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'radio',
      options: ['primary', 'neutral'],
    },
    // align: {
    //   control: 'radio',
    //   options: ['left', 'center', 'right'],
    // },
    // expressive: {
    //   control: 'boolean',
    //   description: 'Whether the row should have a hover effect',
    // },
    // borderBottom: {
    //   control: 'boolean',
    //   description: 'Whether the row should have a bottom border',
    // },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    color: 'primary',
    // expressive: true,
    // borderBottom: true,
    // align: 'center',
  },
  // render: (args) => (
  //   <Table.Container>
  //     <Table>
  //       <caption>All Nobel Prizes 2024</caption>

  //       <Table.Head color={args.color}>
  //         <Table.Row>
  //           <Table.Cell align={args.align}>Category</Table.Cell>
  //           <Table.Cell align={args.align}>Winners</Table.Cell>
  //         </Table.Row>
  //       </Table.Head>
  //       <Table.Body>
  //         <Table.Row
  //           expressive={args.expressive}
  //           borderBottom={args.borderBottom}
  //         >
  //           <Table.Cell align={args.align}>Physics</Table.Cell>
  //           <Table.Cell align={args.align}>
  //             John J. Hopfield, Geoffrey Hinton
  //           </Table.Cell>
  //         </Table.Row>
  //         <Table.Row
  //           expressive={args.expressive}
  //           borderBottom={args.borderBottom}
  //         >
  //           <Table.Cell align={args.align}>Chemistry</Table.Cell>
  //           <Table.Cell align={args.align}>
  //             David Baker, Demis Hassabis, and John M. Jumper
  //           </Table.Cell>
  //         </Table.Row>
  //         <Table.Row
  //           expressive={args.expressive}
  //           borderBottom={args.borderBottom}
  //         >
  //           <Table.Cell align={args.align}>Physiology or Medicine</Table.Cell>
  //           <Table.Cell align={args.align}>
  //             Victor Ambros, Gary Ruvkun
  //           </Table.Cell>
  //         </Table.Row>
  //         <Table.Row
  //           expressive={args.expressive}
  //           borderBottom={args.borderBottom}
  //         >
  //           <Table.Cell align={args.align}>Literature</Table.Cell>
  //           <Table.Cell align={args.align}>Han Kang</Table.Cell>
  //         </Table.Row>
  //         <Table.Row
  //           expressive={args.expressive}
  //           borderBottom={args.borderBottom}
  //         >
  //           <Table.Cell align={args.align}>Peace</Table.Cell>
  //           <Table.Cell align={args.align}>Nihon Hidankyo</Table.Cell>
  //         </Table.Row>
  //         <Table.Row
  //           expressive={args.expressive}
  //           borderBottom={args.borderBottom}
  //         >
  //           <Table.Cell align={args.align}>Economic Sciences</Table.Cell>
  //           <Table.Cell align={args.align}>
  //             Daron Acemoglu, Simon Johnson, and James A. Robinson
  //           </Table.Cell>
  //         </Table.Row>
  //       </Table.Body>
  //     </Table>
  //   </Table.Container>
  // ),
};
