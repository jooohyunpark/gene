import { Table, Link } from '@jooohyunpark/gene-ui';
import Section from '@/components/Section';
import PreviewBlock from '@/components/PreviewBlock';
import Code from '@/components/Code';

const LinkComponent = () => (
  <>
    <Section>
      <h1>Link</h1>
      <p>
        Links are a key component of GDS and are used as navigational elements
        to access further information.
      </p>
    </Section>

    <Section>
      <h2>Color</h2>

      <PreviewBlock
        code={`<Link color="primary" expressive={false} underline={false}>Link to works</Link>\n<Link color="inherit" expressive={false} underline={false}>Link to works</Link>`}
      >
        <Link color="primary" expressive={false} underline={false}>
          Link to works
        </Link>
        <Link color="inherit" expressive={false} underline={false}>
          Link to works
        </Link>
      </PreviewBlock>
    </Section>

    <Section>
      <h2>Underline</h2>

      <PreviewBlock
        code={`<Link color="primary" expressive={false}>Link to works</Link>\n<Link color="inherit" expressive={false}>Link to works</Link>`}
      >
        <Link color="primary" expressive={false}>
          Link to works
        </Link>
        <Link color="inherit" expressive={false}>
          Link to works
        </Link>
      </PreviewBlock>
    </Section>

    <Section>
      <h2>Expressive</h2>

      <PreviewBlock
        code={`<Link color="primary">Link to works</Link>\n<Link color="inherit">Link to works</Link>`}
      >
        <Link color="primary">Link to works</Link>
        <Link color="inherit">Link to works</Link>
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
                <Code>'primary' | 'inherit'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'primary'</Code>
              </Table.Cell>
              <Table.Cell>The color of the component.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Code>underline</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>true</Code>
              </Table.Cell>
              <Table.Cell>
                Controls when the link should have an underline.
              </Table.Cell>
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

export default LinkComponent;
