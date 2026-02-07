'use client';

import { motion } from 'framer-motion';
import { certifications, siteConfig } from '@/lib/data';
import { PixelBadge } from './ui/PixelBadge';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-bg-primary border-t-2 border-accent-light">
      <div className="max-w-6xl mx-auto">
        {/* Certifications Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-2 h-2 bg-accent-primary" />
            <span className="font-mono text-sm text-text-secondary">[ CERTIFICATIONS ]</span>
            <span className="w-2 h-2 bg-accent-primary" />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.id}
                href={cert.url || '#'}
                target={cert.url && cert.url !== '#' ? '_blank' : undefined}
                rel={cert.url && cert.url !== '#' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="cursor-pointer"
              >
                <PixelBadge variant="cert">{cert.name}</PixelBadge>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Pixel Decoration */}
        <motion.div
          className="flex justify-center gap-1 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[...Array(11)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 ${i % 2 === 0 ? 'bg-accent-primary' : 'bg-accent-light'}`}
            />
          ))}
        </motion.div>

        <div className="text-center">
          {/* Tech Stack */}
          <motion.p
            className="font-mono text-text-muted mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2">
              <span className="w-3 h-3 bg-accent-primary" />
              Built with
              <span className="text-text-secondary">[ Next.js + Framer Motion ]</span>
              <span className="w-3 h-3 bg-accent-primary" />
            </span>
          </motion.p>

          {/* Copyright */}
          <motion.p
            className="font-mono text-sm text-text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            &copy; {currentYear} {siteConfig.fullName} — Made in {siteConfig.location}
          </motion.p>

          {/* Source Code Link */}
          <motion.div
            className="mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="https://github.com/itsMeSaikrishna/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-text-muted hover:text-text-primary transition-colors"
            >
              {'// '}view source on GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
