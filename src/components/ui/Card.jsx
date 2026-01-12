import React from 'react';

export function Card({ 
  children, 
  className = '', 
  hover = false,
  featured = false,
  ...props 
}) {
  const baseClasses = 'rounded-xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-bg-card)] to-[var(--color-bg-card-dark)] p-6 transition-all duration-300';
  
  const hoverClasses = hover ? 'hover:border-[var(--color-primary)]/30' : '';
  const featuredClasses = featured ? 'border-[var(--color-primary)]/30 ring-2 ring-[var(--color-primary)]/20' : '';

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${featuredClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
