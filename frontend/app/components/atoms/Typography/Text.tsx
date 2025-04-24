import React from 'react';

export interface TextProps {
  variant?: 'body' | 'lead' | 'small' | 'caption';
  className?: string;
  color?: 'primary' | 'secondary' | 'tertiary' | 'white' | 'dark' | 'muted' | 'white-50';
  children: React.ReactNode;
  weight?: 'light' | 'normal' | 'semibold' | 'bold';
  as?: keyof JSX.IntrinsicElements;
}

const Text = ({
  variant = 'body',
  className = '',
  color = 'dark',
  children,
  weight = 'normal',
  as = 'p',
  ...rest
}: TextProps) => {
  const Component = as;
  
  // Mapping variants to Bootstrap classes
  let variantClass = '';
  switch (variant) {
    case 'body':
      variantClass = '';
      break;
    case 'lead':
      variantClass = 'lead';
      break;
    case 'small':
      variantClass = 'small';
      break;
    case 'caption':
      variantClass = 'small text-muted';
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
    case 'white-50':
      colorClass = 'text-white-50';
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
    <Component
      className={`${variantClass} ${colorClass} ${weightClass} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Text;