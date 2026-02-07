'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '@/lib/data';
import { useEffect, useState } from 'react';

export function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = siteConfig.name;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 pixel-grid opacity-30" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* I am */}
        <motion.div
          className="mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-2xl md:text-3xl text-text-secondary">
            I am
          </span>
        </motion.div>

        {/* Name with Typing Effect */}
        <motion.h1
          className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {displayedText}
          <span className="animate-pixel-blink">_</span>
        </motion.h1>

        {/* Title with Pixel Decoration */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <span className="inline-block w-4 h-4 bg-accent-primary" />
          <span className="inline-block w-2 h-2 bg-accent-primary" />
          <span className="font-mono text-xl md:text-2xl text-text-secondary">
            {siteConfig.title}
          </span>
          <span className="inline-block w-2 h-2 bg-accent-primary" />
          <span className="inline-block w-4 h-4 bg-accent-primary" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="font-mono text-text-muted max-w-xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {siteConfig.tagline}
        </motion.p>

        {/* Pixel Art Decoration */}
        <motion.div
          className="flex justify-center gap-1 mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-accent-light"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-text-primary transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span className="font-mono text-sm">
          <span className="text-text-muted">[</span> SCROLL <span className="text-text-muted">]</span>
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}
