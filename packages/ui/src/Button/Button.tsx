import { forwardRef, ForwardedRef } from 'react';
import styled, { css } from 'styled-components';
import { color, space, typography } from '@gene/token';
import { ButtonProps, GeneButtonProps } from './Button.types';

const colors = {
  primary: {
    fill: {
      background: color.blue30,
      text: color.white,
      hover: color.blue40,
    },
    outline: {
      background: color.blue30,
      text: color.blue30,
      hover: `${color.blue20}33`,
    },
    subtle: {
      background: 'transparent',
      text: color.blue30,
      hover: `${color.blue20}33`,
    },
  },
  base: {
    fill: {
      background: color.white,
      text: color.gray100,
      hover: color.gray10,
    },
    outline: {
      background: color.white,
      text: color.white,
      hover: `${color.gray10}33`,
    },
    subtle: {
      background: 'transparent',
      text: color.white,
      hover: `${color.gray10}33`,
    },
  },
};

const GeneButton = styled.button<GeneButtonProps>`
  padding: ${space(1)}px ${space(3)}px;
  border: none;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  ${typography.button01};

  border-radius: ${space(0.5)}px;
  transition: background 0.2s ease-in-out;

  ${({ $color = 'primary', $variant = 'fill' }) => {
    const backgroundColor = colors[$color][$variant].background;
    const textColor = colors[$color][$variant].text;
    const hoverColor = colors[$color][$variant].hover;

    switch ($variant) {
      case 'outline':
        return css`
          background: transparent;
          color: ${backgroundColor};
          border: 2px solid ${backgroundColor};

          @media (hover: hover) {
            &:hover {
              background: ${hoverColor};
            }
          }
        `;
      case 'subtle':
        return css`
          background: transparent;
          color: ${textColor};

          @media (hover: hover) {
            &:hover {
              background: ${hoverColor};
            }
          }
        `;
      default:
        return css`
          background: ${backgroundColor};
          color: ${textColor};

          @media (hover: hover) {
            &:hover {
              background: ${hoverColor};
            }
          }
        `;
    }
  }};

  &:focus-visible {
    outline: 2px ${color.white} solid;
    outline-offset: 0;
    box-shadow: 0 0 0 4px ${color.blue30};
  }
`;

export const Button = forwardRef(
  (
    {
      onClick,
      color = 'primary',
      variant = 'fill',
      children,
      ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <GeneButton
        ref={ref}
        onClick={onClick}
        $color={color}
        $variant={variant}
        {...props}
      >
        {children}
      </GeneButton>
    );
  },
);
