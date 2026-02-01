import { useState, useEffect, useCallback } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  triggerOnHover?: boolean;
  interval?: number;
}

const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

export default function GlitchText({
  text,
  className = '',
  triggerOnHover = true,
  interval = 3000,
}: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitch = useCallback(() => {
    if (isGlitching) return;
    setIsGlitching(true);

    let iterations = 0;
    const maxIterations = text.length * 2;

    const intervalId = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iterations / 2) return text[index];
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join('')
      );

      iterations++;

      if (iterations > maxIterations) {
        clearInterval(intervalId);
        setDisplayText(text);
        setIsGlitching(false);
      }
    }, 30);
  }, [text, isGlitching]);

  useEffect(() => {
    if (!triggerOnHover) {
      const autoGlitch = setInterval(glitch, interval);
      return () => clearInterval(autoGlitch);
    }
  }, [glitch, triggerOnHover, interval]);

  return (
    <span
      className={`relative inline-block ${className}`}
      onMouseEnter={triggerOnHover ? glitch : undefined}
    >
      {/* Main text */}
      <span className="relative z-10">{displayText}</span>
      
      {/* Glitch layers */}
      {isGlitching && (
        <>
          <span 
            className="absolute top-0 left-0 text-red-500 opacity-50"
            style={{ clipPath: 'inset(0 0 50% 0)', transform: 'translateX(2px)' }}
            aria-hidden
          >
            {displayText}
          </span>
          <span 
            className="absolute top-0 left-0 text-purple-500 opacity-50"
            style={{ clipPath: 'inset(50% 0 0 0)', transform: 'translateX(-2px)' }}
            aria-hidden
          >
            {displayText}
          </span>
        </>
      )}
    </span>
  );
}
