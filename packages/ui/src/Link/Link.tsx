import { forwardRef, ForwardedRef } from 'react';
import styled, { css } from 'styled-components';
import { color } from '@gene/token';
import type { LinkProps, GeneLinkProps } from './Link.types';

const colors = {
  primary: color.blue30,
  inherit: 'inherit',
};

const GeneLink = styled.a<GeneLinkProps>`
  text-decoration: ${({ $underline }) => ($underline ? 'underline' : 'none')};
  color: ${({ $color = 'inherit' }) => colors[$color]};

  ${({ $expressive }) =>
    $expressive &&
    css`
      padding: 0 0.15em;
      margin: 0 -0.15em;

      transition:
        background 0.25s ease-out,
        color 0.25s ease-out;

      @media (hover: hover) {
        &:hover {
          background: ${color.blue30};
          color: ${color.white};
        }
      }
    `}

  ${({ $expressive, $underline }) =>
    !$expressive &&
    !$underline &&
    css`
      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }
    `}

    

  &:focus-visible {
    /* inner indicator */
    outline: 2px ${color.white} solid;
    outline-offset: 0;

    /* outer indicator */
    box-shadow: 0 0 0 4px ${color.blue30};
  }
`;

export const Link = forwardRef(
  (
    {
      href = '',
      color = 'inherit',
      expressive = true,
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
        $expressive={expressive}
        {...props}
      >
        {children}
      </GeneLink>
    );
  },
);
