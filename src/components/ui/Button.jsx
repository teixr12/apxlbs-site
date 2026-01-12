import React from 'react';

export function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  ...props 
}) {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer';
  
  const variants = {
    primary: 'bg-[var(--color-primary)] text-black hover:bg-[var(--color-primary-light)] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_var(--color-primary-glow)]',
    secondary: 'bg-transparent text-[var(--color-text)] border border-[var(--color-border-light)] hover:bg-white/5',
    outline: 'bg-transparent text-[var(--color-primary)] border border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10',
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
