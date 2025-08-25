'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import type { TechStack } from '@/types/TechStack';
<<<<<<< HEAD

interface TechStackSectionProps {
  techStack?: TechStack[]; // make optional if needed
=======
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TechStackSectionProps {
  techStack?: TechStack[];
>>>>>>> main
}

export function TechStackSection({ techStack = [] }: TechStackSectionProps) {
  const { resolvedTheme } = useTheme();
<<<<<<< HEAD

  return (
    <section className="w-full py-8 md:py-12 bg-background" id="tech-stack">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl nav-text-gradient">
            Our Tech Stack
          </h2>
          <p className="text-muted-foreground mt-2">
            We use the latest and greatest technologies to build amazing products.
          </p>
        </div>
=======
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <section className="w-full py-8 md:py-12 bg-secondary" id="tech-stack">
      <div className="container px-4 md:px-6">
        {/* Animated heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl nav-text-gradient">
            Our Tech Stack
          </h1>
          <h2 className="text-muted-foreground mt-2">
            MystryMind company logo – trusted digital startup solutions. We use the latest technologies to build amazing products.
          </h2>
        </motion.div>

        {/* Marquee of tech stack */}
>>>>>>> main
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee">
            {[...techStack, ...techStack].map((tech, index) => (
              <div key={index} className="flex-shrink-0 mx-4 text-center">
                <div className="w-24 h-24 p-2 flex items-center justify-center">
                  <Image
                    src={resolvedTheme === 'dark' ? tech.iconDark : tech.iconLight}
<<<<<<< HEAD
                    alt={tech.name}
=======
                    alt={`MystryMind – ${tech.name} icon`}
                    title={`MystryMind – ${tech.name} technology`}
>>>>>>> main
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <p className="mt-2 text-sm font-semibold">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;
