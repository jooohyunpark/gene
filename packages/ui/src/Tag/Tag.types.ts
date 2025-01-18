import { HTMLProps } from 'react';

export interface TagProps
  extends HTMLProps<HTMLDivElement | HTMLAnchorElement | HTMLButtonElement> {
  color?: 'primary' | 'neutral';
  href?: string;
}

export interface GeneTagProps {
  $color?: 'primary' | 'neutral';
  $expressive?: boolean;
}
