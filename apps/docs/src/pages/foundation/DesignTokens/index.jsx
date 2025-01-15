import { color, typography, space } from '@gene/token';
import Section from '@/components/Section';

console.log(color);

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
    </Section>
  </>
);

export default DesignTokens;
