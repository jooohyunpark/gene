import { Link } from '@jooohyunpark/gene-ui';
import { StyledFooter } from './styles';

const Footer = () => {
  return (
    <StyledFooter>
      <Link href="https://gene-ui.parkjoohyun.com">Storybook</Link>{' '}
      <span>/</span>{' '}
      <Link href="https://github.com/jooohyunpark/gene">Github</Link>
      <span>/</span>{' '}
      <Link href="https://dev.parkjoohyun.com">Joohyun Park</Link>
    </StyledFooter>
  );
};

export default Footer;
