import { ReactNode } from 'react';

export interface TileProps {
  outline?: boolean;
  color?: boolean;
  children?: ReactNode;
}

export interface GeneTileProps {
  $outline?: boolean;
  $color?: boolean;
}
