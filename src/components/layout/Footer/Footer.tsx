import { Logo } from "@/components/logo";
import { Facebook, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">
              Tech-Powered Solutions | Innovation-Driven Services<br />
          🚀 Turning Ideas into Scalable Digital Realities
            </p>
            <div className="mt-8 flex space-x-6 text-background">
              <a href="#" className="hover:opacity-75" target="_blank" rel="noreferrer">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:opacity-75" target="_blank" rel="noreferrer">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/mystrymind-innovations-pvt-ltd/
                " className="hover:opacity-75" target="_blank" rel="noreferrer">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-4">
            <div>
              <p className="font-headline font-medium">Company</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li><Link href="/section/about" className="text-muted transition hover:opacity-75">About Us</Link></li>
                <li><Link href="/section/careers" className="text-muted transition hover:opacity-75">Careers</Link></li>
                <li><Link href="/section/why-choose-us" className="text-muted transition hover:opacity-75">Why Choose Us</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-headline font-medium">Services</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li><Link href="/services" className="text-muted transition hover:opacity-75">AI Development</Link></li>
                <li><Link href="/section/services" className="text-muted transition hover:opacity-75">Web Solutions</Link></li>
                <li><Link href="/section/services" className="text-muted transition hover:opacity-75">Mobile Apps</Link></li>
                <li><Link href="/section/services" className="text-muted transition hover:opacity-75">Cloud Consulting</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-headline font-medium">Helpful Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li><Link href="/section/getEstimate" className="text-muted transition hover:opacity-75">Get Estimates</Link></li>
               <li><Link href="/term&condition" className="text-muted transition hover:opacity-75">Terms Conditions</Link></li>
                <li><Link href="/privacy-policy" className="text-muted transition hover:opacity-75">Privacy Policy</Link></li>
              </ul>
            </div>
             <div>
              <p className="font-headline font-medium">Contact</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-2">
                  <Mail className="h-5 w-5 mt-1 flex-shrink-0" />
                  <a href="mailto:team@mystrymind.com" className="text-muted transition hover:opacity-75">team@mystrymind.com</a>
                </li>
                 <li className="flex items-start gap-2">
                   <Phone className="h-5 w-5 mt-1 flex-shrink-0" />
                   <a href="tel:9082069773" className="text-muted transition hover:opacity-75">9082069773</a>
                 </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span className="text-muted">Sonarpada, Dombivli East,<br/>Kalyan, Thane<br/>Maharashtra, 421201</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-center text-xs text-muted">
            &copy; {new Date().getFullYear()} MystryMind Innovations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
