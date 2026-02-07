'use client';

import { motion } from 'framer-motion';
import { education } from '@/lib/data';
import { PixelBox } from './ui/PixelBox';
import { SectionTitle } from './ui/SectionTitle';

export function Education() {
  return (
    <section id="education" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Education</SectionTitle>

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

          {/* Education Cards */}
          <div className="space-y-12 ml-8 md:ml-20">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
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
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="font-mono text-xl font-bold text-text-primary">
                        {edu.institution}
                      </h3>
                      <p className="font-mono text-text-secondary">{edu.degree}</p>
                      {edu.gpa && (
                        <p className="font-mono text-sm text-text-muted mt-1">
                          <span className="text-accent-primary">GPA:</span> {edu.gpa}
                        </p>
                      )}
                    </div>
                    <span className="font-mono text-sm text-text-muted mt-2 md:mt-0">
                      <span className="text-accent-primary">[</span>
                      {' '}{edu.duration}{' '}
                      <span className="text-accent-primary">]</span>
                    </span>
                  </div>

                  {edu.courses && (
                    <div>
                      <p className="font-mono text-sm text-text-muted mb-3">
                        {'// '}Relevant Courses
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, courseIndex) => (
                          <motion.span
                            key={courseIndex}
                            className="font-mono text-xs px-3 py-1.5 bg-bg-secondary text-text-secondary shadow-pixel-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + courseIndex * 0.05 }}
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </PixelBox>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
