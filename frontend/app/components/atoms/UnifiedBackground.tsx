import React from 'react';

interface UnifiedBackgroundProps {
  className?: string;
  intensity?: 'light' | 'normal' | 'dark';
  style?: React.CSSProperties;
}

/**
 * UnifiedBackground component - Provides a consistent background style with decorative blurred elements
 * Following Atomic Design principles as an atom (basic building block)
 */
const UnifiedBackground: React.FC<UnifiedBackgroundProps> = ({ 
  className = '',
  intensity = 'normal',
  style = {} 
}) => {
  // Calculate opacity values based on intensity
  const opacityMap = {
    light: { primary: 0.08, secondary: 0.06, info: 0.07 },
    normal: { primary: 0.15, secondary: 0.12, info: 0.10 },
    dark: { primary: 0.20, secondary: 0.15, info: 0.15 }
  };
  
  const opacities = opacityMap[intensity];

  return (
    <div 
      className={`position-fixed top-0 start-0 w-100 h-100 overflow-hidden ${className}`} 
      style={{ 
        ...style, 
        zIndex: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none' // Allows clicks to pass through to elements below
      }}
    >
      {/* Primary color blob - top left */}
      <div className="position-absolute rounded-circle bg-primary" 
        style={{ 
          width: '400px', 
          height: '400px',
          filter: 'blur(100px)',
          opacity: opacities.primary,
          top: '10%',
          left: '5%'
        }}
      />

      {/* Secondary color blob - middle right */}
      <div className="position-absolute rounded-circle bg-secondary" 
        style={{ 
          width: '350px', 
          height: '350px',
          filter: 'blur(90px)',
          opacity: opacities.secondary,
          top: '30%',
          right: '10%'
        }}
      />

      {/* Info color blob - bottom center */}
      <div className="position-absolute rounded-circle bg-info" 
        style={{ 
          width: '380px', 
          height: '380px',
          filter: 'blur(110px)',
          opacity: opacities.info,
          bottom: '15%',
          left: '40%',
          transform: 'translateX(-50%)'
        }}
      />

      {/* Primary color blob - bottom left */}
      <div className="position-absolute rounded-circle bg-primary" 
        style={{ 
          width: '300px', 
          height: '300px',
          filter: 'blur(80px)',
          opacity: opacities.primary * 0.8,
          bottom: '10%',
          left: '10%'
        }}
      />
    </div>
  );
};

export default UnifiedBackground;