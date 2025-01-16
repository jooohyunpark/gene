import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';

import useMediaAbove from '@/hooks/useMediaAbove';
import Header from '@/components/Header';
import { borderColor } from '@/styles/js/vars';
import {
  StyledNav,
  StyledLink,
  StyledLi,
  StyledUl,
  StyledLabel,
  Button,
} from './styles';

const CustomLink = ({ to, children, ...props }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <StyledLink to={to} $isActive={isActive} {...props}>
      {children}
    </StyledLink>
  );
};

const Nav = () => {
  const navData = {
    foundation: [
      { text: 'Color', to: '/foundation/color' },
      { text: 'Design Tokens', to: '/foundation/design-tokens' },
      { text: 'Spacing', to: '/foundation/spacing' },
      { text: 'Typography', to: '/foundation/typography' },
    ],
    components: [
      { text: 'Button', to: '/components/button' },
      { text: 'Link', to: '/components/link' },
      { text: 'Card', to: '/components/card' },
      { text: 'Tag', to: '/components/tag' },
    ],
  };

  const isDesktop = useMediaAbove('md');
  const [open, setOpen] = useState(false);

  const sortAlphabetically = (array) => {
    return array.sort((a, b) => {
      if (a.text < b.text) return -1;
      if (a.text > b.text) return 1;
      return 0;
    });
  };

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
          <Button aria-label="Open menu" onClick={toggle}>
            <MenuIcon />
          </Button>
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
            {sortAlphabetically(navData.foundation).map((d, i) => (
              <StyledLi key={`foundation-${i}`}>
                <CustomLink to={d.to} onClick={close}>
                  {d.text}
                </CustomLink>
              </StyledLi>
            ))}
          </StyledUl>

          <StyledLabel>Components</StyledLabel>
          <StyledUl>
            <StyledUl>
              {sortAlphabetically(navData.components).map((d, i) => (
                <StyledLi key={`components-${i}`}>
                  <CustomLink to={d.to} onClick={close}>
                    {d.text}
                  </CustomLink>
                </StyledLi>
              ))}
            </StyledUl>
          </StyledUl>
        </StyledNav>
      </Drawer>
    </>
  );
};

export default Nav;
