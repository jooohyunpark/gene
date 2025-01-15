import { Tag } from '@gene/ui';
import Section from '@/components/Section';
import PreviewBlock from '@/components/PreviewBlock';
import { Table, Th, Td } from '@/components/Table';
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
              <Code>'primary' | 'neutral'</Code>
            </Td>
            <Td>
              <Code>'neutral'</Code>
            </Td>
            <Td>The color of the component.</Td>
          </tr>
          <tr>
            <Td>
              <Code>href</Code>
            </Td>
            <Td>
              <Code>string</Code>
            </Td>
            <Td>-</Td>
            <Td>URI or path. If provided, the tag will be a link.</Td>
          </tr>
          <tr>
            <Td>
              <Code>onClick</Code>
            </Td>
            <Td>
              <Code>function</Code>
            </Td>
            <Td>-</Td>
            <Td>
              Handler to be called when the tag is clicked.
              <br />
              If provided, the tag will be a button.
            </Td>
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

export default TagComponent;
