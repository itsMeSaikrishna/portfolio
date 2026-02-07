'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/lib/data';
import { PixelBox } from './ui/PixelBox';
import { PixelBadge } from './ui/PixelBadge';
import { PixelButton } from './ui/PixelButton';
import { SectionTitle } from './ui/SectionTitle';

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Projects</SectionTitle>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <PixelBox className="h-full flex flex-col">
                {/* Project Image Placeholder */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block mb-6 h-48 bg-bg-secondary shadow-pixel-sm overflow-hidden group cursor-pointer"
                >
                  {/* Pixel Pattern */}
                  <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-0.5 p-4">
                    {[...Array(48)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="bg-accent-light"
                        initial={{ opacity: 0.2 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.1 }}
                      />
                    ))}
                  </div>

                  {/* Hover Overlay */}
                  <div
                    className="absolute inset-0 bg-accent-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="font-mono text-white text-lg">
                      [ VIEW PROJECT ]
                    </span>
                  </div>

                  {/* Project Number */}
                  <div className="absolute top-2 left-2 font-mono text-xs text-text-muted">
                    {'// '}PROJECT_{String(project.id).padStart(2, '0')}
                  </div>
                </a>

                {/* Project Info */}
                <div className="flex-1 flex flex-col">
                  <h3 className="font-mono text-xl font-bold text-text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="font-mono text-text-muted mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <PixelBadge key={tech}>{tech}</PixelBadge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.demoUrl && project.demoUrl !== '#' && (
                      <PixelButton href={project.demoUrl} external className="flex-1">
                        <ExternalLink size={16} />
                        <span>DEMO</span>
                      </PixelButton>
                    )}
                    <PixelButton href={project.githubUrl} external variant="secondary" className={project.demoUrl && project.demoUrl !== '#' ? 'flex-1' : 'w-full'}>
                      <Github size={16} />
                      <span>CODE</span>
                    </PixelButton>
                  </div>
                </div>
              </PixelBox>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
