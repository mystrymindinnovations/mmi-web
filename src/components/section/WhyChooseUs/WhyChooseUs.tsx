
import { Card, CardTitle, CardDescription } from '@/components/ui/card';
import { Brain, Briefcase, Search, Shield, TrendingUp } from 'lucide-react';

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="w-full bg-background py-8 md:py-12">
    <div className="relative h-15">
        <svg
          className="absolute top-0 w-full h-full text-secondary"
          viewBox="0 0 1440 30"
          preserveAspectRatio="none"
          style={{ transform: 'scaleY(-1)' }}
        >
          <defs>
            <linearGradient id="top-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00B2FF">
                    <animate attributeName="stop-color" values="#00B2FF; #FFA41B; #00B2FF" dur="10s" repeatCount="indefinite"></animate>
                </stop>
                <stop offset="100%" stopColor="#5A36FF">
                    <animate attributeName="stop-color" values="#5A36FF; #D46B00; #5A36FF" dur="10s" repeatCount="indefinite"></animate>
                </stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#top-wave-gradient)"
            d="M1440,21 C1200,21 1080,9 720,9 C360,9 240,21 0,21 L0,30 L1440,30 L1440,21 Z"
          />
          <path
            className="opacity-50"
            fill="url(#top-wave-gradient)"
            d="M1440,15 C1200,15 1080,3 720,3 C360,3 240,15 0,15 L0,30 L1440,30 L1440,15 Z"
          />
          <path
            className="opacity-25"
            fill="url(#top-wave-gradient)"
            d="M1440,9 C1200,9 1080,0 720,0 C360,0 240,9 0,9 L0,30 L1440,30 L1440,9 Z"
          />
        </svg>
      </div>
      <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl nav-text-gradient">
                WHY CHOOSE US
              </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="group service-card bg-card shadow-lg animate-slide-in-from-left">
                <Card className="text-center p-4 bg-transparent border-0 h-full">
                    <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-2">
                        <Search className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-1">Discovery-Led Development</CardTitle>
                    <CardDescription>Strategy, design & tech with purpose</CardDescription>
                </Card>
              </div>
              <div className="group service-card bg-card shadow-lg animate-slide-in-from-right">
                <Card className="text-center p-4 bg-transparent border-0 h-full">
                    <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-2">
                        <Briefcase className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-1">Dedicated Expertise</CardTitle>
                    <CardDescription>Agile teams for startups & enterprises</CardDescription>
                </Card>
              </div>
              <div className="group service-card bg-card shadow-lg animate-slide-in-from-left">
                <Card className="text-center p-4 bg-transparent border-0 h-full">
                    <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-2">
                        <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-1">Performance Focused</CardTitle>
                    <CardDescription>Speed, usability, ROI at the core</CardDescription>
                </Card>
              </div>
              <div className="group service-card bg-card shadow-lg animate-slide-in-from-right">
                <Card className="text-center p-4 bg-transparent border-0 h-full">
                    <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-2">
                        <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-1">Security-First</CardTitle>
                    <CardDescription>Industry best practices for data protection</CardDescription>
                </Card>
              </div>
          </div>
      </div>
      <div className="container px-4 md:px-6 mt-12 relative">
        <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg overflow-hidden">
          <div className="p-6 text-center">
            <h3 className="text-3xl font-bold flex items-center justify-center gap-2"><Brain className="h-8 w-8" /> BRAND PHILOSOPHY</h3>
            <p className="mt-2 text-2xl font-semibold">“Let’s Make Tech Less Mysterious”</p>
            <blockquote className="mt-1 text-lg italic">Every product starts with a clear purpose and ends with measurable impact.</blockquote>
          </div>
        </div>
      </div>
     
    </section>
  );
}
