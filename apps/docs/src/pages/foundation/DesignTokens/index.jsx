import { color, typography, space } from '@gene/token';
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
} from '@gene/ui';
import Section from '@/components/Section';
import Code from '@/components/Code';
import { StyledTableCell } from './styles';

const DesignTokens = () => {
  const capitalizeFirstLetter = (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <>
      <Section>
        <h1>Design Tokens</h1>
        <p>
          Design tokens are design decisions, translated into data. GDS provides
          primitive design tokens to ensure a cohesive experience.
        </p>
      </Section>

      <Section>
        <h2>Color</h2>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell component="th" scope="col" align="left">
                  Token (standard)
                </StyledTableCell>
                <StyledTableCell component="th" scope="col" align="left">
                  Token (sass)
                </StyledTableCell>
                <StyledTableCell component="th" scope="col" align="left">
                  Value
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(color).map(([key, value], i) => (
                <TableRow key={i}>
                  <StyledTableCell>
                    <Code>color.{key}</Code>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Code>$color{capitalizeFirstLetter(key)}</Code>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Code>{value}</Code>
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Section>
    </>
  );
};

export default DesignTokens;
