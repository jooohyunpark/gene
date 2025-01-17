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

const NobelPrizeTable = ({ color = 'primary', hover = true }) => (
  <TableContainer>
    <Table>
      <TableHead color={color}>
        <TableRow>
          <TableCell component="th">Category</TableCell>
          <TableCell component="th">Winners</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow hover={hover}>
          <TableCell>Physics</TableCell>
          <TableCell>John J. Hopfield, Geoffrey Hinton</TableCell>
        </TableRow>
        <TableRow hover={hover}>
          <TableCell>Chemistry</TableCell>
          <TableCell>David Baker, Demis Hassabis, and John M. Jumper</TableCell>
        </TableRow>
        <TableRow hover={hover}>
          <TableCell>Physiology or Medicine</TableCell>
          <TableCell>Victor Ambros, Gary Ruvkun</TableCell>
        </TableRow>
        <TableRow hover={hover}>
          <TableCell>Literature</TableCell>
          <TableCell>Han Kang</TableCell>
        </TableRow>
        <TableRow hover={hover}>
          <TableCell>Peace</TableCell>
          <TableCell>Nihon Hidankyo</TableCell>
        </TableRow>
        <TableRow hover={hover}>
          <TableCell>Economic Sciences</TableCell>
          <TableCell>
            Daron Acemoglu, Simon Johnson, and James A. Robinson
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);

const TableComponent = () => (
  <>
    <Section>
      <h1>Table</h1>
      <p>xxxxx</p>
    </Section>

    <Section>
      <h2>Color</h2>

      <PreviewBlock
        code={`<TableContainer>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell component="th">...</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>...</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>\n
<TableContainer>
  <Table>
    <TableHead color="neutral">
      <TableRow>
        <TableCell component="th">...</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>...</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>`}
      >
        <NobelPrizeTable color="primary" />
        <NobelPrizeTable color="neutral" />
      </PreviewBlock>
    </Section>

    <Section>
      <h2>Expressive</h2>

      <PreviewBlock
        code={`<TableContainer>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell component="th">...</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>...</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>\n
<TableContainer>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell component="th">...</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow hover={false}>
        <TableCell>...</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>`}
      >
        <NobelPrizeTable />
        <NobelPrizeTable hover={false} />
      </PreviewBlock>
    </Section>

    <Section>
      <h2>Props</h2>

      <h3>TableHead</h3>

      <TableContainer style={{ width: '100%' }}>
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
                <Code>'primary'</Code>
              </TableCell>
              <TableCell>The color of the table head.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <h3>TableRow</h3>

      <TableContainer style={{ width: '100%' }}>
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
                <Code>borderBottom</Code>
              </TableCell>
              <TableCell>
                <Code>boolean</Code>
              </TableCell>
              <TableCell>
                <Code>true</Code>
              </TableCell>
              <TableCell>Adds the border at the bottom.</TableCell>
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
              <TableCell>Sets the expressive hover shade.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <h3>TableCell</h3>

      <TableContainer style={{ width: '100%' }}>
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
                <Code>component</Code>
              </TableCell>
              <TableCell>
                <Code>'th' | 'td'</Code>
              </TableCell>
              <TableCell>
                <Code>'td'</Code>
              </TableCell>
              <TableCell>The component used for the node.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Code>scope</Code>
              </TableCell>
              <TableCell>
                <Code>'row' | 'rowgroup' | 'col' | 'colgroup'</Code>
              </TableCell>
              <TableCell>
                <Code>'col'</Code>
              </TableCell>
              <TableCell>Sets scope attribute.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Code>align</Code>
              </TableCell>
              <TableCell>
                <Code>'left' | 'center' | 'right'</Code>
              </TableCell>
              <TableCell>
                <Code>'left'</Code>
              </TableCell>
              <TableCell>Sets align attribute.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Section>
  </>
);

export default TableComponent;
