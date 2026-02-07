'use client';

import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Twitter } from 'lucide-react';
import { socialLinks, siteConfig } from '@/lib/data';
import { PixelBox } from './ui/PixelBox';
import { SectionTitle } from './ui/SectionTitle';

const iconMap: Record<string, React.ReactNode> = {
  linkedin: <Linkedin size={24} />,
  github: <Github size={24} />,
  mail: <Mail size={24} />,
  twitter: <Twitter size={24} />,
};

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 bg-bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <SectionTitle>Get In Touch</SectionTitle>

        <motion.p
          className="font-mono text-text-muted mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Have a project in mind or want to collaborate? Feel free to reach out.
          I&apos;m always open to discussing new opportunities.
        </motion.p>

        <PixelBox className="inline-block" hover={false}>
          <div className="grid grid-cols-3 gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-bg-secondary hover:bg-accent-primary group transition-colors duration-300 shadow-pixel-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-text-primary group-hover:text-white transition-colors">
                  {iconMap[link.icon]}
                </span>
                <span className="font-mono text-sm text-text-muted group-hover:text-white transition-colors">
                  {link.name.toUpperCase()}
                </span>
              </motion.a>
            ))}
          </div>
        </PixelBox>

        {/* Email CTA */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-mono text-text-muted mb-4">Or send me an email directly:</p>
          <motion.a
            href={`mailto:${siteConfig.email}`}
            className="inline-block font-mono text-lg text-text-primary hover:text-accent-hover transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-text-muted">[</span>
            {' '}{siteConfig.email}{' '}
            <span className="text-text-muted">]</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
