import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  const cardClasses = `
    bg-[var(--color-background)]
    border border-[var(--color-border-secondary)]
    rounded-[var(--radius-m)]
    p-[var(--spacing-m)]
    ${className}
  `.trim();

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
} 