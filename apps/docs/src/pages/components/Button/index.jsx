import {
  Button,
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

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow hover={false} borderBottom={false}>
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
                <Code>variant</Code>
              </TableCell>
              <TableCell>
                <Code>'fill' | 'outline' | 'subtle'</Code>
              </TableCell>
              <TableCell>
                <Code>'fill'</Code>
              </TableCell>
              <TableCell>The component style variation.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Code>color</Code>
              </TableCell>
              <TableCell>
                <Code>'primary' | 'base'</Code>
              </TableCell>
              <TableCell>
                <Code>'primary'</Code>
              </TableCell>
              <TableCell>The color of the component.</TableCell>
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

export default ButtonComponent;
