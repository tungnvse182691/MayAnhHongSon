import { useEffect, useState } from 'react';

export default function AnimatedHeading({ text, className }: { text: string; className?: string }) {
  const [startAnim, setStartAnim] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => setStartAnim(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  const lines = text.split('\n');
  const charDelay = 30; // ms

  return (
    <h1 className={className} style={{ letterSpacing: '-0.04em' }}>
      {lines.map((line, lineIndex) => {
        return (
          <div key={lineIndex} className="overflow-hidden whitespace-nowrap">
            {line.split('').map((char, charIndex) => {
              const currentDelay = (lineIndex * line.length * charDelay) + (charIndex * charDelay);
              const isSpace = char === ' ';
              
              return (
                <span
                  key={charIndex}
                  className="inline-block transition-all"
                  style={{
                    opacity: startAnim ? 1 : 0,
                    transform: startAnim ? 'translateX(0)' : 'translateX(-18px)',
                    transitionDuration: '500ms',
                    transitionDelay: `${currentDelay}ms`,
                    transitionProperty: 'opacity, transform',
                    transitionTimingFunction: 'ease-out'
                  }}
                >
                  {isSpace ? '\u00A0' : char}
                </span>
              );
            })}
          </div>
        );
      })}
    </h1>
  );
}
