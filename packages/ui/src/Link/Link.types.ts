import { ReactNode } from 'react';

export interface LinkProps {
  href?: string;
  to?: string;
  underline?: boolean;
  children?: ReactNode;
}
