import { forwardRef, ForwardedRef } from 'react';
import styled from 'styled-components';
import { color, spacing } from '@gene/tokens';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button`
  padding: ${spacing(1)}px ${spacing(3)}px;
  border: none;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;

  border-radius: ${spacing(0.5)}px;
  background: ${color.blue[30]};
  color: ${color.white};

  transition: background 0.2s ease-in-out;

  @media (hover: hover) {
    &:hover {
      background: ${color.blue[40]};
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
