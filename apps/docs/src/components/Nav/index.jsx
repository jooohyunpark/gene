import { Link } from 'react-router';
import { StyledNav } from './styles';

const Nav = () => {
  return (
    <StyledNav>
      <Link to="/">About GDS</Link>

      <div>Foundation</div>
      <ul>
        <li>
          <Link to="/foundation/color">Color</Link>
        </li>
        <li>
          <Link to="/foundation/typography">Typography</Link>
        </li>
        <li>
          <Link to="/foundation/spacing">Spacing</Link>
        </li>
      </ul>

      <div>Components</div>
      <ul>
        <li>d </li>
        <li>d</li>
        <li>1123 </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
