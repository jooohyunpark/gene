import { color, typography, space } from '@gene/token';
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Link,
  Button,
} from '@gene/ui';
import Section from '@/components/Section';

const DesignTokens = () => (
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
      <div>
        {Object.entries(color).map(([key, value], i) => (
          <div key={i}>
            color.{key} {value}
          </div>
        ))}
      </div>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Token</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>

      <Link></Link>

      <Button onClick={() => console.log('ddd')}>ddddd</Button>
    </Section>
  </>
);

export default DesignTokens;
