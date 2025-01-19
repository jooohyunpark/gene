import { Table } from '@jooohyunpark/gene-ui';
import { space } from '@jooohyunpark/gene-token';
import Section from '@/components/Section';
import PreviewBlock from '@/components/PreviewBlock';
import Code from '@/components/Code';
import { StyledPreviewLayout } from './styles';

const NobelPrizeTable = ({
  color = 'primary',
  expressive = true,
  zebra = false,
  align = 'left',
}) => (
  <Table.Container>
    <Table color={color} expressive={expressive} zebra={zebra}>
      <caption style={{ marginBottom: space(1) }}>
        All Nobel Prizes 2024
      </caption>
      <Table.Head>
        <Table.Row>
          <Table.Cell align={align}>Category</Table.Cell>
          <Table.Cell align={align}>Winners</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell align={align}>Physics</Table.Cell>
          <Table.Cell align={align}>
            John J. Hopfield, Geoffrey Hinton
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell align={align}>Chemistry</Table.Cell>
          <Table.Cell align={align}>
            David Baker, Demis Hassabis, and John M. Jumper
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell align={align}>Physiology or Medicine</Table.Cell>
          <Table.Cell align={align}>Victor Ambros, Gary Ruvkun</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell align={align}>Literature</Table.Cell>
          <Table.Cell align={align}>Han Kang</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell align={align}>Peace</Table.Cell>
          <Table.Cell align={align}>Nihon Hidankyo</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell align={align}>Economic Sciences</Table.Cell>
          <Table.Cell align={align}>
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
  <Table expressive={false}>
    ...
  </Table>
</Table.Container>\n
<Table.Container>
  <Table color="neutral" expressive={false}>
    ...
  </Table>
</Table.Container>`}
      >
        <StyledPreviewLayout>
          <NobelPrizeTable color="primary" expressive={false} />
          <NobelPrizeTable color="neutral" expressive={false} />
        </StyledPreviewLayout>
      </PreviewBlock>
    </Section>

    <Section>
      <h2>Zebra</h2>

      <PreviewBlock
        code={`<Table.Container>
  <Table zebra={true} expressive={false}>
    ...
  </Table>
</Table.Container>`}
      >
        <StyledPreviewLayout>
          <NobelPrizeTable zebra expressive={false} />
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
  <Table zebra>
    ...
  </Table>
</Table.Container>`}
      >
        <StyledPreviewLayout>
          <NobelPrizeTable />
          <NobelPrizeTable zebra />
        </StyledPreviewLayout>
      </PreviewBlock>
    </Section>

    <Section>
      <h2>Align</h2>

      <PreviewBlock
        code={`<Table.Container>
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
</Table.Container>\n
<Table.Container>
  <Table>
    <Table.Head>
      <Table.Row>
        <Table.Cell align="center">...</Table.Cell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell align="center">...</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
</Table.Container>`}
      >
        <StyledPreviewLayout>
          <NobelPrizeTable />
          <NobelPrizeTable align="center" />
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
                <Code>zebra</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>true</Code>
              </Table.Cell>
              <Table.Cell>Sets the zebra pattern.</Table.Cell>
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
