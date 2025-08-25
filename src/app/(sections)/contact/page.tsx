'use client';

import { useState } from "react";
<<<<<<< HEAD
=======
import Head from "next/head"; // ✅ For SEO meta tags
import Link from "next/link";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
>>>>>>> main
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
<<<<<<< HEAD
import { Mail, Phone, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", category: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again later.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  const categoryOptions = [
    { value: "Mobile App Development", key: "mobile" },
    { value: "Website Development", key: "web" },
    { value: "UI/UX & Graphic Design", key: "uiux" },
    { value: "SEO & Digital Presence", key: "seo" },
    { value: "Maintenance & Support", key: "maintenance" },
  ];

  const [leftRef, leftInView] = useInView({ threshold: 0.1, triggerOnce: false });
  const [rightRef, rightInView] = useInView({ threshold: 0.1, triggerOnce: false });

  return (
    <section className="w-full py-8 md:py-12 bg-white" id="contact">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 items-start">

          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -50 }}
            animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl nav-text-gradient leading-tight">
                Ready to Build Something Smart?
              </h2>
              <p className="mt-2 text-muted-foreground" style={{ lineHeight: '1.7' }}>
                Let's talk about how we can bring your ideas to life. Start with a free consultation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Schedule a Call</h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-lg">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:team@mystrymind.com" className="hover:underline text-muted-foreground text-base">
                    team@mystrymind.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-lg">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:9082069773" className="hover:underline text-muted-foreground text-base">
                    9082069773
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 50 }}
            animate={rightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="shadow-lg p-6 bg-white mt-8 md:mt-0">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input placeholder="Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
                <Input type="email" placeholder="Email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
                <Select onValueChange={(value) => setFormData({ ...formData, category: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categoryOptions.map((option) => (
                      <SelectItem key={option.key} value={option.value}>
                        {option.value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} required />
                <Textarea placeholder="Message" value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} required />
                <Button type="submit" className="w-full btn-gradient text-accent-foreground">
                  Submit Inquiry <Rocket className="ml-2 h-4 w-4" />
                </Button>
                {status && <p className="text-sm text-muted-foreground">{status}</p>}
              </form>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;
=======
import { Mail, Phone, Rocket, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  category: z.string({ required_error: "Please select a category" }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

// ✅ Contact Section with Animation + SEO
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
        headers: { "Content-Type": "application/json" },
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
    <>
      {/* ✅ SEO META TAGS */}
      <Head>
        <title>Contact MystryMind | Website & App Development Company in Noida</title>
        <meta
          name="description"
          content="Get in touch with MystryMind – Top Website Development, Mobile App Development, UI/UX Design & Digital Marketing Company in Noida. Let's build your digital presence today."
        />
        <meta
          name="keywords"
          content="Contact MystryMind, Website Development Noida, Mobile App Development, UI/UX Design, Digital Marketing, SEO Services, IT Company in India"
        />
        <meta property="og:title" content="Contact MystryMind | Digital Transformation Partner" />
        <meta
          property="og:description"
          content="Reach out to MystryMind for Website Development, Mobile Apps, UI/UX Design & Digital Marketing. Start your digital journey with us."
        />
        <meta property="og:url" content="https://mystrymind.com/contact" />
        <meta property="og:type" content="website" />
      </Head>

      {/* ✅ CONTACT SECTION */}
      <section className="w-full py-8 md:py-12 bg-white" id="contact">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            
            {/* LEFT CONTENT (Animated from Right) */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl nav-text-gradient leading-tight flex items-center gap-2">
               Let’s Build Something That Lasts
              </h1>
              <h2
                className="mt-4 text-muted-foreground text-lg"
                style={{ lineHeight: "1.7" }}
              >
                Your customers are online. Your brand deserves to shine there.
                We’ll help you grow with tech that earns trust & drives results.
              </h2>

              <Button asChild size="lg" className="btn-gradient group w-fit">
                <Link href="/contact">
                  Talk to an Expert
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <div>
                <h2 className="text-xl font-semibold mb-4">Or Contact Us Directly</h2>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-lg">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:hello@mystrymind.tech" className="hover:underline text-muted-foreground text-base">
                      team@mystrymind.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:9082069773" className="hover:underline text-muted-foreground text-base">
                      9082069773
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT FORM (Animated from Left) */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg p-6 bg-white mt-8 md:mt-0">
                {isSubmitted ? (
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold nav-text-gradient">Thank You!</h3>
                    <p className="text-muted-foreground mt-2">
                      Your message has been sent successfully. We'll be in touch soon.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} className="mt-6 btn-gradient">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <Input placeholder="Name" {...register("name")} />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}

                    <Input type="email" placeholder="Email" {...register("email")} />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}

                    <Input type="tel" placeholder="Phone Number" {...register("phone")} />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}

                    <Controller
                      name="category"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose your category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Mobile App Development">Mobile App Development</SelectItem>
                            <SelectItem value="Website Development">Website Development</SelectItem>
                            <SelectItem value="UI/UX & Graphic Design">UI/UX & Graphic Design</SelectItem>
                            <SelectItem value="SEO & Digital Presence">SEO & Digital Presence</SelectItem>
                            <SelectItem value="Maintenance & Support">Maintenance & Support</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.category && <p className="text-red-500 text-xs">{errors.category.message}</p>}

                    <Textarea placeholder="Message" {...register("message")} />
                    {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}

                    <Button
                      type="submit"
                      className="w-full btn-gradient text-accent-foreground"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                      <Rocket className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainContact;
>>>>>>> main
