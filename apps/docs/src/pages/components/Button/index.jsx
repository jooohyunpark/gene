import { Button, Table } from '@jooohyunpark/gene-ui';
import Section from '@/components/Section';
import PreviewBlock from '@/components/PreviewBlock';
import Code from '@/components/Code';

const ButtonComponent = () => (
  <>
    <Section>
      <h1>Button</h1>
      <p>
        Buttons allow users to perform an action. GDS offers different kinds of
        button variations which each suit for different needs.
      </p>
    </Section>

    <Section>
      <h2>Variant</h2>

      <PreviewBlock
        code={`<Button variant="fill" expressive={false}>Click me</Button>\n<Button variant="outline" expressive={false}>Click me</Button>\n<Button variant="subtle" expressive={false}>Click me</Button>`}
      >
        <Button variant="fill" expressive={false}>
          Click me
        </Button>
        <Button variant="outline" expressive={false}>
          Click me
        </Button>
        <Button variant="subtle" expressive={false}>
          Click me
        </Button>
      </PreviewBlock>
    </Section>

    <Section>
      <h2>Color</h2>

      <PreviewBlock
        code={`<Button color="primary" expressive={false}>Click me</Button>\n<Button color="base" expressive={false}>Click me</Button>`}
      >
        <Button color="primary" expressive={false}>
          Click me
        </Button>
        <Button color="base" expressive={false}>
          Click me
        </Button>
      </PreviewBlock>
    </Section>

    <Section>
      <h2>Expressive</h2>

      <PreviewBlock
        code={`<Button variant="fill">Click me</Button>\n<Button variant="outline">Click me</Button>\n<Button variant="subtle">Click me</Button>`}
      >
        <Button variant="fill">Click me</Button>
        <Button variant="outline">Click me</Button>
        <Button variant="subtle">Click me</Button>
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
                <Code>variant</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'fill' | 'outline' | 'subtle'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'fill'</Code>
              </Table.Cell>
              <Table.Cell>The component style variation.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Code>color</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'primary' | 'base'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'primary'</Code>
              </Table.Cell>
              <Table.Cell>The color of the component.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Code>expressive</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>true</Code>
              </Table.Cell>
              <Table.Cell>Sets the expressive hover animation.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Code>href</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>string</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                If present, sets the component as an anchor
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

export default ButtonComponent;
