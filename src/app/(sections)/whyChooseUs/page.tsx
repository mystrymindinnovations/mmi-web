"use client";
import { motion } from "framer-motion";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Brain, Briefcase, Search, Shield, TrendingUp } from "lucide-react";

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="w-full bg-background py-8 md:py-12">
      {/* Top wave animation stays */}
      <div className="relative h-15">
        {/* svg as you already have */}
      </div>

      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl nav-text-gradient">
            WHY CHOOSE US
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              Icon: Search,
              title: "Discovery-Led Development",
              desc: "Strategy, design & tech with purpose",
            },
            {
              Icon: Briefcase,
              title: "Dedicated Expertise",
              desc: "Agile teams for startups & enterprises",
            },
            {
              Icon: TrendingUp,
              title: "Performance Focused",
              desc: "Speed, usability, ROI at the core",
            },
            {
              Icon: Shield,
              title: "Security-First",
              desc: "Industry best practices for data protection",
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

      {/* Brand philosophy with fade-in */}
      <motion.div
        className="container px-4 md:px-6 mt-12 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }} // 👈 fades out when leaving
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ amount: 0.3 }} // 👈 replays every time it’s in view
      >
        <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg overflow-hidden">
          <div className="p-6 text-center">
            <h3 className="text-3xl font-bold flex items-center justify-center gap-2">
              <Brain className="h-8 w-8" /> BRAND PHILOSOPHY
            </h3>
            <p className="mt-2 text-2xl font-semibold">
              “Let’s Make Tech Less Mysterious”
            </p>
            <blockquote className="mt-1 text-lg italic">
              Every product starts with a clear purpose and ends with measurable
              impact.
            </blockquote>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default WhyChooseUsSection;
