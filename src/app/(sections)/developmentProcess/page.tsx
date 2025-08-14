'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Palette, Rocket, Search, TestTubeDiagonal, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const cards = [
  {
    Icon: Search,
    title: 'Discover & Understand',
    description:
      "We start by listening. Whether it's a new app idea or a website revamp, we dig deep into your goals, audience, and challenges.",
    animation: 'left',
  },
  {
    Icon: Palette,
    title: 'Design & Prototype',
    description:
      "Our UI/UX team builds wireframes and visual prototypes to bring your idea to life — ensuring it’s both functional and beautiful.",
    animation: 'right',
  },
  {
    Icon: Code,
    title: 'Build & Develop',
    description:
      "We write clean, scalable code using modern tech stacks — from mobile apps to web portals. You get regular updates and review links during development.",
    animation: 'left',
  },
  {
    Icon: TestTubeDiagonal,
    title: 'Test & Iterate',
    description:
      "We run through device tests, use cases, and feedback loops. We fix bugs, polish the experience, and make sure it’s production-ready.",
    animation: 'right',
  },
  {
    Icon: Rocket,
    title: 'Launch & Support',
    description:
      "We help you go live — whether it's on app stores, the web, or your own cloud infrastructure. Post-launch, we stick around for support, improvements, or scaling.",
    animation: 'left',
  },
  {
    Icon: TrendingUp,
    title: 'Maintain & Evolve',
    description:
      "We offer regular updates, feature enhancements, and technical maintenance as your product grows and your audience expands.",
    animation: 'right',
  },
];

export function DevelopmentProcessSection() {
  return (
    <section className="w-full py-8 md:py-12 bg-secondary" id="development-process">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl nav-text-gradient">
            Our Development Process
          </h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            We keep it simple, collaborative, and fast — built to deliver quality results with clarity at every step.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ Icon, title, description, animation }, i) => {
            const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

            const initialProps =
              animation === 'left'
                ? { opacity: 0, x: -50 }
                : { opacity: 0, x: 50 };

            return (
              <motion.div
                key={title}
                ref={ref}
                initial={initialProps}
                animate={inView ? { opacity: 1, x: 0 } : initialProps}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Card className="group text-center p-6 shadow-lg">
                  <CardHeader className="p-0">
                    <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
                      <Icon className="h-8 w-8 text-primary group-hover:text-primary transition-colors" />
                    </div>
                    <CardTitle className="mb-2 text-xl group-hover:text-primary transition-colors">{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground text-sm">{description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default DevelopmentProcessSection;
