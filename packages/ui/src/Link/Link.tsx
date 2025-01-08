import { forwardRef, ForwardedRef } from 'react';
import styled from 'styled-components';
import { color } from '@gene/token';
import { LinkProps, GeneLinkProps } from './Link.types';

const GeneLink = styled.a<GeneLinkProps>`
  text-decoration: ${({ $underline }) => ($underline ? 'underline' : 'none')};
  color: ${({ $color }) => ($color ? color.blue30 : color.black)};

  transition: color 0.2s ease-in-out;

  @media (hover: hover) {
    &:hover {
      color: ${color.blue30};
    }
  }

  &:focus {
    outline-color: ${color.blue30};
  }
`;

export const Link = forwardRef(
  (
    {
      href = '',
      color = false,
      underline = true,
      children,
      ...props
    }: LinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    return (
      <GeneLink
        ref={ref}
        href={href}
        $color={color}
        $underline={underline}
        {...props}
      >
        {children}
      </GeneLink>
    );
  },
);
