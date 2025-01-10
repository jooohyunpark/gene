import { ReactNode } from 'react';

export interface CardProps {
  outline?: boolean;
  color?: 'blue' | 'gray' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children?: ReactNode;
}

export interface GeneCardProps {
  $outline?: boolean;
  $color?: 'blue' | 'gray' | 'white';
  $size?: 'sm' | 'md' | 'lg';
}
