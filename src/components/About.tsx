'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { siteConfig, skills } from '@/lib/data';
import { PixelBox } from './ui/PixelBox';
import { PixelBadge } from './ui/PixelBadge';
import { SectionTitle } from './ui/SectionTitle';
import { ScrollAnimation } from './ui/ScrollAnimation';

export function About() {
  // Set to true and add your image to public/images/profile.jpg
  const hasProfileImage = true;

  return (
    <section id="about" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>About Me</SectionTitle>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio Card */}
          <ScrollAnimation direction="left">
            <PixelBox className="h-full">
              {/* Profile Image */}
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 bg-bg-secondary shadow-pixel overflow-hidden">
                    {hasProfileImage ? (
                      <img
                        src="/images/profile.jpg"
                        alt={siteConfig.name}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-accent-light">
                        <User size={48} className="text-text-muted" />
                      </div>
                    )}
                  </div>
                  {/* Pixel decoration */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-primary" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent-primary" />
                </div>
              </div>

              <h3 className="font-mono text-xl font-bold text-text-primary mb-2 text-center">
                {siteConfig.name}
              </h3>
              <p className="font-mono text-text-secondary text-center mb-2">
                {siteConfig.title}
              </p>
              <p className="font-mono text-sm text-text-muted text-center mb-6">
                {siteConfig.location}
              </p>
              <p className="font-mono text-text-muted leading-relaxed whitespace-pre-line">
                {siteConfig.bio}
              </p>
            </PixelBox>
          </ScrollAnimation>

          {/* Skills */}
          <ScrollAnimation direction="right" delay={0.2}>
            <div className="space-y-6">
              {skills.map((skillGroup, groupIndex) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIndex * 0.1 }}
                >
                  <h4 className="font-mono text-sm text-text-muted mb-3">
                    {'// '}{skillGroup.category.toUpperCase()}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: groupIndex * 0.1 + skillIndex * 0.05 }}
                      >
                        <PixelBadge>{skill}</PixelBadge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
