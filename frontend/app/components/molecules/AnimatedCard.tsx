"use client";
import React, { useState } from 'react';
import Card, { CardProps } from '../atoms/Card';

interface AnimatedCardProps extends CardProps {
  animationType?: 'hover-lift' | 'hover-glow' | 'hover-scale' | 'tilt' | 'none';
  glareIntensity?: number; // For tilt animation
  maxTilt?: number; // For tilt animation
  perspective?: number; // For tilt animation
  transitionDuration?: number;
  animationTrigger?: 'hover' | 'always';
}

const AnimatedCard = ({
  children,
  animationType = 'hover-lift',
  glareIntensity = 0.2,
  maxTilt = 10,
  perspective = 1000,
  transitionDuration = 300,
  animationTrigger = 'hover',
  className = '',
  ...rest
}: AnimatedCardProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Animation styles based on type
  const getAnimationStyles = () => {
    if (!isHovered && animationTrigger === 'hover') return {};
    
    switch (animationType) {
      case 'hover-lift':
        return { transform: isHovered ? 'translateY(-8px)' : 'translateY(0)' };
      case 'hover-glow':
        return { 
          boxShadow: isHovered 
            ? '0 8px 24px rgba(149, 157, 165, 0.3)' 
            : '0 4px 6px rgba(0, 0, 0, 0.1)'
        };
      case 'hover-scale':
        return { transform: isHovered ? 'scale(1.03)' : 'scale(1)' };
      case 'tilt': {
        const { x, y } = position;
        const rotateX = maxTilt * y;
        const rotateY = -maxTilt * x;
        
        return {
          transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: isHovered ? 'none' : `transform ${transitionDuration}ms ease-out`
        };
      }
      default:
        return {};
    }
  };
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (animationType !== 'tilt' || animationTrigger !== 'hover') return;
    
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    
    // Calculate position (0 to 1)
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    // Calculate position (-0.5 to 0.5)
    const normalizedX = x - 0.5;
    const normalizedY = y - 0.5;
    
    setPosition({ x: normalizedX, y: normalizedY });
    setGlarePosition({ x: x * 100, y: y * 100 });
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
    setGlarePosition({ x: 50, y: 50 });
  };
  
  // Apply transition to all animations except tilt when actively moving
  const transitionStyles = {
    transition: `all ${transitionDuration}ms ease-out`,
    ...(animationType === 'tilt' && isHovered ? {} : { transition: `all ${transitionDuration}ms ease-out` })
  };
  
  // Combine animation and transition styles
  const styles = {
    ...transitionStyles,
    ...getAnimationStyles()
  };
  
  // Add glare effect for tilt animation
  const glareStyles = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none' as const,
    borderRadius: 'inherit',
    background: `radial-gradient(
      circle at ${glarePosition.x}% ${glarePosition.y}%, 
      rgba(255,255,255,${glareIntensity}), 
      transparent
    )`,
    opacity: isHovered ? 1 : 0,
    transition: `opacity ${transitionDuration}ms ease-out`
  };
  
  return (
    <div
      className="position-relative"
      style={styles}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card className={className} {...rest}>
        {children}
      </Card>
      
      {animationType === 'tilt' && glareIntensity > 0 && (
        <div style={glareStyles} />
      )}
    </div>
  );
};

export default AnimatedCard;