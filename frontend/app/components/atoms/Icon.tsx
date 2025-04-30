import React from 'react';

export interface IconProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'tertiary' | 'white' | 'dark' | 'muted' | 'primary-custom' | 'secondary-custom' | 'tertiary-custom';
  className?: string;
}

const Icon = ({
  name,
  size = 'md',
  color = 'dark',
  className = '',
}: IconProps) => {
  // Map sizes to Bootstrap classes
  const sizeClass = {
    xs: 'fs-6',
    sm: 'fs-5',
    md: 'fs-4',
    lg: 'fs-3',
    xl: 'fs-2',
  };

  // Map colors to Bootstrap classes
  const colorClass = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    tertiary: 'text-info',
    white: 'text-white',
    dark: 'text-dark',
    muted: 'text-muted',
    'primary-custom': 'text-primary-custom',
    'secondary-custom': 'text-secondary-custom',
    'tertiary-custom': 'text-tertiary-custom',
  };

  return (
    <i className={`bi bi-${name} ${sizeClass[size]} ${colorClass[color]} ${className}`}></i>
  );
};

export default Icon;