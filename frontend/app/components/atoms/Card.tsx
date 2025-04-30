import React from 'react';
import { Card as BootstrapCard, CardProps as BSCardProps } from 'react-bootstrap';

interface CardProps extends BSCardProps {
  variant?: 'default' | 'dark' | 'light' | 'light-grey';
  gradient?: 'purple' | 'magenta' | 'blue' | 'light-blue' | 'dark' | 'full' | 'none';
  isHoverable?: boolean;
  isAnimated?: boolean;
  roundedSize?: 'sm' | 'md' | 'lg' | 'xl';
}

const Card = ({
  children,
  variant = 'default',
  gradient = 'none',
  isHoverable = false,
  isAnimated = false,
  roundedSize = 'md',
  className = '',
  ...rest
}: CardProps) => {
  // Build class names based on props
  let cardClasses = className;
  
  // Add variant class
  if (variant !== 'default') {
    cardClasses += ` card-${variant}`;
  }
  
  // Add gradient class if specified
  if (gradient !== 'none') {
    cardClasses += ` card-gradient-${gradient}`;
  }
  
  // Add hoverable class
  if (isHoverable) {
    cardClasses += ' card-custom';
  }
  
  // Add animated class
  if (isAnimated) {
    cardClasses += ' card-animated';
  }
  
  // Map rounded sizes to Bootstrap classes
  const roundedSizeMap = {
    sm: 'rounded',
    md: 'rounded-3',
    lg: 'rounded-4',
    xl: 'rounded-5'
  };
  
  cardClasses += ` ${roundedSizeMap[roundedSize]} shadow`;
  
  return (
    <BootstrapCard className={cardClasses} {...rest}>
      {children}
    </BootstrapCard>
  );
};

export { Card };
export type { CardProps };

// Re-export Bootstrap Card subcomponents for convenience
export const CardHeader = BootstrapCard.Header;
export const CardBody = BootstrapCard.Body;
export const CardFooter = BootstrapCard.Footer;
export const CardTitle = BootstrapCard.Title;
export const CardText = BootstrapCard.Text;
export const CardImg = BootstrapCard.Img;

export default Card;