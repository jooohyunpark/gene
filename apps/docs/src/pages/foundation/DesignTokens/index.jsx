import { color, typography, spacing } from '@gene/token';
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
  return (
    <>
      <Section>
        <h1>Design Tokens</h1>
        <p>
          Design tokens are design decisions, translated into data. GDS provides
          primitive design tokens to ensure a cohesive experience.
        </p>
      </Section>

      <Section id="design-token-color">
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
                    <Code>${key}</Code>
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

      <Section id="design-token-spacing">
        <h2>Spacing</h2>
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
              {Object.entries(spacing).map(([key, value], i) => (
                <TableRow key={i}>
                  <StyledTableCell>
                    <Code>spacing.{key}</Code>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Code>${key}</Code>
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

      <Section id="design-token-typography">
        <h2>Typography</h2>
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
              {Object.entries(typography).map(
                ([key, value], i) =>
                  typeof value !== 'object' && (
                    <TableRow key={i}>
                      <StyledTableCell>
                        <Code>typography.{key}</Code>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Code>${key}</Code>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Code>{value}</Code>
                      </StyledTableCell>
                    </TableRow>
                  ),
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Section>
    </>
  );
};

export default DesignTokens;
