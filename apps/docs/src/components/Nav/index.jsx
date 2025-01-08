import { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';

import useMediaAbove from '@/hooks/useMediaAbove';
import Header from '@/components/Header';
import { borderColor } from '@/styles/js/vars';
import {
  StyledNav,
  StyledLink,
  StyledLi,
  StyledUl,
  StyledLabel,
} from './styles';

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
        sx={{
          '& .MuiDrawer-paper': {
            borderRightColor: borderColor,
          },
        }}
      >
        <StyledNav>
          <StyledLink to="/" onClick={close}>
            Gene Design System
          </StyledLink>

          <StyledLabel>Foundation</StyledLabel>

          <StyledUl>
            <StyledLi>
              <StyledLink to="/foundation/color" onClick={close}>
                Color
              </StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/foundation/typography" onClick={close}>
                Typography
              </StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/foundation/spacing" onClick={close}>
                Spacing
              </StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/foundation/design-tokens" onClick={close}>
                Design Tokens
              </StyledLink>
            </StyledLi>
          </StyledUl>

          <StyledLabel>Components</StyledLabel>
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
