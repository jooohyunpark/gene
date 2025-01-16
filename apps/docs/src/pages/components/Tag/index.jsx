import {
  Tag,
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
                <Code>'primary' | 'neutral'</Code>
              </TableCell>
              <TableCell>
                <Code>'neutral'</Code>
              </TableCell>
              <TableCell>The color of the component.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Code>href</Code>
              </TableCell>
              <TableCell>
                <Code>string</Code>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                URI or path. If provided, the tag will be a link.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Code>onClick</Code>
              </TableCell>
              <TableCell>
                <Code>function</Code>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                Handler to be called when the tag is clicked.
                <br />
                If provided, the tag will be a button.
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

export default TagComponent;
