import { color } from '@jooohyunpark/gene-token';
import Section from '@/components/Section';
import { Box, BoxRow, Break } from './styles';

const Color = () => (
  <>
    <Section>
      <h1>Color</h1>
      <p>
        Color highlights key content and provides a consistent experience. The
        Gene Design System purposefully uses a minimal color palette to direct
        attention to the content and media.
      </p>
    </Section>

    <Section>
      <h2>Primary</h2>
      <p>
        Blue is the primary color across experiences. It evokes focus,
        inspiration, and curiosity. When combined with the simplicity of black
        and white, it creates a distinctive asthetic.
      </p>
      <BoxRow>
        <Box $background={color.blue10} $color={color.gray100}>
          10
        </Box>
        <Box $background={color.blue20} $color={color.gray100}>
          20
        </Box>
        <Box $background={color.blue30} $color={color.white}>
          30
        </Box>
        <Box $background={color.blue40} $color={color.white}>
          40
        </Box>
      </BoxRow>
    </Section>

    <Section>
      <h2>Neutral</h2>
      <p>
        Neutral gray color families give each design the opportunity for nuance
        and meaningful moments.
      </p>

      <BoxRow>
        <Box $background={color.gray10} $color={color.gray100}>
          10
        </Box>
        <Box $background={color.gray20} $color={color.gray100}>
          20
        </Box>
        <Box $background={color.gray30} $color={color.gray100}>
          30
        </Box>
        <Box $background={color.gray40} $color={color.gray100}>
          40
        </Box>
        <Box $background={color.gray50} $color={color.gray100}>
          50
        </Box>
        <Break />
        <Box $background={color.gray60} $color={color.white}>
          60
        </Box>
        <Box $background={color.gray70} $color={color.white}>
          70
        </Box>
        <Box $background={color.gray80} $color={color.white}>
          80
        </Box>
        <Box $background={color.gray90} $color={color.white}>
          90
        </Box>
        <Box $background={color.gray100} $color={color.white}>
          100
        </Box>
      </BoxRow>
    </Section>

    <Section>
      <h2>Base</h2>
      <p>
        Solid white and black colors for foundational purposes, like background
        elements.
      </p>

      <BoxRow>
        <Box $background={color.white} $border={color.gray30}></Box>
        <Box $background={color.black}></Box>
      </BoxRow>
    </Section>
  </>
);

export default Color;
