import {
  Link,
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@gene/ui';
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

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell component="th" scope="col" align="left">
                Name
              </TableCell>
              <TableCell component="th" scope="col" align="left">
                Type
              </TableCell>
              <TableCell component="th" scope="col" align="left">
                Default
              </TableCell>
              <TableCell component="th" scope="col" align="left">
                Description
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Code>color</Code>
              </TableCell>
              <TableCell>
                <Code>'primary' | 'inherit'</Code>
              </TableCell>
              <TableCell>
                <Code>'primary'</Code>
              </TableCell>
              <TableCell>The color of the component.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Code>underline</Code>
              </TableCell>
              <TableCell>
                <Code>boolean</Code>
              </TableCell>
              <TableCell>
                <Code>true</Code>
              </TableCell>
              <TableCell>
                Controls when the link should have an underline.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Code>expressive</Code>
              </TableCell>
              <TableCell>
                <Code>boolean</Code>
              </TableCell>
              <TableCell>
                <Code>true</Code>
              </TableCell>
              <TableCell>Sets the expressive hover animation.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Code>children</Code>
              </TableCell>
              <TableCell>
                <Code>node</Code>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell>The content of the component.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Section>
  </>
);

export default LinkComponent;
