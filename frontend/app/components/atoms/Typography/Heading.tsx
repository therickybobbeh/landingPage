import React from 'react';

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: 'display' | 'regular' | 'section' | 'subtitle';
  className?: string;
  color?: 'primary' | 'secondary' | 'tertiary' | 'white' | 'dark' | 'muted';
  children: React.ReactNode;
  weight?: 'light' | 'normal' | 'semibold' | 'bold';
}

const Heading = ({
  level = 2,
  variant = 'regular',
  className = '',
  color = 'dark',
  children,
  weight = 'normal',
  ...rest
}: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  // Mapping variants to Bootstrap classes
  let variantClass = '';
  switch (variant) {
    case 'display':
      variantClass = `display-${Math.min(level + 1, 6)}`;
      break;
    case 'section':
      variantClass = 'section-title';
      break;
    case 'subtitle':
      variantClass = 'section-subtitle';
      break;
  }
  
  // Mapping colors to Bootstrap classes
  let colorClass = '';
  switch (color) {
    case 'primary':
      colorClass = 'text-primary';
      break;
    case 'secondary':
      colorClass = 'text-secondary';
      break;
    case 'tertiary':
      colorClass = 'text-info';
      break;
    case 'white':
      colorClass = 'text-white';
      break;
    case 'dark':
      colorClass = 'text-dark';
      break;
    case 'muted':
      colorClass = 'text-muted';
      break;
  }
  
  // Mapping weights to Bootstrap classes
  let weightClass = '';
  switch (weight) {
    case 'light':
      weightClass = 'fw-light';
      break;
    case 'normal':
      weightClass = 'fw-normal';
      break;
    case 'semibold':
      weightClass = 'fw-semibold';
      break;
    case 'bold':
      weightClass = 'fw-bold';
      break;
  }
  
  return (
    <Tag
      className={`${variantClass} ${colorClass} ${weightClass} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Heading;