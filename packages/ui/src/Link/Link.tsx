import { forwardRef, ForwardedRef } from 'react';
import styled, { css } from 'styled-components';
import { color } from '@gene/token';
import { LinkProps, GeneLinkProps } from './Link.types';

const colors = {
  primary: color.blue30,
  inherit: 'inherit',
};

const GeneLink = styled.a<GeneLinkProps>`
  position: relative;
  display: inline-block;
  text-decoration: ${({ $underline }) => ($underline ? 'underline' : 'none')};
  color: ${({ $color = 'inherit' }) => colors[$color]};
  z-index: 0;

  ${({ $expressive }) =>
    $expressive &&
    css`
      transition: color 0.2s ease-out;

      &::before {
        content: '';
        position: absolute;
        left: -0.15em;
        top: 0;
        width: 100%;
        height: 100%;
        padding: 0 0.15em;
        background: ${color.blue30};
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
        z-index: -1;
      }

      @media (hover: hover) {
        &:hover {
          color: ${color.white};

          &::before {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
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
