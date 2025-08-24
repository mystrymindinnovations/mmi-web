'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { services } from '@/data/services';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/useInView';

export function ServiceSection() {
  return (
    <section
      className="w-full overflow-x-hidden bg-secondary py-8 md:py-12" // ✅ Prevent horizontal scroll
      id="service"
    >
      <div className="container max-w-full px-4 md:px-6 mx-auto"> {/* ✅ Ensure container doesn't overflow */}
        {/* Header */}
        <div className="text-center mb-12">

          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl nav-text-gradient">
            What We Build
          </h1>
          <h2 className="text-muted-foreground mt-2">
            From entrepreneurs to growing businesses — we help you launch fast and scale stronger.
          </h2>

        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => {
            const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

            return (
              <div
                key={index}
                ref={ref}
                className={cn(
                  'group service-card bg-card shadow-lg transition-transform duration-700 ease-out',
                  {
                    'opacity-100 translate-x-0': inView,
                    'opacity-0': !inView,
                    'translate-x-[-20px]': !inView && service.direction === 'left', // ✅ Reduced from -50px
                    'translate-x-[20px]': !inView && service.direction === 'right', // ✅ Reduced from 50px
                  }
                )}
              >
                <Card className="h-full w-full bg-transparent border-0">
                  <CardHeader className="text-center">
                    <CardTitle className="flex items-center justify-center gap-2 service-card-title text-base sm:text-lg md:text-xl lg:text-2xl">
                      {/* ✅ Removed whitespace-nowrap to allow wrapping */}
                      <span className="nav-text-gradient flex items-center gap-2">
                        <service.icon className="text-primary" /> {service.title}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 font-semibold text-sm">
                      {service.description}
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="text-primary h-4 w-4" /> {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
