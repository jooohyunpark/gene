import { Link } from 'react-router';
import { StyledNav } from './styles';

const Nav = () => {
  return (
    <StyledNav>
      <Link to="/">Introduction</Link>

      <div>Foundation</div>
      <ul>
        <li>
          <Link to="/colors">Colors</Link>
        </li>
        <li>
          <Link to="/typography">Typography</Link>
        </li>
        <li>
          <Link to="/spacing">Spacing</Link>
        </li>
      </ul>

      <div>Components</div>
      <ul>
        <li>
          <Link to="/colors">Colors</Link>
        </li>
        <li>
          <Link to="/typography">Typography</Link>
        </li>
        <li>
          <Link to="/spacing">Spacing</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
