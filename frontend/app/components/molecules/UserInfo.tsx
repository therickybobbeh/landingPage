import React from 'react';
import Avatar from '../atoms/Avatar';
import Text from '../atoms/Typography/Text';
import { Row, Col } from 'react-bootstrap';

export interface UserInfoProps {
  avatarSrc: string;
  name: string;
  email?: string;
  position?: string;
  className?: string;
  variant?: 'horizontal' | 'vertical';
  textColor?: 'primary' | 'secondary' | 'tertiary' | 'white' | 'dark' | 'muted' | 'white-50';
  avatarSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const UserInfo = ({
  avatarSrc,
  name,
  email,
  position,
  className = '',
  variant = 'horizontal',
  textColor = 'dark',
  avatarSize = 'md',
}: UserInfoProps) => {
  const isVertical = variant === 'vertical';
  
  return (
    <div 
      className={`d-flex ${isVertical ? 'flex-column align-items-center text-center' : 'flex-row align-items-center'} ${className}`}
    >
      <Avatar 
        src={avatarSrc} 
        alt={`${name}'s avatar`}
        size={avatarSize}
        className={isVertical ? 'mb-3' : 'me-3'}
      />
      
      <div>
        <Text 
          color={textColor} 
          weight="semibold" 
          className="mb-0"
        >
          {name}
        </Text>
        
        {email && (
          <Text 
            variant="small" 
            color={textColor === 'white' ? 'white-50' : 'muted'}
            className="mb-0"
          >
            {email}
          </Text>
        )}
        
        {position && (
          <Text 
            variant="small" 
            color={textColor === 'white' ? 'white-50' : 'muted'}
            className="mb-0"
          >
            {position}
          </Text>
        )}
      </div>
    </div>
  );
};

export default UserInfo;