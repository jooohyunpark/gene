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
    plain: color.white,
  },
  border: {
    primary: color.blue20,
    neutral: color.gray30,
    plain: color.gray60,
  },
};

const GeneCard = styled.div<GeneCardProps>`
  padding: ${({ $padding = 'md' }) => paddingSizes[$padding]}px;
  background: ${({ $variant = 'neutral' }) => colors.background[$variant]};

  ${({ $outline, $variant = 'neutral' }) =>
    $outline &&
    css`
      border-width: 2px;
      border-style: solid;
      border-color: ${colors.border[$variant]};
    `};
`;

export const Card = forwardRef(
  (
    {
      variant = 'neutral',
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
        $variant={variant}
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
