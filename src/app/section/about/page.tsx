'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckSquare, Eye, Handshake, Heart, TrendingUp } from 'lucide-react';

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
    <section className="w-full py-8 md:py-8 bg-gradient-to-r from-brand-blue to-brand-blue-dark animated-gradient text-primary-foreground" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary-foreground">
                Who We Are
            </h2>
            <p className="mt-2 text-xl font-semibold bg-gradient-to-r from-brand-orange to-brand-orange-light bg-clip-text text-transparent">Where Innovation Meets Intelligence</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-from-left">
                <p className="text-lg text-center text-primary-foreground/90 leading-relaxed">
                    At MystryMind, we're a team of thinkers, doers, and problem-solvers united by a common goal — to decode complexity and build digital experiences that matter. Founded on the belief that technology should be an enabler, not a mystery, we exist to simplify the journey from idea to impact.
                </p>
                <p className="text-lg text-center text-primary-foreground/90 leading-relaxed">
                    With a multidisciplinary team of developers, designers, strategists, and technologists, we partner with forward-thinking startups, ambitious entrepreneurs, and scaling enterprises to create purpose-driven digital products.
                </p>
                <p className="text-lg text-center text-primary-foreground/90 leading-relaxed">
                    Whether it's mobile apps, complex web platforms, or scalable enterprise solutions — we bring the perfect mix of strategy, creativity, and technology to every project.
                </p>
            </div>
            <div className="space-y-8 animate-slide-in-from-right">
                <h3 className="text-2xl font-bold text-primary-foreground flex items-center justify-center md:justify-start gap-2 mb-6">
                    <CheckSquare className="h-6 w-6" /> What Drives Us?
                </h3>
                <div className="grid grid-cols-1 gap-4">
                   <div className="group service-card bg-primary-foreground/10 shadow-lg rounded-lg">
                      <Card className="h-full w-full bg-transparent border-0 p-4">
                          <div className="flex items-start gap-4">
                              <div className="bg-primary-foreground/10 rounded-full p-2">
                                  <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-6 w-6 text-primary-foreground"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <circle cx="12" cy="12" r="6" />
                                        <circle cx="12" cy="12" r="2" />
                                    </svg>
                              </div>
                              <div>
                                  <h4 className="font-semibold text-lg">Purpose Over Hype</h4>
                                  <p className="text-primary-foreground/80 text-sm">We don't chase trends. We build solutions grounded in real user needs and business goals.</p>
                              </div>
                          </div>
                      </Card>
                   </div>
                   <div className="group service-card bg-primary-foreground/10 shadow-lg rounded-lg">
                      <Card className="h-full w-full bg-transparent border-0 p-4">
                         <div className="flex items-start gap-4">
                            <div className="bg-primary-foreground/10 rounded-full p-2">
                                <Handshake className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Partnership-First Approach</h4>
                                <p className="text-primary-foreground/80 text-sm">We don’t work for you, we work with you — collaborating closely from ideation to execution.</p>
                            </div>
                          </div>
                      </Card>
                   </div>
                    <div className="group service-card bg-primary-foreground/10 shadow-lg rounded-lg">
                      <Card className="h-full w-full bg-transparent border-0 p-4">
                          <div className="flex items-start gap-4">
                              <div className="bg-primary-foreground/10 rounded-full p-2">
                                  <TrendingUp className="h-6 w-6 text-primary-foreground" />
                              </div>
                              <div>
                                  <h4 className="font-semibold text-lg">Passion for Performance</h4>
                                  <p className="text-primary-foreground/80 text-sm">Every line of code and pixel is crafted for speed, usability, and long-term scalability.</p>
                              </div>
                          </div>
                      </Card>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 gap-8 text-center">
           <div className="group service-card bg-gradient-to-br from-brand-blue to-brand-blue-dark shadow-lg animate-slide-in-from-left rounded-lg text-primary-foreground">
              <Card className="h-full w-full bg-transparent border-0 p-6">
                  <CardHeader>
                      <div className="mx-auto mb-4">
                          <TargetIcon />
                      </div>
                      <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
                        <Heart className="text-blue-300" fill="currentColor" /> Our Mission
                      </CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p className="text-lg text-primary-foreground/90">To empower startups, businesses, and enterprises by delivering intelligent, performance-driven digital solutions that solve real-world problems.</p>
                  </CardContent>
              </Card>
            </div>
            <div className="group service-card bg-gradient-to-br from-brand-orange to-brand-orange-light shadow-lg animate-slide-in-from-right rounded-lg text-primary-foreground">
              <Card className="h-full w-full bg-transparent border-0 p-6">
                  <CardHeader>
                      <div className="mx-auto mb-4">
                          <Eye className="h-12 w-12" />
                      </div>
                      <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
                         <span>🚀</span> Our Vision
                      </CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p className="text-lg text-primary-foreground/90">To become a trusted global tech partner known for innovation, creativity, and technical excellence.</p>
                  </CardContent>
              </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
export default AboutPage;
