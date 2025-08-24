// data/services.ts
import { Smartphone, Globe,  SearchCode, Wrench, Paintbrush ,Cpu } from "lucide-react";
import type { Service } from "@/types/Service";



export const services: Service[] = [
  {
    title: "Mobile App Development",
    description: "Smooth, scalable, and user-friendly apps.",
    icon: Smartphone,
    direction: "left",
    features: [
      "Native & cross-platform (Flutter, Kotlin)",
      "End-to-end development (Design → Deployment)",
      "Firebase, REST APIs, MongoDB integrations",
      "App store publishing support",
    ],
  },
  {
    title: "Web Development",
    description: "SEO-focused, lightning-fast websites.",
    icon: Globe,
    direction: "right",
    features: [
      "Static & dynamic websites (Next.js, React)",
      "CMS or Headless CMS integration (WordPress, Strapi)",
      "SEO-optimized architecture",
      "Deployment & maintenance (Vercel, Render)",
    ],
  },
 {
  title: "AI & Cloud",
  description: "Automations and infrastructure built for growth.",
  icon: Cpu, // or Cloud if you want to emphasize hosting
  direction: "right",
  features: [
    "AI-powered chatbots & assistants",
    "Workflow automation & integration",
    "Cloud migration & deployment",
    "Scalable infrastructure setup",
  ],
},

  {
    title: "SEO & Digital Presence",
    description: "Improve your online visibility & search rankings.",
    icon: SearchCode,
    direction: "right",
    features: [
      "On-page & technical SEO",
      "Google Search Console setup",
      "Blog strategy & keyword research",
      "Speed, meta tags, sitemap, schema",
    ],
  },
  {
    title: "Maintenance & Support",
    description: "Keep your app or website fast, secure & error-free.",
    icon: Wrench,
    direction: "left",
    features: [
      "Bug fixing and security patching",
      "Version upgrades & content updates",
      "Monthly performance reports",
      "Emergency support",
    ],
  },
 {
  title: "Branding & Creative",
  description: "Designs that attract, connect & sell.",
  icon: Paintbrush, // better suited than Wrench
  direction: "left",
  features: [
    "Logo & brand identity design",
    "Creative graphics & illustrations",
    "Marketing & social media assets",
    "UI/UX design support",
  ],
}

];
