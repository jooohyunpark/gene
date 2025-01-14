import { ReactNode } from 'react';

export interface CardProps {
  outline?: boolean;
  color?: 'primary' | 'neutral' | 'base';
  padding?: 'sm' | 'md' | 'lg';
  children?: ReactNode;
}

export interface GeneCardProps {
  $outline?: boolean;
  $color?: 'primary' | 'neutral' | 'base';
  $padding?: 'sm' | 'md' | 'lg';
}
