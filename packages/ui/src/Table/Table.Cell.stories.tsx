import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta<typeof Table.Cell> = {
  title: 'Components/Table/Table.Cell',
  component: Table.Cell,
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
    align: 'left',
    component: 'td',
    scope: 'col',
  },
  render: (args) => (
    <Table.Container>
      <Table>
        <caption style={{ marginBottom: 8 }}>All Nobel Prizes 2024</caption>

        <Table.Head>
          <Table.Row>
            <Table.Cell {...args}>Category</Table.Cell>
            <Table.Cell {...args}>Winners</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell {...args}>Physics</Table.Cell>
            <Table.Cell {...args}>John J. Hopfield, Geoffrey Hinton</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell {...args}>Chemistry</Table.Cell>
            <Table.Cell {...args}>
              David Baker, Demis Hassabis, and John M. Jumper
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell {...args}>Physiology or Medicine</Table.Cell>
            <Table.Cell {...args}>Victor Ambros, Gary Ruvkun</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell {...args}>Literature</Table.Cell>
            <Table.Cell {...args}>Han Kang</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell {...args}>Peace</Table.Cell>
            <Table.Cell {...args}>Nihon Hidankyo</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell {...args}>Economic Sciences</Table.Cell>
            <Table.Cell {...args}>
              Daron Acemoglu, Simon Johnson, and James A. Robinson
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Table.Container>
  ),
};
