import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { color, space } from '@jooohyunpark/gene-token';
import { CardProps, GeneCardProps } from './Card.types';

const paddingSizes = {
  sm: space(2),
  md: space(3),
  lg: space(4),
};

const colors = {
  primary: {
    background: color.blue10,
    border: color.blue20,
  },
  neutral: {
    background: color.gray10,
    border: color.gray30,
  },
  base: {
    background: color.white,
    border: color.gray30,
  },
};

const GeneCard = styled.div<GeneCardProps>`
  padding: ${({ $padding = 'md' }) => paddingSizes[$padding]}px;
  background: ${({ $color = 'neutral' }) => colors[$color].background};

  ${({ $outline, $color = 'neutral' }) =>
    $outline &&
    css`
      border-width: 1px;
      border-style: solid;
      border-color: ${colors[$color].border};
    `};
`;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      color = 'neutral',
      outline = false,
      padding = 'md',
      children,
      style,
      ...props
    },
    ref,
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
