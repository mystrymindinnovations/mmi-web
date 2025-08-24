"use client";
import { Logo } from "@/components/logo";

import { Facebook, Linkedin, Instagram, MapPin, Mail } from "lucide-react";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo & Description */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs mt-2">
              MystryMind Innovations Pvt. Ltd. — budget-friendly IT solutions
              without compromising on quality.
            </p>

            {/* Follow Us */}
            <div className="mt-6">
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4 justify-center sm:justify-start">
                <a href="https://www.facebook.com/share/1DW62dCDEz/" target="_blank" rel="noreferrer" className="hover:opacity-75">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-6 w-6 text-[#1877F2]" />
                </a>
                <a href="https://www.instagram.com/mystryminddotcom?igsh=MTZvcmdnazZyMGNw" target="_blank" rel="noreferrer" className="hover:opacity-75">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6 text-[#E1306C]" />
                </a>
                <a href="https://x.com/mystrymind?t=PVdHEVLeE0vRQrDIDRSfZQ&s=09" target="_blank" rel="noreferrer" className="hover:opacity-75">
                  <span className="sr-only">X (Twitter)</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" className="h-5 w-4 fill-white">
                    <path d="M713 513L1160 0H1063L671 450 388 0H0l468 682L0 1226h97l409-478 304 478h390L713 513zM557 674l-47-67-299-426h161l241 343 47 67 320 454H819L557 674z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/mystrymind-innovations-pvt-ltd/" target="_blank" rel="noreferrer" className="hover:opacity-75">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6 text-[#0A66C2]" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {/* WhatsApp */}
              <li className="flex flex-col sm:flex-row items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#25D366" viewBox="0 0 32 32" className="h-5 w-5">
                  <path d="M16.002 3C9.37 3 4 8.37 4 15c0 2.5.805 4.82 2.184 6.716L4 29l7.426-2.146A11.939 11.939 0 0016 27c6.63 0 12-5.37 12-12S22.63 3 16.002 3zm6.703 17.285c-.278.787-1.637 1.537-2.236 1.64-.598.102-1.362.145-2.201-.14-.507-.165-1.158-.376-1.994-.737-3.51-1.529-5.79-5.088-5.963-5.326-.174-.237-1.425-1.898-1.425-3.623 0-1.725.902-2.574 1.223-2.925.32-.35.695-.438.927-.438.232 0 .463 0 .667.012.215.01.506-.08.79.604.278.684.944 2.363 1.027 2.533.083.17.14.372.028.61-.112.237-.169.372-.334.57-.165.197-.35.438-.5.586-.165.165-.338.344-.145.675.193.33.857 1.416 1.84 2.292 1.27 1.13 2.34 1.48 2.67 1.647.33.165.522.14.715-.084.193-.223.82-.956 1.04-1.285.217-.33.448-.28.746-.165.298.113 1.889.893 2.21 1.056.32.165.533.247.61.385.082.138.082.797-.196 1.585z"/>
                </svg>
                <a href="https://wa.me/919082069773" target="_blank" rel="noreferrer" className="hover:opacity-75">
                  9082069773
                </a>
              </li>
              {/* Email */}
              <li className="flex flex-col sm:flex-row items-center gap-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:team@mystrymind.com" className="text-muted transition hover:opacity-75">
                    team@mystrymind.com
                  </a>
              </li>
              {/* Location */}
              <li className="flex flex-col sm:flex-row items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span> <a 

      href="https://maps.app.goo.gl/sz81Z2Xuv36iNQ8t9?g_st=aw" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Sonarpada, Dombivli East,<br />
      Maharashtra, 421201

    </a></span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:opacity-75">Home</Link></li>
              <li><Link href="/about" className="hover:opacity-75">About Us</Link></li>
              <li><Link href="/services" className="hover:opacity-75">Services</Link></li>
              <li><Link href="/contact" className="hover:opacity-75">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <p className="font-headline font-medium">Services</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li><Link href="/service" className="text-muted transition hover:opacity-75">Web Development</Link></li>
              <li><Link href="/service" className="text-muted transition hover:opacity-75">Android Development</Link></li>
              <li><Link href="/service" className="text-muted transition hover:opacity-75">iOS Development</Link></li>
              <li><Link href="/service" className="text-muted transition hover:opacity-75">Graphic Designing</Link></li>
              <li><Link href="/service" className="text-muted transition hover:opacity-75">WordPress Development</Link></li>
              <li><Link href="/service" className="text-muted transition hover:opacity-75">SEO</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 border-t border-muted-foreground pt-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MystryMind Innovations Pvt. Ltd. All rights reserved.

        </div>
      </div>
    </footer>
  );
}
