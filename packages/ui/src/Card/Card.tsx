import { forwardRef, ForwardedRef } from 'react';
import styled, { css } from 'styled-components';
import { color, space } from '@gene/token';
import { CardProps, GeneCardProps } from './Card.types';

const paddingSizes = {
  sm: space(2),
  md: space(3),
  lg: space(4),
};

const GeneCard = styled.div<GeneCardProps>`
  padding: ${({ $size = 'md' }) => paddingSizes[$size]}px;

  ${({ $outline, $color }) =>
    $outline &&
    css`
      border-width: 1px;
      border-style: solid;
      border-color: ${$color ? color.blue20 : color.gray30};
    `};

  background: ${({ $color }) => ($color ? color.blue10 : color.gray10)};
`;

export const Card = forwardRef(
  (
    {
      color = false,
      outline = true,
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
        $outline={outline}
        {...props}
      >
        {children}
      </GeneCard>
    );
  },
);
