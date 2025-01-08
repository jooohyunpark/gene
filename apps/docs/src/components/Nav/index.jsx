import { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { useLocation } from 'react-router';

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

const CustomLink = ({ to, children }) => {
  const location = useLocation();

  const isActive = location.pathname === to;

  console.log(to, isActive);

  return (
    <StyledLink to={to} $isActive={isActive}>
      {children}
    </StyledLink>
  );
};

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
          <CustomLink to="/" onClick={close}>
            Gene Design System
          </CustomLink>

          <StyledLabel>Foundation</StyledLabel>

          <StyledUl>
            <StyledLi>
              <CustomLink to="/foundation/color" onClick={close}>
                Color
              </CustomLink>
            </StyledLi>
            <StyledLi>
              <CustomLink to="/foundation/typography" onClick={close}>
                Typography
              </CustomLink>
            </StyledLi>
            <StyledLi>
              <CustomLink to="/foundation/spacing" onClick={close}>
                Spacing
              </CustomLink>
            </StyledLi>
            <StyledLi>
              <CustomLink to="/foundation/design-tokens" onClick={close}>
                Design Tokens
              </CustomLink>
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
