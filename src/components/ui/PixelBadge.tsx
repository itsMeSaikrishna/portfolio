'use client';

import { motion } from 'framer-motion';

interface PixelBadgeProps {
  children: string;
  className?: string;
  variant?: 'default' | 'cert';
}

export function PixelBadge({ children, className = '', variant = 'default' }: PixelBadgeProps) {
  const variants = {
    default: 'bg-bg-secondary text-text-secondary hover:bg-accent-primary hover:text-white',
    cert: 'bg-accent-light text-text-primary hover:bg-accent-primary hover:text-white',
  };

  return (
    <motion.span
      className={`
        inline-block font-mono text-sm px-3 py-1
        shadow-pixel-sm
        transition-colors duration-200
        ${variants[variant]}
        ${className}
      `}
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.span>
  );
}
