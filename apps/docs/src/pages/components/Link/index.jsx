import { Link } from '@gene/ui';
import Section from '@/components/Section';
import PreviewBlock from '@/components/PreviewBlock';
import { Table, Th, Td } from '@/components/Table';
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
              <Code>'primary' | 'inherit'</Code>
            </Td>
            <Td>
              <Code>'primary'</Code>
            </Td>
            <Td>The color of the component.</Td>
          </tr>
          <tr>
            <Td>
              <Code>underline</Code>
            </Td>
            <Td>
              <Code>boolean</Code>
            </Td>
            <Td>
              <Code>true</Code>
            </Td>
            <Td>Controls when the link should have an underline.</Td>
          </tr>
          <tr>
            <Td>
              <Code>expressive</Code>
            </Td>
            <Td>
              <Code>boolean</Code>
            </Td>
            <Td>
              <Code>true</Code>
            </Td>
            <Td>Sets the expressive hover animation.</Td>
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

export default LinkComponent;
