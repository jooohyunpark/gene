import { forwardRef, ForwardedRef } from 'react';
import styled, { css } from 'styled-components';
import { color } from '@jooohyunpark/gene-token';
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

      background: linear-gradient(to right, ${color.blue30}, ${color.blue30})
        no-repeat right;
      background-size: 0% auto;
      transition:
        background-size 0.3s ease-out,
        color 0.3s;

      @media (hover: hover) {
        &:hover {
          color: ${color.white};
          background-size: 100% auto;
          background-position: left;
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
