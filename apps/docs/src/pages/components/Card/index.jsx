import {
  Card,
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
                <Code>'primary' | 'neutral' | 'base'</Code>
              </TableCell>
              <TableCell>
                <Code>'neutral'</Code>
              </TableCell>
              <TableCell>The color of the component.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Code>padding</Code>
              </TableCell>
              <TableCell>
                <Code>'sm' | 'md' | 'lg'</Code>
              </TableCell>
              <TableCell>
                <Code>'md'</Code>
              </TableCell>
              <TableCell>The padding of the component.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Code>outline</Code>
              </TableCell>
              <TableCell>
                <Code>boolean</Code>
              </TableCell>
              <TableCell>
                <Code>false</Code>
              </TableCell>
              <TableCell>
                Controls when the link should have an outline.
              </TableCell>
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

export default CardComponent;
