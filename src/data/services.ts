// data/services.ts
import { Smartphone, Globe, PenTool, SearchCode, Wrench } from "lucide-react";
import type { Service } from "@/types/Service";

export const services: Service[] = [
  {
    title: "Mobile App Development",
    description: "Scalable, performant apps for Android & iOS.",
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
    title: "Website Development",
    description: "Custom-coded websites with speed, design & SEO in mind.",
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
    title: "UI/UX & Graphic Design",
    description: "Designs that define your brand’s identity.",
    icon: PenTool,
    direction: "left",
    features: [
      "UI/UX wireframes & prototypes",
      "Logo & branding kits",
      "Social media creatives",
      "Design systems in Figma / Adobe XD",
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
];
