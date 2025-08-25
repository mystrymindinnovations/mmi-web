"use client";
import { motion } from "framer-motion";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Rocket, Brain,Timer, BarChart3, Shield } from "lucide-react";

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="w-full bg-background py-8 md:py-12">
      {/* Top wave animation stays */}
      <div className="relative h-15">
        {/* svg as you already have */}
      </div>

      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl nav-text-gradient">
            Why Partner with Us?
          </h1>
          <h2 className="mt-3 text-lg text-muted-foreground">
            Because we don’t just deliver projects — we create growth-ready
            solutions.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
             {
              Icon: Shield,
              title: "Speed, Security & SEO",
              desc: "High-performance, secure & optimized by default",
            },
            {
              Icon: Timer,
              title: "Startup Pace",
              desc: "Launch in weeks, not months",
            },
            {
              Icon: Rocket,
              title: "Transparent Delivery",
              desc: "Weekly updates & clear milestones",
            },
            {
              Icon: BarChart3,
              title: "Design + Tech to Convert",
              desc: "Customer-focused experiences that drive growth",
            },
          ].map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="group service-card bg-card shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }} // 👈 optional smooth exit animation
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ amount: 0.2 }} // 👈 triggers every time 20% is visible
            >
              <Card className="text-center p-4 bg-transparent border-0 h-full">
                <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-2">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-1">{title}</CardTitle>
                <CardDescription>{desc}</CardDescription>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      
    </section>
  );
}

export default WhyChooseUsSection;