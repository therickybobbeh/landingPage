import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import Text from '../../atoms/Typography/Text';

export interface IconWithTextProps {
  iconName: string;
  title?: string;
  subtitle?: string;
  iconSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  iconColor?: 'primary' | 'secondary' | 'tertiary' | 'white' | 'dark' | 'muted';
  titleColor?: 'primary' | 'secondary' | 'tertiary' | 'white' | 'dark' | 'muted' | 'white-50';
  subtitleColor?: 'primary' | 'secondary' | 'tertiary' | 'white' | 'dark' | 'muted' | 'white-50';
  titleWeight?: 'light' | 'normal' | 'semibold' | 'bold';
  iconClassName?: string;
  className?: string;
}

const IconWithText = ({
  iconName,
  title,
  subtitle,
  iconSize = 'md',
  iconColor = 'primary',
  titleColor = 'dark',
  subtitleColor = 'muted',
  titleWeight = 'semibold',
  iconClassName = '',
  className = '',
}: IconWithTextProps) => {
  return (
    <div className={`d-flex align-items-center ${className}`}>
      <div className={`me-3 ${iconClassName}`}>
        <Icon name={iconName} size={iconSize} color={iconColor} />
      </div>
      <div>
        {title && (
          <Text color={titleColor} weight={titleWeight} className="mb-0">
            {title}
          </Text>
        )}
        {subtitle && (
          <Text variant="small" color={subtitleColor} className="mb-0">
            {subtitle}
          </Text>
        )}
      </div>
    </div>
  );
};

export default IconWithText;