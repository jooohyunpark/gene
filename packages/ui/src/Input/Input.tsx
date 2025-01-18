import { forwardRef, ForwardedRef, useId } from 'react';
import styled, { css } from 'styled-components';
import { color, space, typography } from '@gene/token';
import type { InputProps, GeneInputProps } from './Input.types';

const GeneInputLayout = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${space(0.25)}px;
`;

const GeneInputLabel = styled.label`
  ${typography.body03};
`;

const GeneInput = styled.input<GeneInputProps>`
  &:focus-visible {
    /* inner indicator */
    outline: 2px ${color.white} solid;
    outline-offset: 0;

    /* outer indicator */
    box-shadow: 0 0 0 4px ${color.blue30};
  }
`;

export const Input = forwardRef(
  (
    { label, children, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const id = useId();

    return (
      <GeneInputLayout>
        {label && <GeneInputLabel htmlFor={id}>{label}</GeneInputLabel>}

        <GeneInput ref={ref} id={id} {...props}>
          {children}
        </GeneInput>
      </GeneInputLayout>
    );
  },
);
