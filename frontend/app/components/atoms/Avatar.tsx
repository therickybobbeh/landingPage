import React from 'react';
import Image from 'next/image';

export interface AvatarProps {
  src: string;
  alt: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  borderColor?: string;
  borderWidth?: number;
  overlapping?: boolean;
  status?: 'online' | 'offline' | 'busy' | 'away' | null;
}

const Avatar = ({
  src,
  alt,
  size = 'md',
  className = '',
  borderColor = 'white',
  borderWidth = 2,
  overlapping = false,
  status = null,
}: AvatarProps) => {
  // Define sizes based on Bootstrap conventions
  const sizeMap = {
    xs: 24,
    sm: 32,
    md: 48,
    lg: 64,
    xl: 96,
  };

  const dimensions = sizeMap[size];
  
  // Define status indicator colors
  const statusColorMap = {
    online: 'bg-success',
    offline: 'bg-secondary',
    busy: 'bg-danger',
    away: 'bg-warning',
  };
  
  // Determine styles based on props
  const avatarStyles = {
    width: `${dimensions}px`,
    height: `${dimensions}px`,
    borderRadius: '50%',
    border: borderWidth ? `${borderWidth}px solid ${borderColor}` : 'none',
    position: 'relative' as const,
    marginLeft: overlapping ? '-8px' : '0',
    zIndex: overlapping ? 1 : 'auto',
  };
  
  return (
    <div style={avatarStyles} className={`position-relative ${className}`}>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`${dimensions}px`}
          className="rounded-circle object-fit-cover"
          priority={size === 'lg' || size === 'xl'}
        />
      </div>
      
      {status && (
        <span 
          className={`position-absolute bottom-0 end-0 d-block rounded-circle ${statusColorMap[status]}`}
          style={{
            width: `${dimensions / 4}px`,
            height: `${dimensions / 4}px`,
            border: '2px solid #fff'
          }}
        />
      )}
    </div>
  );
};

export default Avatar;