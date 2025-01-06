import { forwardRef, ForwardedRef } from 'react';
import styled from 'styled-components';
import { color, space, typography } from '@gene/tokens';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button`
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
    outline-color: ${color.gray100};
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
