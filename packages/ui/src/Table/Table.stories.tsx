import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
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
    color: 'primary',
    expressive: true,
    borderBottom: true,
    zebra: false,
  },
  render: (args) => (
    <Table.Container>
      <Table {...args}>
        <caption style={{ marginBottom: 8 }}>All Nobel Prizes 2024</caption>

        <Table.Head>
          <Table.Row>
            <Table.Cell>Category</Table.Cell>
            <Table.Cell>Winners</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Physics</Table.Cell>
            <Table.Cell>John J. Hopfield, Geoffrey Hinton</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Chemistry</Table.Cell>
            <Table.Cell>
              David Baker, Demis Hassabis, and John M. Jumper
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Physiology or Medicine</Table.Cell>
            <Table.Cell>Victor Ambros, Gary Ruvkun</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Literature</Table.Cell>
            <Table.Cell>Han Kang</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Peace</Table.Cell>
            <Table.Cell>Nihon Hidankyo</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Economic Sciences</Table.Cell>
            <Table.Cell>
              Daron Acemoglu, Simon Johnson, and James A. Robinson
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Table.Container>
  ),
};
