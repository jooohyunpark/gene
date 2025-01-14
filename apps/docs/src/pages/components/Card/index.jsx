import { Card } from '@gene/ui';
import Section from '@/components/Section';
import PreviewBlock from '@/components/PreviewBlock';
import { Table, Th, Td } from '@/components/Table';
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

      <Table>
        <thead>
          <tr>
            <Th scope="col" align="left">
              Name
            </Th>
            <Th scope="col" align="left">
              Type
            </Th>
            <Th scope="col" align="left">
              Default
            </Th>
            <Th scope="col" align="left">
              Description
            </Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>
              <Code>color</Code>
            </Td>
            <Td>
              <Code>'primary' | 'neutral' | 'base'</Code>
            </Td>
            <Td>
              <Code>'neutral'</Code>
            </Td>
            <Td>The color of the component.</Td>
          </tr>
          <tr>
            <Td>
              <Code>padding</Code>
            </Td>
            <Td>
              <Code>'sm' | 'md' | 'lg'</Code>
            </Td>
            <Td>
              <Code>'md'</Code>
            </Td>
            <Td>The padding of the component.</Td>
          </tr>
          <tr>
            <Td>
              <Code>outline</Code>
            </Td>
            <Td>
              <Code>boolean</Code>
            </Td>
            <Td>
              <Code>false</Code>
            </Td>
            <Td>Controls when the link should have an outline.</Td>
          </tr>

          <tr>
            <Td>
              <Code>children</Code>
            </Td>
            <Td>
              <Code>node</Code>
            </Td>
            <Td>-</Td>
            <Td>The content of the component.</Td>
          </tr>
        </tbody>
      </Table>
    </Section>
  </>
);

export default CardComponent;
