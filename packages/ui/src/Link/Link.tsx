import { forwardRef, ForwardedRef } from 'react';
import styled from 'styled-components';
import { color } from '@gene/tokens';
import { LinkProps } from './Link.types';

const StyledLink = styled.a`
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &.underline {
    text-decoration: underline;
  }

  @media (hover: hover) {
    &:hover {
      color: ${color.blue[60]};
    }
  }

  &:focus {
    outline-color: ${color.blue[60]};
  }
`;

export const Link = forwardRef(
  (
    { href = '', underline = true, children, ...props }: LinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    return (
      <StyledLink ref={ref} href={href} {...props}>
        {children}
      </StyledLink>
    );
  },
);
