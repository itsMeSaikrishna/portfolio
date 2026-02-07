'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PixelButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  external?: boolean;
}

export function PixelButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  external = false,
}: PixelButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center
    font-mono px-6 py-3
    transition-all duration-200
    shadow-pixel
  `;

  const variantStyles = {
    primary: 'bg-bg-card text-text-primary hover:bg-accent-primary hover:text-white',
    secondary: 'bg-accent-primary text-white hover:bg-accent-hover',
  };

  const content = (
    <motion.span
      className="flex items-center gap-2"
      whileHover={{ x: 2 }}
      transition={{ duration: 0.2 }}
    >
      <span>[</span>
      {children}
      <span>]</span>
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  );
}
