import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Drawer from '@mui/material/Drawer';

import useMediaAbove from '@/hooks/useMediaAbove';
import Header from '@/components/Header';
import { StyledNav } from './styles';

const Nav = () => {
  const isDesktop = useMediaAbove('md');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    close();
  }, [isDesktop]);

  const toggle = () => {
    setOpen(!open);
  };

  const close = () => {
    setOpen(false);
  };

  return (
    <>
      {!isDesktop && (
        <Header>
          <button onClick={toggle}>Open drawer</button>
        </Header>
      )}

      <Drawer
        open={open}
        onClose={close}
        elevation={0}
        variant={isDesktop ? 'permanent' : 'temporary'}
      >
        <StyledNav>
          <Link to="/" onClick={close}>
            Gene Design System
          </Link>

          <div>Foundation</div>
          <ul>
            <li>
              <Link to="/foundation/color" onClick={close}>
                Color
              </Link>
            </li>
            <li>
              <Link to="/foundation/typography" onClick={close}>
                Typography
              </Link>
            </li>
            <li>
              <Link to="/foundation/spacing" onClick={close}>
                Spacing
              </Link>
            </li>
            <li>
              <Link to="/foundation/design-tokens" onClick={close}>
                Design Tokens
              </Link>
            </li>
          </ul>

          <div>Components</div>
          <ul>
            <li>d </li>
            <li>d</li>
            <li>1123 </li>
          </ul>
        </StyledNav>
      </Drawer>
    </>
  );
};

export default Nav;
