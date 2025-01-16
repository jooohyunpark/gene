import { HTMLAttributes } from 'react';

export interface TagProps
  extends HTMLAttributes<
    HTMLDivElement | HTMLAnchorElement | HTMLButtonElement
  > {
  color?: 'primary' | 'neutral';
  href?: string;
}

export interface GeneTagProps {
  $color?: 'primary' | 'neutral';
  $expressive?: boolean;
}
