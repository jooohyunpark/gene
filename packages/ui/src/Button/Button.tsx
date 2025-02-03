import { forwardRef, ForwardedRef } from 'react';
import styled, { css } from 'styled-components';
import { color, space, typography } from '@jooohyunpark/gene-token';
import type { ButtonProps, GeneButtonProps } from './Button.types';

const colors = {
  primary: {
    fill: {
      background: color.blue30,
      text: color.white,
      hover: color.blue40,
      shahdow: color.blue40,
    },
    outline: {
      background: color.blue30,
      text: color.blue30,
      hover: `${color.blue20}40`, // 25% opacity
      shahdow: color.blue40,
    },
    subtle: {
      background: 'transparent',
      text: color.blue30,
      hover: `${color.blue20}40`,
      shahdow: color.blue40,
    },
  },
  base: {
    fill: {
      background: color.white,
      text: color.gray100,
      hover: color.gray10,
      shahdow: color.gray30,
    },
    outline: {
      background: color.white,
      text: color.white,
      hover: `${color.gray20}40`,
      shahdow: color.gray30,
    },
    subtle: {
      background: 'transparent',
      text: color.white,
      hover: `${color.gray20}40`,
      shahdow: color.gray30,
    },
  },
};

const shadowSize = space(0.5);

const GeneButton = styled.button<GeneButtonProps>`
  padding: ${space(1)}px ${space(3)}px;
  border: none;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  ${typography.button01};
  border-radius: ${space(0.5)}px;
  transition:
    background 0.25s ease-in-out,
    box-shadow 0.25s ease-in-out;

  ${({ $color = 'primary', $variant = 'fill', $expressive = true }) => {
    const backgroundColor = colors[$color][$variant].background;
    const textColor = colors[$color][$variant].text;
    const hoverColor = colors[$color][$variant].hover;
    const shadowColor = colors[$color][$variant].shahdow;

    switch ($variant) {
      case 'outline':
        return css`
          background: transparent;
          color: ${backgroundColor};
          border: 2px solid ${backgroundColor};

          &:not(:disabled) {
            @media (hover: hover) {
              &:hover {
                background: ${hoverColor};

                ${$expressive &&
                css`
                  box-shadow: ${shadowSize}px ${shadowSize}px ${shadowColor};
                `}
              }
            }
          }

          &:disabled {
            color: ${color.gray30};
            border: 2px solid ${color.gray30};
          }
        `;
      case 'subtle':
        return css`
          background: transparent;
          color: ${textColor};

          &:not(:disabled) {
            @media (hover: hover) {
              &:hover {
                background: ${hoverColor};

                ${$expressive &&
                css`
                  box-shadow: ${shadowSize}px ${shadowSize}px ${shadowColor};
                `}
              }
            }
          }

          &:disabled {
            color: ${color.gray30};
          }
        `;
      default:
        return css`
          background: ${backgroundColor};
          color: ${textColor};

          &:not(:disabled) {
            @media (hover: hover) {
              &:hover {
                ${$expressive
                  ? css`
                      box-shadow: ${shadowSize}px ${shadowSize}px ${shadowColor};
                    `
                  : css`
                      background: ${hoverColor};
                    `}
              }
            }
          }

          &:disabled {
            background: ${color.gray30};
            color: ${color.white};
          }
        `;
    }
  }};

  &:focus-visible {
    outline: 2px ${color.white} solid;
    outline-offset: 0;
    box-shadow: 0 0 0 4px ${color.blue30};
  }

  &:disabled {
    cursor: auto;
    opacity: 0.75;
  }
`;

export const Button = forwardRef(
  (
    {
      color = 'primary',
      variant = 'fill',
      expressive = true,
      href,
      children,
      ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <GeneButton
        as={href ? 'a' : 'button'}
        href={href}
        ref={ref}
        $color={color}
        $variant={variant}
        $expressive={expressive}
        {...props}
      >
        {children}
      </GeneButton>
    );
  },
);
