'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface PixelBoxProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  variant?: 'default' | 'hover' | 'glow' | 'light';
  className?: string;
  hover?: boolean;
}

export function PixelBox({
  children,
  variant = 'default',
  className = '',
  hover = true,
  ...props
}: PixelBoxProps) {
  const variantStyles = {
    default: 'shadow-pixel',
    hover: 'shadow-pixel-hover',
    glow: 'shadow-pixel-glow',
    light: 'pixel-border-light',
  };

  return (
    <motion.div
      className={`
        bg-bg-card p-6
        ${variantStyles[variant]}
        ${hover ? 'hover:shadow-pixel-glow transition-shadow duration-300' : ''}
        ${className}
      `}
      whileHover={hover ? { scale: 1.02 } : undefined}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
