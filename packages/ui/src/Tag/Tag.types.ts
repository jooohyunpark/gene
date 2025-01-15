import { ReactNode, MouseEventHandler } from 'react';

export interface TagProps {
  color?: 'primary' | 'neutral';
  onClick?: MouseEventHandler;
  href?: string;
  children?: ReactNode;
}

export interface GeneTagProps {
  $color?: 'primary' | 'neutral';
  $expressive?: boolean;
}
