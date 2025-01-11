import { ReactNode } from 'react';

export interface LinkProps {
  href: string;
  underline?: boolean;
  variant?: 'primary' | 'neutral';
  expressive?: boolean;
  children?: ReactNode;
}

export interface GeneLinkProps {
  $underline?: boolean;
  $variant?: 'primary' | 'neutral';
  $expressive?: boolean;
}
