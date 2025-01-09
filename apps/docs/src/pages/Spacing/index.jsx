import Section from '@/components/Section';
import { Th } from '@/components/Table';
import { Box, CustomTable, StyledTd } from './styles';

const Spacing = () => {
  const spacingData = [
    { multiplier: 0.25, size: 2 },
    { multiplier: 0.55, size: 4 },
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
        <p>ddd</p>
      </Section>

      <Section>
        <h2>Primary</h2>

        <CustomTable>
          <thead>
            <tr>
              <Th scope="col">Base unit multiplier</Th>
              <Th scope="col">Size (px)</Th>
              <Th scope="col" align="right" style={{ minWidth: 200 }}>
                Example
              </Th>
            </tr>
          </thead>
          <tbody>
            {spacingData.map((data, i) => (
              <tr key={i}>
                <StyledTd align="center">{data.multiplier}</StyledTd>
                <StyledTd align="center">{data.size}</StyledTd>
                <StyledTd align="right">
                  <Box $size={data.size} />
                </StyledTd>
              </tr>
            ))}
          </tbody>
        </CustomTable>
      </Section>
    </>
  );
};

export default Spacing;
