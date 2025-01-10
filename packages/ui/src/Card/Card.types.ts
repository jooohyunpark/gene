import { ReactNode } from 'react';

export interface CardProps {
  border?: boolean;
  color?: 'blue' | 'gray' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children?: ReactNode;
}

export interface GeneCardProps {
  $border?: boolean;
  $color?: 'blue' | 'gray' | 'white';
  $size?: 'sm' | 'md' | 'lg';
}
