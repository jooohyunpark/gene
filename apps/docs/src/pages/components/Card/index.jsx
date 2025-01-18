import { Card, Table } from '@gene/ui';
import Section from '@/components/Section';
import PreviewBlock from '@/components/PreviewBlock';
import Code from '@/components/Code';

const CardComponent = () => (
  <>
    <Section>
      <h1>Card</h1>
      <p>Cards contain content and actions related to a single subject.</p>
    </Section>

    <Section>
      <h2>Color</h2>

      <PreviewBlock
        code={`<Card color="primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card>\n<Card color="neutral">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card>\n<Card color="base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card>`}
      >
        <Card color="primary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card>
        <Card color="neutral">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card>
        <Card color="base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card>
      </PreviewBlock>
    </Section>

    <Section>
      <h2>Padding</h2>

      <PreviewBlock
        code={`<Card color="neutral" padding="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card>\n<Card color="neutral" padding="md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card>\n<Card color="neutral" padding="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card>`}
      >
        <Card color="neutral" padding="sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card>
        <Card color="neutral" padding="md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card>
        <Card color="neutral" padding="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card>
      </PreviewBlock>
    </Section>

    <Section>
      <h2>Outline</h2>

      <PreviewBlock
        code={`<Card color="primary" outline>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card>\n<Card color="neutral" outline>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card>\n<Card color="base" outline>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card>`}
      >
        <Card color="primary" outline>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card>
        <Card color="neutral" outline>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card>
        <Card color="base" outline>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card>
      </PreviewBlock>
    </Section>

    <Section>
      <h2>Props</h2>

      <Table.Container>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Cell scope="col">Name</Table.Cell>
              <Table.Cell scope="col">Type</Table.Cell>
              <Table.Cell scope="col">Default</Table.Cell>
              <Table.Cell scope="col">Description</Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Code>color</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'primary' | 'neutral' | 'base'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'neutral'</Code>
              </Table.Cell>
              <Table.Cell>The color of the component.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Code>padding</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'sm' | 'md' | 'lg'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'md'</Code>
              </Table.Cell>
              <Table.Cell>The padding of the component.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Code>outline</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>false</Code>
              </Table.Cell>
              <Table.Cell>
                Controls when the link should have an outline.
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>
                <Code>children</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>node</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>The content of the component.</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Table.Container>
    </Section>
  </>
);

export default CardComponent;
