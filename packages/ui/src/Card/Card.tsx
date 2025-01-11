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
    primary: color.blue10,
    neutral: color.gray10,
    base: color.white,
  },
  border: {
    primary: color.blue20,
    neutral: color.gray30,
    base: color.gray100,
  },
};

const GeneCard = styled.div<GeneCardProps>`
  padding: ${({ $padding = 'md' }) => paddingSizes[$padding]}px;
  background: ${({ $color = 'neutral' }) => colors.background[$color]};

  ${({ $outline, $color = 'neutral' }) =>
    $outline &&
    css`
      border-width: 2px;
      border-style: solid;
      border-color: ${colors.border[$color]};
    `};
`;

export const Card = forwardRef(
  (
    {
      color = 'neutral',
      outline = false,
      padding = 'md',
      children,
      style,
      ...props
    }: CardProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <GeneCard
        ref={ref}
        $color={color}
        $padding={padding}
        $outline={outline}
        style={style}
        {...props}
      >
        {children}
      </GeneCard>
    );
  },
);
