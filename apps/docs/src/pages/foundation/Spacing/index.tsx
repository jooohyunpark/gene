import { Table } from '@jooohyunpark/gene-ui';
import Section from '@/components/Section';
import { Box, StyledTableCell } from './styles';

const Spacing = () => {
  const spacingData = [
    { multiplier: 0.25, size: 2 },
    { multiplier: 0.5, size: 4 },
    { multiplier: 1, size: 8 },
    { multiplier: 1.5, size: 12 },
    { multiplier: 2, size: 16 },
    { multiplier: 3, size: 24 },
    { multiplier: 4, size: 32 },
    { multiplier: 5, size: 40 },
    { multiplier: 6, size: 48 },
    { multiplier: 8, size: 64 },
    { multiplier: 10, size: 80 },
    { multiplier: 15, size: 120 },
  ];

  return (
    <>
      <Section>
        <h1>Spacing</h1>
        <p>
          GDS provides space tokens and utilities to help deliver clear,
          functional layouts.
        </p>
      </Section>

      <Section>
        <h2>Spacing scale</h2>
        <p>
          The spacing scale complements the typography scale, using multiples of
          2, 4, and 8. It provides the precise increments necessary to establish
          balanced spatial relationships within design compositions. This scale
          is consistently applied across all GDS components.
        </p>

        <Table.Container>
          <Table>
            <Table.Head>
              <Table.Row>
                <StyledTableCell scope="col" align="center">
                  Base unit multiplier
                </StyledTableCell>
                <StyledTableCell scope="col" align="center">
                  Size (px)
                </StyledTableCell>
                <StyledTableCell scope="col" align="right">
                  Example
                </StyledTableCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {spacingData.map((data, i) => (
                <Table.Row key={i}>
                  <StyledTableCell align="center">
                    {data.multiplier}
                  </StyledTableCell>
                  <StyledTableCell align="center">{data.size}</StyledTableCell>
                  <StyledTableCell align="right" style={{ lineHeight: 0 }}>
                    <Box $size={data.size} />
                  </StyledTableCell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Table.Container>
      </Section>
    </>
  );
};

export default Spacing;
