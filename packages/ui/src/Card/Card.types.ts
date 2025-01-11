import { ReactNode } from 'react';

export interface CardProps {
  outline?: boolean;
  variant: 'primary' | 'neutral' | 'plain';
  size?: 'sm' | 'md' | 'lg';
  children?: ReactNode;
}

export interface GeneCardProps {
  $outline?: boolean;
  $variant: 'primary' | 'neutral' | 'plain';
  $size?: 'sm' | 'md' | 'lg';
}
