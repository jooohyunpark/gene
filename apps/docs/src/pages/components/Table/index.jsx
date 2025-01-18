import { Table } from '@gene/ui';
import { space } from '@gene/token';
import Section from '@/components/Section';
import PreviewBlock from '@/components/PreviewBlock';
import Code from '@/components/Code';
import { StyledPreviewLayout } from './styles';

const NobelPrizeTable = ({ color = 'primary', expressive = true }) => (
  <Table.Container>
    <Table color={color} expressive={expressive}>
      <caption style={{ marginBottom: space(1) }}>
        All Nobel Prizes 2024
      </caption>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Category</Table.Cell>
          <Table.Cell>Winners</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Physics</Table.Cell>
          <Table.Cell>John J. Hopfield, Geoffrey Hinton</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Chemistry</Table.Cell>
          <Table.Cell>
            David Baker, Demis Hassabis, and John M. Jumper
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Physiology or Medicine</Table.Cell>
          <Table.Cell>Victor Ambros, Gary Ruvkun</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Literature</Table.Cell>
          <Table.Cell>Han Kang</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Peace</Table.Cell>
          <Table.Cell>Nihon Hidankyo</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Economic Sciences</Table.Cell>
          <Table.Cell>
            Daron Acemoglu, Simon Johnson, and James A. Robinson
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Table.Container>
);

const TableComponent = () => (
  <>
    <Section>
      <h1>Table</h1>
      <p>Tables display sets of data. They can be fully customized.</p>
    </Section>

    <Section>
      <h2>Color</h2>

      <PreviewBlock
        code={`<Table.Container>
  <Table>
    ...
  </Table>
</Table.Container>\n
<Table.Container>
  <Table color="neutral">
    ...
  </Table>
</Table.Container>`}
      >
        <StyledPreviewLayout>
          <NobelPrizeTable color="primary" />
          <NobelPrizeTable color="neutral" />
        </StyledPreviewLayout>
      </PreviewBlock>
    </Section>

    <Section>
      <h2>Expressive</h2>

      <PreviewBlock
        code={`<Table.Container>
  <Table>
    ...
  </Table>
</Table.Container>\n
<Table.Container>
  <Table expressive={false}>
    ...
  </Table>
</Table.Container>`}
      >
        <StyledPreviewLayout>
          <NobelPrizeTable />
          <NobelPrizeTable expressive={false} />
        </StyledPreviewLayout>
      </PreviewBlock>
    </Section>

    <Section>
      <h2>Zebra</h2>

      <PreviewBlock
        code={`<Table.Container>
  <Table expressive={false}>
    <Table.Head>
      <Table.Row>
        <Table.Cell>...</Table.Cell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell>...</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
</Table.Container>\n
<Table.Container>
  <Table>
    <Table.Head>
      <Table.Row>
        <Table.Cell>...</Table.Cell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell>...</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
</Table.Container>`}
      >
        <StyledPreviewLayout>
          <NobelPrizeTable />
          <NobelPrizeTable expressive={false} />
        </StyledPreviewLayout>
      </PreviewBlock>
    </Section>

    <Section>
      <h2>Props</h2>

      <h3>Table</h3>

      <Table.Container style={{ width: '100%' }}>
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
                <Code>'primary' | 'neutral'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'primary'</Code>
              </Table.Cell>
              <Table.Cell>The color of the table head.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Code>borderBottom</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>true</Code>
              </Table.Cell>
              <Table.Cell>Adds the border at the table row.</Table.Cell>
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
              <Table.Cell>Sets the hover shade.</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Table.Container>

      <h3>Table.Cell</h3>

      <Table.Container style={{ width: '100%' }}>
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
                <Code>component</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'th' | 'td'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'td'</Code>
              </Table.Cell>
              <Table.Cell>
                The component used for the node.
                <br />
                Forced to <Code>'th'</Code> when inside table head.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Code>scope</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'row' | 'rowgroup' | 'col' | 'colgroup'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'col'</Code>
              </Table.Cell>
              <Table.Cell>
                Sets scope attribute.
                <br />
                Ignored when the component is <Code>'td'</Code>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Code>align</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'left' | 'center' | 'right'</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>'left'</Code>
              </Table.Cell>
              <Table.Cell>Sets align attribute.</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Table.Container>
    </Section>
  </>
);

export default TableComponent;
