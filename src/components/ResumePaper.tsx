import React, { useEffect, useRef, useLayoutEffect, useState } from 'react';
import { PaperSize } from '../data/types';

interface ResumePaperProps {
  paperSize: PaperSize;
  showGuides: boolean;
  onOverflowChange?: (overflowPx: number) => void;
  children: React.ReactNode;
}

export const ResumePaper: React.FC<ResumePaperProps> = ({
  paperSize,
  showGuides,
  onOverflowChange,
  children,
}) => {
  const paperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [overflowPx, setOverflowPx] = useState(0);

  // Concern #1: Dynamic @page style tag injection matching toolbar paper size selection
  useEffect(() => {
    let styleTag = document.getElementById('print-page-style') as HTMLStyleElement | null;
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = 'print-page-style';
      document.head.appendChild(styleTag);
    }
    const pageFormat = paperSize === 'a4' ? 'A4 portrait' : 'letter portrait';
    styleTag.textContent = `@page { size: ${pageFormat}; margin: 0; }`;

    return () => {
      // Keep style tag or let next selection update it
    };
  }, [paperSize]);

  // Concern #3: Real-time 1-page overflow monitoring using ResizeObserver
  useLayoutEffect(() => {
    const checkOverflow = () => {
      if (!paperRef.current || !contentRef.current) return;
      const paperHeight = paperRef.current.clientHeight;
      const contentHeight = contentRef.current.scrollHeight;
      const delta = contentHeight - paperHeight;

      const diff = delta > 1 ? delta : 0;
      setOverflowPx(diff);
      if (onOverflowChange) {
        onOverflowChange(diff);
      }
    };

    checkOverflow();

    const resizeObserver = new ResizeObserver(() => {
      checkOverflow();
    });

    if (paperRef.current) {
      resizeObserver.observe(paperRef.current);
    }
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    window.addEventListener('resize', checkOverflow);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', checkOverflow);
    };
  }, [paperSize, onOverflowChange]);

  const isOverflow = overflowPx > 1;

  return (
    <div className="resume-paper-wrapper">
      <div
        ref={paperRef}
        className={`resume-paper size-${paperSize} ${showGuides ? 'show-guides' : ''} ${
          isOverflow ? 'has-overflow' : ''
        }`}
      >
        <div ref={contentRef} className="paper-inner">
          {children}
        </div>
      </div>

      {isOverflow && (
        <div className="overflow-indicator-bar no-print">
          ⚠️ Content overflows 1-page boundary by {Math.round(overflowPx)}px — adjust line height or copy to maintain strict 1-page fit
        </div>
      )}
    </div>
  );
};
