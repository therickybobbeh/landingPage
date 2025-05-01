"use client";
import React, { useState, useRef, useEffect } from 'react';

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  perspective?: number;
  glareIntensity?: number;
  maxTilt?: number;
}

const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  className = '',
  style = {},
  perspective = 1000,
  glareIntensity = 0.15,
  maxTilt = 15
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Handle mouse movement for tilt effect
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to element center
    const x = (event.clientX - rect.left) - width / 2;
    const y = (event.clientY - rect.top) - height / 2;
    
    // Scale to -1 to 1 range and apply intensity
    const tiltX = (y / (height / 2)) * maxTilt;
    const tiltY = -((x / (width / 2)) * maxTilt);
    
    setPosition({ x: tiltX, y: tiltY });
  };

  // Reset position when mouse leaves
  const handleMouseLeave = () => {
    setHover(false);
    // Animate back to original position
    const timeout = setTimeout(() => {
      setPosition({ x: 0, y: 0 });
    }, 100);
    
    return () => clearTimeout(timeout);
  };

  // Add subtle floating animation when not being interacted with
  useEffect(() => {
    if (hover) return;
    
    let animationFrame: number;
    let angle = 0;
    
    const animate = () => {
      angle += 0.005;
      const floatX = Math.sin(angle) * 2;
      const floatY = Math.cos(angle) * 2;
      
      setPosition({ 
        x: floatX, 
        y: floatY 
      });
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [hover]);

  return (
    <div
      ref={ref}
      className={`floating-element ${className}`}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d',
        ...style
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          transform: `rotateX(${position.x}deg) rotateY(${position.y}deg)`,
          transition: hover ? 'none' : 'transform 0.5s ease-out',
          transformStyle: 'preserve-3d',
          position: 'relative'
        }}
      >
        {children}
        
        {/* Glare effect overlay */}
        {glareIntensity > 0 && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: 'inherit',
              background: `linear-gradient(
                ${135 + (position.y / maxTilt) * 45}deg,
                rgba(255, 255, 255, ${(position.y / maxTilt) * glareIntensity + 0.05}) 0%,
                rgba(255, 255, 255, 0) 80%
              )`,
              pointerEvents: 'none',
              zIndex: 2
            }}
          />
        )}
      </div>
    </div>
  );
};

export default FloatingElement;