import { ReactNode, CSSProperties } from 'react';

export interface CardProps {
  // outline?: boolean;
  color?: 'primary' | 'neutral' | 'plain';
  padding?: 'sm' | 'md' | 'lg';
  children?: ReactNode;
  style?: CSSProperties;
}

export interface GeneCardProps {
  // $outline?: boolean;
  $color?: 'primary' | 'neutral' | 'plain';
  $padding?: 'sm' | 'md' | 'lg';
}
