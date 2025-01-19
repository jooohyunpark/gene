import { forwardRef, ForwardedRef, useId } from 'react';
import styled, { css } from 'styled-components';
import { color, space, typography } from '@jooohyunpark/gene-token';
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
  ${typography.body03};
  padding: ${space(0.5)}px ${space(1)}px;
  background: ${color.white};
  border: 1px solid ${color.gray30};

  &:focus-visible {
    outline-color: ${color.blue30};
  }
`;

export const Input = forwardRef(
  (
    { label, required = false, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const id = useId();

    return (
      <GeneInputLayout>
        {label && (
          <GeneInputLabel htmlFor={id}>
            {label} {required && <span aria-label="required">*</span>}
          </GeneInputLabel>
        )}

        <GeneInput ref={ref} id={id} required={required} {...props} />
      </GeneInputLayout>
    );
  },
);
