import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
}

export interface GeneInputProps {
  $color?: 'primary' | 'inherit';
}
