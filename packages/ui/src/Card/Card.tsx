import { forwardRef, ForwardedRef } from 'react';
import styled, { css } from 'styled-components';
import { color, space } from '@gene/token';
import { CardProps, GeneCardProps } from './Card.types';

const paddingSizes = {
  sm: space(2),
  md: space(3),
  lg: space(4),
};

const colors = {
  background: {
    white: color.white,
    blue: color.blue10,
    gray: color.gray10,
  },
  border: {
    white: color.gray60,
    blue: color.blue20,
    gray: color.gray30,
  },
};

const GeneCard = styled.div<GeneCardProps>`
  padding: ${({ $size = 'md' }) => paddingSizes[$size]}px;
  background: ${({ $color = 'gray' }) => colors.background[$color]};

  ${({ $border = 'gray', $color = 'gray' }) =>
    $border &&
    css`
      border-width: 1px;
      border-style: solid;
      border-color: ${colors.border[$color]};
    `};
`;

export const Card = forwardRef(
  (
    {
      color = 'gray',
      border = true,
      size = 'md',
      children,
      ...props
    }: CardProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <GeneCard
        ref={ref}
        $color={color}
        $size={size}
        $border={border}
        {...props}
      >
        {children}
      </GeneCard>
    );
  },
);
