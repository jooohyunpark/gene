import { ReactNode } from 'react';

export interface TagProps {
  color?: 'primary' | 'neutral';
  type?: 'div' | 'button' | 'a';
  href?: string;
  children?: ReactNode;
}

export interface GeneTagProps {
  $underline?: boolean;
  $color?: 'primary' | 'neutral';
  $expressive?: boolean;
}
