import { Link } from '@gene/ui';
import { StyledFooter } from './styles';

const Footer = () => {
  return (
    <StyledFooter>
      <Link href="https://gene-ui.parkjoohyun.com">Gene UI Storybook</Link>{' '}
      <span>/</span>{' '}
      <Link href="https://dev.parkjoohyun.com">Joohyun Park</Link>
    </StyledFooter>
  );
};

export default Footer;
