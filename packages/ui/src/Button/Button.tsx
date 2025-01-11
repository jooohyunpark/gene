import { forwardRef, ForwardedRef } from 'react';
import styled, { css } from 'styled-components';
import { color, space, typography } from '@gene/token';
import { ButtonProps, GeneButtonProps } from './Button.types';

const colors = {
  main: {
    primary: color.blue30,
    neutral: color.white,
  },
  secondary: {
    primary: color.white,
    neutral: color.blue40,
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

  ${({ $variant = 'primary', $type = 'fill' }) => {
    const mainColor = colors.main[$variant];
    const secondaryColor = colors.secondary[$variant];

    switch ($type) {
      case 'outline':
        return css`
          background: transparent;
          color: ${mainColor};
          border: 2px solid ${mainColor};

          /* @media (hover: hover) {
            &:hover {
              background: ${secondaryColor};
              color: ${color.white};
            }
          } */
        `;
      case 'empty':
        return css`
          background: transparent;
          color: ${mainColor};

          @media (hover: hover) {
            &:hover {
            }
          }
        `;
      default:
        return css`
          background: ${mainColor};
          color: ${secondaryColor};

          @media (hover: hover) {
            &:hover {
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
      variant = 'primary',
      type = 'fill',
      children,
      ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <GeneButton
        ref={ref}
        onClick={onClick}
        $variant={variant}
        $type={type}
        {...props}
      >
        {children}
      </GeneButton>
    );
  },
);
