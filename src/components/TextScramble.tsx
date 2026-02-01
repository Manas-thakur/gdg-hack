import { useEffect, useRef, useState } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  trigger?: boolean;
  duration?: number;
}

const chars = '!<>-_\\/[]{}—=+*^?#________';

export default function TextScramble({ 
  text, 
  className = '', 
  trigger = true,
  duration = 2000 
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const frameRef = useRef<number | null>(null);
  const queueRef = useRef<{ from: string; to: string; start: number; end: number; char?: string }[]>([]);
  const frameCounter = useRef(0);

  useEffect(() => {
    if (!trigger) {
      setDisplayText(text);
      return;
    }

    const length = text.length;
    queueRef.current = [];
    
    for (let i = 0; i < length; i++) {
      const from = text[i];
      const to = text[i];
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queueRef.current.push({ from, to, start, end });
    }

    let frame = 0;

    const update = () => {
      let output = '';
      let complete = 0;

      for (let i = 0; i < queueRef.current.length; i++) {
        const { from, to, start, end } = queueRef.current[i];
        let char = queueRef.current[i].char;

        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = chars[Math.floor(Math.random() * chars.length)];
            queueRef.current[i].char = char;
          }
          output += `<span class="text-purple-400">${char}</span>`;
        } else {
          output += from;
        }
      }

      setDisplayText(output);

      if (complete === queueRef.current.length) {
        return;
      }

      frame++;
      frameCounter.current = frame;
      frameRef.current = requestAnimationFrame(update);
    };

    update();

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [text, trigger, duration]);

  return (
    <span 
      className={className}
      dangerouslySetInnerHTML={{ __html: displayText }}
    />
  );
}
