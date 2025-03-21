import type {
  HTMLAttributes,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
} from 'react';

type CommonTagProps = {
  color?: 'primary' | 'neutral';
};

export type DivTagProps = CommonTagProps &
  HTMLAttributes<HTMLDivElement> & {
    href?: string;
    onClick?: () => void;
  };

export type AnchorTagProps = CommonTagProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    onClick?: () => void;
    href?: string;
  };

export type ButtonTagProps = CommonTagProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick?: () => void;
    href?: string;
  };

export type TagProps = DivTagProps | AnchorTagProps | ButtonTagProps;

export interface GeneTagProps {
  $color?: 'primary' | 'neutral';
  $expressive?: boolean;
}
