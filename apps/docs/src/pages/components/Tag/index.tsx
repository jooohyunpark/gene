import { Tag, Table } from '@jooohyunpark/gene-ui';
import Section from '@/components/Section';
import PreviewBlock from '@/components/PreviewBlock';
import Code from '@/components/Code';

const TagComponent = () => (
  <>
    <Section>
      <h1>Tag</h1>
      <p>Tags label UI objects for easy identification and interaction.</p>
    </Section>

    <Section>
      <h2>Color</h2>

      <PreviewBlock
        code={`<Tag color="primary">Gene Design System</Tag>\n<Tag color="neutral">Gene Design System</Tag>`}
      >
        <Tag color="primary">Gene Design System</Tag>
        <Tag color="neutral">Gene Design System</Tag>
      </PreviewBlock>
    </Section>

    <Section>
      <h2>href</h2>

      <PreviewBlock
        code={`<Tag color="primary" href="https://gene.parkjoohyun.com">Gene Design System</Tag>\n<Tag color="neutral" href="https://gene.parkjoohyun.com">Gene Design System</Tag>`}
      >
        <Tag color="primary" href="https://gene.parkjoohyun.com">
          Gene Design System
        </Tag>
        <Tag color="neutral" href="https://gene.parkjoohyun.com">
          Gene Design System
        </Tag>
      </PreviewBlock>
    </Section>

    <Section>
      <h2>Props</h2>

      <Table.Container>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Cell component="th" scope="col" align="left">
                Name
              </Table.Cell>
              <Table.Cell component="th" scope="col" align="left">
                Type
              </Table.Cell>
              <Table.Cell component="th" scope="col" align="left">
                Default
              </Table.Cell>
              <Table.Cell component="th" scope="col" align="left">
                Description
              </Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Code>color</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'primary' | 'neutral'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'neutral'</Code>
              </Table.Cell>
              <Table.Cell>The color of the component.</Table.Cell>
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
                URI or path. If provided, the tag will be a link.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Code>onClick</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>function</Code>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>
                Handler to be called when the tag is clicked.
                <br />
                If provided, the tag will be a button.
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

export default TagComponent;
