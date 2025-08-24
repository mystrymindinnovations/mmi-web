"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { HeroSection } from "@/app/(sections)/hero/page";
import { WhyChooseUsSection } from "@/app/(sections)/whyChooseUs/page";
import { DevelopmentProcessSection } from "@/app/(sections)/developmentProcess/page";
import { TechStackSection } from "@/app/(sections)/techStack/page";
import { techStack } from "@/data/techStack";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Mail,
  Phone,
 
  CheckCircle,
  ArrowRight,

} from "lucide-react";




import { motion } from "framer-motion";
import { BadgeCheck, Users, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

export function TrustSection() {
  const proofPoints = [
    {
      icon: <BadgeCheck className="h-8 w-8 text-primary" />,
      title: "Government-Recognized Startup",
      description: "Officially acknowledged by DPIIT for innovation and impact.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Founder-Led Team",
      description:
        "Passionate professionals driving every project with expertise.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Startup-First Approach",
      description:
        "Flexible, cost-effective, and growth-oriented solutions for small businesses and entrepreneurs.",
    },
  ];

  return (
    <section className="w-full py-8 md:py-12 bg-secondary" id="trust">
      <div className="container px-4 md:px-6">


<div className="text-center mb-12">
  <motion.h2
    className="text-3xl font-bold tracking-tighter sm:text-4xl nav-text-gradient"
    initial={{ opacity: 0, x: 80 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.4 }}
  >
    Trusted Digital Startup – Recognized & Reliable
  </motion.h2>

  <motion.p
    className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto"
    initial={{ opacity: 0, x: 80 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.4 }}
  >
    As a DPIIT-recognized Indian startup, MystryMind builds secure,
    scalable, and high-performance digital solutions for businesses
    ready to grow online. Our focus is on innovation, speed, and trust,
    making us the go-to partner for startups and SMEs.
  </motion.p>
</div>


        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
            Why trust MystryMind?
          </h3>
        </div>

        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3 items-stretch">
          {proofPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: 90, x: 50 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                rotate: [0, -2, 2, 0], // small tilt
                transition: { duration: 0.4 },
              }}
              className="h-full"
            >
              <Card className="h-full group text-center p-6 bg-card shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center justify-start">
                <div className="mb-4 bg-primary/10 rounded-full p-3 w-fit">
                  {point.icon}
                </div>
                <motion.h3
                  className="font-bold text-xl text-foreground mb-2"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                rotate: [0, -2, 2, 0], // small tilt
                transition: { duration: 0.4 },
              }}
                >
                  {point.title}
                </motion.h3>
                <motion.p
                  className="text-muted-foreground text-sm mt-auto"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                rotate: [0, -2, 2, 0], // small tilt
                transition: { duration: 0.4 },
              }}
                >
                  {point.description}
                </motion.p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}




// ✅ Problem Solution Section




export function ProblemSolutionSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Card Animation */}
        <motion.div
          className="max-w-3xl mx-auto text-center bg-card p-8 rounded-2xl shadow-2xl border"
          initial={{ opacity: 0, rotateX: -10, scale: 0.95 }}
          whileInView={{ opacity: 1, rotateX: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {/* Heading Animation */}
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl nav-text-gradient mb-4"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <span role="img" aria-label="alarm">
              🚨
            </span>{" "}
            Losing Customers at First Impression?
          </motion.h2>

          {/* Sub-heading */}
          <motion.h3
            className="text-xl font-semibold text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
          >
            Your brand’s look and feel decides if people stay or bounce.
          </motion.h3>

          {/* Paragraph */}
          <motion.p
            className="text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: false }}
          >
            We design and develop identities that attract, engage, and convert —
            across web, mobile, and digital touchpoints.
          </motion.p>

          {/* Motion-enhanced Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: false }}
          >
            <motion.div
              whileHover={{ rotate: -5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="inline-block"
            >
              <Button
                asChild
                size="lg"
                className="relative overflow-hidden bg-brand-orange text-white font-semibold transition-all duration-300 hover:from-blue-500 hover:to-indigo-600"
              >
                <Link href="/#contact" className="flex items-center">
                  Refresh your brand
                  <motion.span
                    className="ml-2 inline-block"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
              </Link>
            </Button>
          </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}




// ✅ Contact Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  category: z.string({ required_error: "Please select a category" }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

// ✅ Main Contact Section
export function MainContact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        const errorData = await response.json();
        alert(`Something went wrong: ${errorData.message}`);
      }
    } catch (error) {

      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");

    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <motion.section
      className="w-full py-8 md:py-12 bg-white"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      viewport={{ once: false }}
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 items-start">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            viewport={{ once: false }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl nav-text-gradient leading-tight flex items-center gap-2">
                Let’s Build Something That Lasts
              </h2>
              <p
                className="mt-4 text-muted-foreground text-lg"
                style={{ lineHeight: "1.7" }}
              >
                Your customers are online. Your brand deserves to shine there.
                We’ll help you grow with tech that earns trust & drives results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: false }}
            >
              <Button
                asChild
                size="lg"
                className="btn-gradient group w-fit transform transition-all duration-300 hover:rotate-3 hover:scale-105"
              >
                <Link href="/contact">
                  Talk to an Expert
                  <motion.span
                    className="ml-2 inline-block"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    viewport={{ once: false }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false }}
            >
              <h3 className="text-xl font-semibold mb-4">
                Or Contact Us Directly
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-lg">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href="mailto:hello@mystrymind.tech"
                    className="hover:underline text-muted-foreground text-base"
                  >
                    team@mystrymind.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-lg">
                  <Phone className="h-5 w-5 text-primary" />
                  <a
                    href="tel:9082069773"
                    className="hover:underline text-muted-foreground text-base"
                  >
                    9082069773
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            viewport={{ once: false }}
          >
            <Card className="shadow-lg p-6 bg-white mt-8 md:mt-0">
              {isSubmitted ? (
                <motion.div
                  className="text-center flex flex-col items-center justify-center h-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: false }}
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold nav-text-gradient">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    Your message has been sent successfully. We'll be in touch
                    soon.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 btn-gradient transform transition-all hover:rotate-3 hover:scale-105"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <Input placeholder="Name" {...register("name")} />
                  {errors.name && (
                    <p className="text-red-500 text-xs">{errors.name.message}</p>
                  )}

                  <Input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">
                      {errors.email.message}
                    </p>
                  )}

                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs">
                      {errors.phone.message}
                    </p>
                  )}

                  <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose your category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Mobile App Development">
                            Mobile App Development
                          </SelectItem>
                          <SelectItem value="Website Development">
                            Website Development
                          </SelectItem>
                          <SelectItem value="UI/UX & Graphic Design">
                            UI/UX & Graphic Design
                          </SelectItem>
                          <SelectItem value="SEO & Digital Presence">
                            SEO & Digital Presence
                          </SelectItem>
                          <SelectItem value="Maintenance & Support">
                            Maintenance & Support
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.category && (
                    <p className="text-red-500 text-xs">
                      {errors.category.message}
                    </p>
                  )}

                  <Textarea placeholder="Message" {...register("message")} />
                  {errors.message && (
                    <p className="text-red-500 text-xs">
                      {errors.message.message}
                    </p>
                  )}


                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                  >
                    <Button
                      type="submit"
                      className="w-full btn-gradient text-accent-foreground transform transition-all hover:rotate-3 hover:scale-105"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                      <Rocket className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}




// ✅ Main Page Component
export default function Home() {
  return (
    <>

      <Head>
        <title>MystryMind – Digital Solutions</title>
      </Head>

      <HeroSection />
      <TrustSection />
      <WhyChooseUsSection />

      <DevelopmentProcessSection />
      <ProblemSolutionSection />
      <TechStackSection techStack={techStack} />
      <MainContact />
    </>
  );
}
