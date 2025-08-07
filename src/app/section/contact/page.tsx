"use client";

import { useState } from "react";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Rocket } from 'lucide-react';

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


  return (
    <section className="w-full py-8 md:py-12 bg-white" id="contact">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 items-start">
          <div className="space-y-8 animate-slide-in-from-left">
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
          </div>

          <Card className="animate-slide-in-from-right shadow-lg p-6 bg-white mt-8 md:mt-0">
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
        </div>
      </div>
    </section>
  );
}
export default ContactSection;