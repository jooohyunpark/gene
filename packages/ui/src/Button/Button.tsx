import { forwardRef, ForwardedRef } from 'react';
import styled from 'styled-components';
import { color, space, typography } from '@gene/token';
import { ButtonProps } from './Button.types';

const GeneButton = styled.button`
  padding: ${space(1)}px ${space(3)}px;
  border: none;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  background: ${color.blue30};
  color: ${color.white};
  ${typography.button01};

  transition: background 0.2s ease-in-out;

  @media (hover: hover) {
    &:hover {
      background: ${color.blue40};
    }
  }

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
      <GeneButton ref={ref} onClick={onClick} {...props}>
        {children}
      </GeneButton>
    );
  },
);
