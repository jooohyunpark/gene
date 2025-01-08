import styled, { css } from 'styled-components';
import { Link } from 'react-router';
import { navWidth, textColor, padding, SetPadding } from '@/styles/js';
import { color, space, typography } from '@gene/token';

export const StyledNav = styled.nav`
  width: ${navWidth}px;
  height: 100%;
  overflow-y: scroll;

  ${SetPadding({ x: true, y: true })}

  && {
    padding-left: ${padding.x.sm}px;
    padding-right: ${padding.x.sm}px;
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
  position: relative;
  display: block;
  text-decoration: none;
  color: ${textColor};
  padding: ${space(1)}px ${space(2)}px;
  transition: background 0.2s;
  ${typography.body02};

  @media (hover: hover) {
    &:hover {
      background: ${color.gray10};
    }
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      font-weight: 700;
      background: ${color.gray10};

      &::before {
        content: '';
        display: block;
        width: ${space(0.5)}px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: ${color.blue30};
      }
    `}
`;

export const StyledUl = styled.ul`
  list-style: none;
`;

export const StyledLi = styled.li``;
