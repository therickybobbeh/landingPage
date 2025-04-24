"use client";
import React, { useEffect, useState, useRef } from 'react';

interface CodeAnimationProps {
  className?: string;
  height?: string | number;
}

const CodeAnimation: React.FC<CodeAnimationProps> = ({ 
  className = '',
  height = 350 
}) => {
  const [displayedCode, setDisplayedCode] = useState<string>('');
  const [currentLine, setCurrentLine] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);

  const codeLines = [
    'const portfolio = {',
    '  name: "Full Stack Developer",',
    '  skills: [',
    '    "React", "Next.js",',
    '    "FastAPI", "PostgreSQL",',
    '    "Docker", "AWS"',
    '  ],',
    '  projects: 25,',
    '  clients: 10,',
    '  passion: "Building exceptional web experiences",',
    '};',
    '',
    '// Let\'s collaborate on your next project!'
  ];

  const fullCode = codeLines.join('\n');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (!isTyping) return;

    let timeout: NodeJS.Timeout;
    let currentFullText = codeLines.slice(0, currentLine).join('\n');

    if (currentLine < codeLines.length) {
      const currentLineText = codeLines[currentLine];
      const currentPosition = displayedCode.length - currentFullText.length;

      if (currentPosition < currentLineText.length) {
        timeout = setTimeout(() => {
          setDisplayedCode(currentFullText + currentLineText.substring(0, currentPosition + 1));
        }, Math.random() * 50 + 30);
      } else {
        timeout = setTimeout(() => {
          setCurrentLine(prev => prev + 1);
        }, 200);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayedCode('');
        setCurrentLine(0);
      }, 5000);
    }

    return () => clearTimeout(timeout);
  }, [displayedCode, currentLine, isTyping]);

  const containerHeight = typeof height === 'number' ? `${height}px` : height;

  return (
    <div 
      className={`${className} w-100`} 
      ref={containerRef}
      style={{
        position: 'relative',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '12px',
        overflow: 'hidden',
        height: containerHeight,
        maxWidth: '100%',
        margin: '0 auto',
        boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      {/* Editor navigation bar - Positioned at the top, full width, edge to edge */}
      <div className="position-absolute top-0 start-0 w-100" style={{ 
        backgroundColor: '#1e1e1e', 
        borderBottom: '1px solid #333',
        borderTopLeftRadius: 'inherit',
        borderTopRightRadius: 'inherit',
        padding: '10px 12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '40px',
        margin: 0
      }}>
        <div className="d-flex gap-2 align-items-center">
          <div className="rounded-circle" style={{ width: '12px', height: '12px', backgroundColor: '#ff5f56' }}></div>
          <div className="rounded-circle" style={{ width: '12px', height: '12px', backgroundColor: '#ffbd2e' }}></div>
          <div className="rounded-circle" style={{ width: '12px', height: '12px', backgroundColor: '#27c93f' }}></div>
        </div>
        
        <div className="text-center flex-grow-1">
          <small className="text-white-50">portfolio.js</small>
        </div>
        
        <div style={{ width: '36px' }}></div> {/* Spacer for balance */}
      </div>
      
      {/* Code content with proper padding to account for the navbar */}
      <div className="h-100 pt-5 position-relative">
        <pre className="mb-0 overflow-auto" style={{ 
          height: 'calc(100% - 40px)', 
          padding: '0.75rem',
          backgroundColor: '#1b2433',
          color: '#e6e6e6',
          fontSize: '0.9rem',
          whiteSpace: 'pre-wrap',
          wordBreak: 'keep-all',
          margin: 0,
          position: 'absolute',
          top: '40px',
          left: 0,
          right: 0,
          bottom: 0
        }}>
          <code>
            {displayedCode}
            {isTyping && cursorVisible ? <span className="text-secondary-custom">|</span> : ''}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeAnimation;