"use client";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { services } from '@/data/services';

export function ServicesSection() {
  return (
    <section className="w-full bg-secondary py-8 md:py-12" id="services">
      <div className="container px-4 md:px-6 mx-auto lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl nav-text-gradient">Our Core Services</h2>
          <p className="text-muted-foreground mt-2">Offering revolutionizing technology solutions to make your business smarter</p>
        </div>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group service-card bg-card shadow-lg ${
                service.direction === 'left' ? 'animate-slide-in-from-left' : 'animate-slide-in-from-right'
              }`}
            >
              <Card className="h-full w-full bg-transparent border-0">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2 service-card-title text-base sm:text-lg md:text-xl lg:text-2xl">
                    <span className="nav-text-gradient flex items-center gap-2 whitespace-nowrap">
                      <service.icon className="text-primary" /> {service.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 font-semibold text-sm">{service.description}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
}
export default ServicesSection;