import { forwardRef, ForwardedRef } from 'react';
import styled, { css } from 'styled-components';
import { color, space, typography } from '@jooohyunpark/gene-token';
import type { TagProps, GeneTagProps } from './Tag.types';

const colors = {
  primary: {
    background: color.blue10,
    hover: color.blue20,
  },
  neutral: {
    background: color.gray10,
    hover: color.gray20,
  },
};

const GeneTag = styled.div<GeneTagProps>`
  display: inline-block;
  padding: ${space(0.5)}px ${space(1.5)}px;
  border: none;
  border-radius: ${space(2)}px;
  background: ${color.blue10};
  color: inherit;
  ${typography.body02};

  background: ${({ $color = 'neutral' }) => colors[$color].background};
  text-decoration: ${({ as }) => (as === 'a' ? 'underline' : 'none')};

  ${({ as, $color = 'neutral' }) =>
    (as === 'a' || as === 'button') &&
    css`
      cursor: pointer;
      transition: background 0.25s ease-out;

      @media (hover: hover) {
        &:hover {
          background: ${colors[$color].hover};
        }
      }
    `};
`;

export const Tag = forwardRef(
  (
    { href, color = 'neutral', onClick, children, ...props }: TagProps,
    ref: ForwardedRef<HTMLDivElement | HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    const as = href ? 'a' : onClick ? 'button' : 'div';

    return (
      <GeneTag
        ref={
          ref as ForwardedRef<
            HTMLDivElement & HTMLAnchorElement & HTMLButtonElement
          >
        }
        as={as}
        href={href}
        $color={color}
        {...props}
      >
        {children}
      </GeneTag>
    );
  },
);
