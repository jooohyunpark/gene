import { color, typography, spacing } from '@gene/token';
import { Table } from '@gene/ui';
import Section from '@/components/Section';
import PreviewBlock from '@/components/PreviewBlock';
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

      <Section>
        <h2>Usage</h2>
        <PreviewBlock
          code={`// js\nimport { color, typography, spacing } from '@gene/token';\n\n// sass\n@use '@gene/token/scss' as token;`}
        />
      </Section>

      <Section id="design-token-color">
        <h2>Color</h2>
        <Table.Container>
          <Table>
            <Table.Head>
              <Table.Row>
                <StyledTableCell component="th" scope="col" align="left">
                  Token (standard)
                </StyledTableCell>
                <StyledTableCell component="th" scope="col" align="left">
                  Token (sass)
                </StyledTableCell>
                <StyledTableCell component="th" scope="col" align="left">
                  Value
                </StyledTableCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {Object.entries(color).map(([key, value], i) => (
                <Table.Row key={i}>
                  <StyledTableCell>
                    <Code>color.{key}</Code>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Code>${key}</Code>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Code>{value}</Code>
                  </StyledTableCell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Table.Container>
      </Section>

      <Section id="design-token-spacing">
        <h2>Spacing</h2>
        <Table.Container>
          <Table>
            <Table.Head>
              <Table.Row>
                <StyledTableCell component="th" scope="col" align="left">
                  Token (standard)
                </StyledTableCell>
                <StyledTableCell component="th" scope="col" align="left">
                  Token (sass)
                </StyledTableCell>
                <StyledTableCell component="th" scope="col" align="left">
                  Value
                </StyledTableCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {Object.entries(spacing).map(([key, value], i) => (
                <Table.Row key={i}>
                  <StyledTableCell>
                    <Code>spacing.{key}</Code>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Code>${key}</Code>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Code>{value}</Code>
                  </StyledTableCell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Table.Container>
      </Section>

      <Section id="design-token-typography">
        <h2>Typography</h2>
        <Table.Container>
          <Table>
            <Table.Head>
              <Table.Row>
                <StyledTableCell component="th" scope="col" align="left">
                  Token (standard)
                </StyledTableCell>
                <StyledTableCell component="th" scope="col" align="left">
                  Token (sass)
                </StyledTableCell>
                <StyledTableCell component="th" scope="col" align="left">
                  Value
                </StyledTableCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {Object.entries(typography).map(
                ([key, value], i) =>
                  typeof value !== 'object' && (
                    <Table.Row key={i}>
                      <StyledTableCell>
                        <Code>typography.{key}</Code>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Code>${key}</Code>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Code>{value}</Code>
                      </StyledTableCell>
                    </Table.Row>
                  ),
              )}
            </Table.Body>
          </Table>
        </Table.Container>
      </Section>
    </>
  );
};

export default DesignTokens;
