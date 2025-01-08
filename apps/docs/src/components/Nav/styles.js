import styled from 'styled-components';
import { Link } from 'react-router';
import { navWidth, ContentPadding, MediaAbove } from '@/styles/js';
import { color, space, typography } from '@gene/token';
import { borderColor } from '@/styles/js/vars';

export const StyledNav = styled.nav`
  width: ${navWidth}px;
  height: 100%;
  overflow-y: scroll;

  ${ContentPadding()};

  ${MediaAbove('md')} {
  }
`;

export const StyledItem = styled.div`
  padding: ${space(1)}px ${space(2)}px;
`;

export const StyledLabel = styled.div`
  padding: ${space(1)}px ${space(2)}px;
  ${typography.label01};
`;

export const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
  padding: ${space(1)}px ${space(2)}px;
  transition: background 0.2s;

  @media (hover: hover) {
    &:hover {
      background: ${color.gray20};
    }
  }
`;

export const StyledUl = styled.ul`
  list-style: none;
`;

export const StyledLi = styled.li``;
