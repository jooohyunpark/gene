import { Link } from '@gene/ui';
import { StyledFooter } from './styles';

const Footer = () => {
  return (
    <StyledFooter>
      <Link href="">Gene UI Storybook</Link> <span>/</span>{' '}
      <Link href="https://dev.parkjoohyun.com">Joohyun Park</Link>
    </StyledFooter>
  );
};

export default Footer;
