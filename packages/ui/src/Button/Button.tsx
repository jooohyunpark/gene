import { forwardRef, ForwardedRef } from 'react';
import styled from 'styled-components';
import { color, spacing } from '@gene/tokens';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button`
  padding: ${spacing(1)}px ${spacing(3)}px;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  background: ${color.blue[60]};
  color: ${color.white};

  -webkit-user-select: none;
  user-select: none;

  @media (hover: hover) {
    &:hover {
      background: design-tokens.colors(blue-hover, 60);
    }
  }

  &:focus-visible {
    outline-color: ${color.gray[100]};
  }
`;

export const Button = forwardRef(
  (
    { onClick, children, ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <StyledButton ref={ref} onClick={onClick} {...props}>
        {children}
      </StyledButton>
    );
  },
);
