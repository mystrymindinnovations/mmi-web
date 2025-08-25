'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckSquare, Handshake, TrendingUp, Heart, Eye } from 'lucide-react';

function AnimatedCard({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false, // triggers every time in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <circle cx="24" cy="24" r="20" fill="#FFA41B" fillOpacity="0.2" />
      <circle cx="24" cy="24" r="16" fill="#FFA41B" fillOpacity="0.3" />
      <circle cx="24" cy="24" r="12" fill="#007BFF" />
      <circle cx="24" cy="24" r="8" fill="#FFA41B" />
      <circle cx="24" cy="24" r="4" fill="#007BFF" />
    </svg>
  );
}


export function AboutPage() {
  return (
    <section
      className="w-full py-8 md:py-12 bg-gradient-to-r from-brand-blue to-brand-blue-dark text-primary-foreground"
      id="about"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Who We Are
          </h1>
          <h2 className="mt-2 text-xl font-semibold bg-gradient-to-r from-brand-orange to-brand-orange-light bg-clip-text text-transparent">
            Where Innovation Meets Intelligence
          </h2>
        </div>

        {/* About text */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <AnimatedCard delay={0}>
              <p className="text-lg text-center md:text-left text-primary-foreground/90 leading-relaxed">
                At MystryMind, we're a team of thinkers, doers, and problem-solvers united by a common goal — to decode complexity and build digital experiences that matter.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.1}>
              <p className="text-lg text-center md:text-left text-primary-foreground/90 leading-relaxed">
                With a multidisciplinary team of developers, designers, strategists, and technologists, we partner with forward-thinking startups, ambitious entrepreneurs, and scaling enterprises.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <p className="text-lg text-center md:text-left text-primary-foreground/90 leading-relaxed">
                Whether it's mobile apps, complex web platforms, or scalable enterprise solutions — we bring the perfect mix of strategy, creativity, and technology.
              </p>
            </AnimatedCard>
          </div>

          {/* What Drives Us Cards */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center justify-center md:justify-start gap-2 mb-6">
              <CheckSquare className="h-6 w-6" /> What Drives Us?
            </h3>

            <div className="grid grid-cols-1 gap-4">
              <AnimatedCard delay={0.1}>
                <Card className="h-full bg-primary-foreground/10 border-0 p-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-foreground/10 rounded-full p-2">
                      <CheckSquare className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Purpose Over Hype</h4>
                      <p className="text-sm text-primary-foreground/80">
                        We don't chase trends. We build solutions grounded in real user needs and business goals.
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.2}>
                <Card className="h-full bg-primary-foreground/10 border-0 p-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-foreground/10 rounded-full p-2">
                      <Handshake className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Partnership-First Approach</h4>
                      <p className="text-sm text-primary-foreground/80">
                        We don’t work for you, we work with you — collaborating closely from ideation to execution.
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.3}>
                <Card className="h-full bg-primary-foreground/10 border-0 p-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-foreground/10 rounded-full p-2">
                      <TrendingUp className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Passion for Performance</h4>
                      <p className="text-sm text-primary-foreground/80">
                        Every line of code and pixel is crafted for speed, usability, and scalability.
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimatedCard>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 text-center">
          <AnimatedCard delay={0.1}>
            <Card className="h-full bg-gradient-to-br from-brand-blue to-brand-blue-dark border-0 p-6 text-primary-foreground transition-transform duration-300 transform hover:scale-105 hover:shadow-xl rounded-lg">
              <CardHeader>
                <Heart className="h-12 w-12 mx-auto text-blue-300" />
                <CardTitle className="text-2xl font-bold mt-2">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  To empower startups, businesses, and enterprises by delivering intelligent, performance-driven digital solutions.
                </p>
              </CardContent>
            </Card>
          </AnimatedCard>

          <AnimatedCard delay={0.2}>
            <Card className="h-full bg-gradient-to-br from-brand-orange to-brand-orange-light border-0 p-6 text-primary-foreground transition-transform duration-300 transform hover:scale-105 hover:shadow-xl rounded-lg">
              <CardHeader>
                <Eye className="h-12 w-12 mx-auto" />
                <CardTitle className="text-2xl font-bold mt-2">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  To become a trusted global tech partner known for innovation, creativity, and technical excellence.
                </p>
              </CardContent>
            </Card>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;