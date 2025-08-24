'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Palette, Rocket, Search, TestTubeDiagonal, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Head from 'next/head';

const cards = [
  {
    Icon: Search,
    title: 'Discover & Understand',
    description:
      "We start by listening. Whether it's a new app idea or a website revamp, we dig deep into your goals, audience, and challenges.",
  },
  {
    Icon: Palette,
    title: 'Design & Prototype',
    description:
      "Our UI/UX team builds wireframes and visual prototypes to bring your idea to life — ensuring it’s both functional and beautiful.",
  },
  {
    Icon: Code,
    title: 'Build & Develop',
    description:
      "We write clean, scalable code using modern tech stacks — from mobile apps to web portals. You get regular updates and review links during development.",
  },
  {
    Icon: TestTubeDiagonal,
    title: 'Test & Iterate',
    description:
      "We run through device tests, use cases, and feedback loops. We fix bugs, polish the experience, and make sure it’s production-ready.",
  },
  {
    Icon: Rocket,
    title: 'Launch & Support',
    description:
      "We help you go live — whether it's on app stores, the web, or your own cloud infrastructure. Post-launch, we stick around for support, improvements, or scaling.",
  },
  {
    Icon: TrendingUp,
    title: 'Maintain & Evolve',
    description:
      "We offer regular updates, feature enhancements, and technical maintenance as your product grows and your audience expands.",
  },
];

export function DevelopmentProcessSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Software & Web Development Process",
    "description": "Step-by-step process for building high-quality apps and websites",
    "step": cards.map((card, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": card.title,
      "text": card.description,
    })),
  };

  return (
    <>
      <Head>
        <title>Our Development Process | Mystrymind Innovations</title>
        <meta
          name="description"
          content="Explore our step-by-step development process at Mystrymind Innovations — from discovery to design, development, testing, launch, and ongoing support. Learn how we create high-quality apps and websites."
        />
        <meta name="keywords" content="Development Process, Web Development, App Development, Software Development, UI/UX Design, Testing, Launch, Maintenance" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <section className="w-full py-8 md:py-12 bg-secondary" id="development-process">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl nav-text-gradient">
              Our Development Process
            </h1>
            <h2 className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              We keep it simple, collaborative, and fast — built to deliver quality results with clarity at every step.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {cards.map(({ Icon, title, description }, i) => {
              const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

              return (
                <motion.div
                  key={title}
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="h-full"
                >
                  <Card className="group text-center p-6 shadow-lg flex flex-col h-full">
                    <CardHeader className="p-0">
                      <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
                        <Icon className="h-8 w-8 text-primary group-hover:text-primary transition-colors" />
                      </div>
                      <CardTitle className="mb-2 text-xl group-hover:text-primary transition-colors">
                        {title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 mt-auto">
                      <p className="text-muted-foreground text-sm">{description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default DevelopmentProcessSection;
