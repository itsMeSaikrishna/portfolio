'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/lib/data';
import { PixelBox } from './ui/PixelBox';
import { SectionTitle } from './ui/SectionTitle';

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 px-4 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Experience</SectionTitle>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-1 bg-accent-light">
            <motion.div
              className="w-full bg-accent-primary"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </div>

          {/* Experience Cards */}
          <div className="space-y-12 ml-8 md:ml-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute -left-8 md:-left-12 top-6 w-4 h-4 bg-accent-primary"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                />

                {/* Connector Line */}
                <div className="absolute -left-4 md:-left-8 top-8 w-4 md:w-8 h-0.5 bg-accent-primary" />

                <PixelBox>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="font-mono text-xl font-bold text-text-primary">
                        {exp.company}
                      </h3>
                      <p className="font-mono text-text-secondary">{exp.role}</p>
                      {exp.location && (
                        <p className="font-mono text-sm text-text-muted">{exp.location}</p>
                      )}
                    </div>
                    <span className="font-mono text-sm text-text-muted mt-2 md:mt-0">
                      <span className="text-accent-primary">[</span>
                      {' '}{exp.duration}{' '}
                      <span className="text-accent-primary">]</span>
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        className="flex items-start gap-3 font-mono text-text-muted"
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + achIndex * 0.1 }}
                      >
                        <span className="text-accent-primary mt-1">{'>'}</span>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </PixelBox>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
