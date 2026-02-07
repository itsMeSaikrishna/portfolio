'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: string;
  className?: string;
}

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <motion.h2
      className={`font-mono text-2xl md:text-3xl font-bold text-text-primary mb-12 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-text-muted">[</span>
      {' '}{children.toUpperCase().replace(/ /g, '_')}{' '}
      <span className="text-text-muted">]</span>
    </motion.h2>
  );
}
