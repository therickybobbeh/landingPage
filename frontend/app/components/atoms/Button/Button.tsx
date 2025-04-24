import React from 'react';
import { Button as BootstrapButton, ButtonProps as BSButtonProps } from 'react-bootstrap';

export interface ButtonProps extends BSButtonProps {
  variant?: 
    | 'primary' 
    | 'secondary' 
    | 'tertiary' 
    | 'outline-light' 
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-tertiary'
    | 'link'
    | 'info';
  size?: 'sm' | 'lg';
  withIcon?: boolean;
  iconPosition?: 'left' | 'right';
  iconClassName?: string;
  rounded?: boolean;
  gradient?: 'warm' | 'cool' | 'full' | 'none';
}

const Button = ({
  children,
  variant = 'primary',
  size,
  className = '',
  withIcon = false,
  iconPosition = 'left',
  iconClassName,
  rounded = false,
  gradient = 'none',
  ...rest
}: ButtonProps) => {
  // Map our custom variants to Bootstrap variants and custom classes
  let buttonVariant = variant;
  let customClass = className;
  
  // Handle custom styling cases
  switch (variant) {
    case 'tertiary':
      buttonVariant = 'info';
      break;
    // Map to standard Bootstrap variants for the rest
  }
  
  // Add gradient class if specified
  if (gradient !== 'none') {
    customClass += ` btn-gradient-${gradient}`; // Apply gradient styling via custom class
  }
  
  // Add rounded class if specified
  if (rounded) {
    customClass += ' btn-rounded';
  }
  
  return (
    <BootstrapButton
      variant={buttonVariant as any}
      size={size}
      className={customClass}
      {...rest}
    >
      {withIcon && iconPosition === 'left' && iconClassName && (
        <i className={`${iconClassName} me-2`}></i>
      )}
      {children}
      {withIcon && iconPosition === 'right' && iconClassName && (
        <i className={`${iconClassName} ms-2`}></i>
      )}
    </BootstrapButton>
  );
};

export default Button;