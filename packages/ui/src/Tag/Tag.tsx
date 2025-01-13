import { forwardRef, ForwardedRef } from 'react';
import styled, { css } from 'styled-components';
import { color, space, typography } from '@gene/token';
import { TagProps, GeneTagProps } from './Tag.types';

const colors = {
  primary: color.blue30,
  neutral: color.gray10,
};

const GeneTag = styled.div<GeneTagProps>`
  display: inline-block;
  padding: ${space(1)}px ${space(2)}px;
  border: none;
  border-radius: ${space(2)}px;
  background: ${color.blue10};
  ${typography.body02};

  background: ${({ $color = 'neutral' }) => colors[$color]};

  ${({ as }) =>
    (as === 'a' || as === 'button') &&
    css`
      cursor: pointer;
    `};
`;

export const Tag = forwardRef(
  (
    { href, color = 'neutral', onClick, children, ...props }: TagProps,
    ref: ForwardedRef<HTMLDivElement | HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    return (
      <GeneTag
        ref={
          ref as ForwardedRef<
            HTMLDivElement & HTMLAnchorElement & HTMLButtonElement
          >
        }
        as={onClick ? (href ? 'a' : 'button') : 'div'}
        href={href}
        $color={color}
        {...props}
      >
        {children}
      </GeneTag>
    );
  },
);
