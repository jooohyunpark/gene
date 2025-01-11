import { forwardRef, ForwardedRef } from 'react';
import styled, { css } from 'styled-components';
import { color } from '@gene/token';
import { LinkProps, GeneLinkProps } from './Link.types';

const colors = {
  primary: color.blue30,
  neutral: color.gray100,
};

const GeneLink = styled.a<GeneLinkProps>`
  position: relative;
  text-decoration: none;
  color: ${({ $variant = 'neutral' }) => colors[$variant]};

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: currentColor;

    ${({ $underline }) =>
      $underline
        ? css``
        : css`
            transform: scaleX(0);
            transition: transform 0.25s ease-out;
            transform-origin: bottom right;
          `}
  }

  ${({ $expressive, $underline }) =>
    $expressive &&
    css`
      @media (hover: hover) {
        &:hover {
          &::after {
            /* animatel underline linearly */
            ${$underline &&
            css`
              animation: 0.25s ease-out slide-in;
              transform-origin: bottom left;

              @keyframes slide-in {
                0% {
                  transform: scaleX(0);
                }
                100% {
                  transform: scaleX(1);
                }
              }
            `}

            /* transition underline */
            ${!$underline &&
            css`
              transform: scaleX(1);
              transform-origin: bottom left;
            `}
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
      variant = 'neutral',
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
        $variant={variant}
        $underline={underline}
        $expressive={expressive}
        {...props}
      >
        {children}
      </GeneLink>
    );
  },
);
