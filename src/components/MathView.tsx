import React, { useMemo } from 'react';
import katex from 'katex';

interface MathViewProps {
  math: string;
  display?: boolean;
  className?: string;
}

/**
 * Render a single pure LaTeX math expression
 */
export const MathView: React.FC<MathViewProps> = ({ math, display = false, className = '' }) => {
  const html = useMemo(() => {
    try {
      // Clean up common quirks
      let cleanMath = math.trim();
      if (cleanMath.startsWith('$$') && cleanMath.endsWith('$$')) {
        cleanMath = cleanMath.slice(2, -2).trim();
      } else if (cleanMath.startsWith('$') && cleanMath.endsWith('$')) {
        cleanMath = cleanMath.slice(1, -1).trim();
      }

      return katex.renderToString(cleanMath, {
        displayMode: display,
        throwOnError: false,
        strict: false,
      });
    } catch (e) {
      console.error('KaTeX error:', e);
      return `<span class="text-rose-500 font-mono">${math}</span>`;
    }
  }, [math, display]);

  if (display) {
    return (
      <div 
        className={`my-2 py-2 overflow-x-auto text-center flex justify-center items-center ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span 
      className={`inline-block align-baseline mx-0.5 ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

interface FormattedTextProps {
  text: string;
  className?: string;
}

/**
 * Parses mixed text containing $...$ (inline math) or $$...$$ (display math)
 * and renders both text and math beautifully.
 */
export const FormattedText: React.FC<FormattedTextProps> = ({ text, className = '' }) => {
  const renderedElements = useMemo(() => {
    if (!text) return null;

    // Regular expression to split by $$...$$ or $...$
    // Captures delimiters so they appear in split array
    const parts = text.split(/(\$\$[\s\S]+?\$\$|\$[^\$]+?\$)/g);

    return parts.map((part, index) => {
      if (!part) return null;

      // Check for block math $$...$$
      if (part.startsWith('$$') && part.endsWith('$$') && part.length > 4) {
        const mathContent = part.slice(2, -2).trim();
        return (
          <MathView 
            key={index} 
            math={mathContent} 
            display={true} 
            className="text-sky-950 font-medium"
          />
        );
      }

      // Check for inline math $...$
      if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
        const mathContent = part.slice(1, -1).trim();
        return (
          <MathView 
            key={index} 
            math={mathContent} 
            display={false} 
            className="text-sky-950"
          />
        );
      }

      // If part contains obvious LaTeX syntax like \frac, \cdot, \vec, \mathcal, \sqrt, \sin, \Omega, \approx, etc.
      if (/\\(frac|cdot|vec|mathcal|sqrt|sin|cos|tan|Omega|rho|approx|times|Delta|alpha|beta|pi|mu|lambda|le|ge|implies)\b/.test(part)) {
        return (
          <MathView 
            key={index} 
            math={part} 
            display={false} 
            className="text-sky-950"
          />
        );
      }

      // Normal text: handle potential newlines

      const lines = part.split('\n');
      if (lines.length > 1) {
        return (
          <React.Fragment key={index}>
            {lines.map((line, lIdx) => (
              <React.Fragment key={lIdx}>
                {line}
                {lIdx < lines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </React.Fragment>
        );
      }

      return <span key={index}>{part}</span>;
    });
  }, [text]);

  return <span className={className}>{renderedElements}</span>;
};

export default MathView;
