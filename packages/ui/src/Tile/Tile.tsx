import { forwardRef, ForwardedRef } from 'react';
import styled, { css } from 'styled-components';
import { color, space } from '@gene/token';
import { TileProps, GeneTileProps } from './Tile.types';

const GeneTile = styled.div<GeneTileProps>`
  padding: ${space(2)}px;

  ${({ $outline, $color }) =>
    $outline &&
    css`
      border-width: 1px;
      border-style: solid;
      border-color: ${$color ? color.blue20 : color.gray30};
    `};

  background: ${({ $color }) => ($color ? color.blue10 : color.gray10)};
`;

export const Tile = forwardRef(
  (
    { color = false, outline = true, children, ...props }: TileProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <GeneTile ref={ref} $color={color} $outline={outline} {...props}>
        {children}
      </GeneTile>
    );
  },
);
