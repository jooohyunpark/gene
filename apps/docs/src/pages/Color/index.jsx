import { color } from '@gene/token';
import { Box, BoxRow } from './styles';

const Color = () => (
  <>
    <h1>Color</h1>
    <p>
      Color highlights key content and provides a consistent experience. The
      Gene Design System intentionally uses minimal colors to direct attention
      to the content and media.
    </p>

    <h2>Primary</h2>
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
  </>
);

export default Color;
