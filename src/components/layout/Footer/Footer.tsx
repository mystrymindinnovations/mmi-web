import { Logo } from "@/components/logo";
import {
  Facebook,
  Linkedin,
  Instagram,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 text-center lg:text-left">
          {/* Left Section: Logo + About + Social */}
          <div className="flex flex-col items-center lg:items-start">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">

              Tech-Powered Solutions | Innovation-Driven Services
              <br />
              🚀 Turning Ideas into Scalable Digital Realities

            </p>

            {/* Social Icons */}
            <div className="mt-8 flex justify-center lg:justify-start space-x-6">
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

          {/* Right Section: Links + Contact */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:col-span-2 text-center lg:text-left">
            {/* Company */}
            <div>
              <p className="font-headline font-medium">Company</p>
              <ul className="mt-6 space-y-4 text-sm">

                <li><Link href="/about" className="text-muted transition hover:opacity-75">About Us</Link></li>
                <li><Link href="/careers" className="text-muted transition hover:opacity-75">Careers</Link></li>
                <li><Link href="/whyChooseUs" className="text-muted transition hover:opacity-75">Why Choose Us</Link></li>

              </ul>
            </div>

            {/* Services */}
            <div>
              <p className="font-headline font-medium">Services</p>
              <ul className="mt-6 space-y-4 text-sm">

                <li><Link href="/service" className="text-muted transition hover:opacity-75">Web Solutions</Link></li>
                <li><Link href="/service" className="text-muted transition hover:opacity-75">Mobile Apps</Link></li>
                <li><Link href="/service" className="text-muted transition hover:opacity-75">Cloud Consulting</Link></li>

              </ul>
            </div>

            {/* Helpful Links */}
            <div>
              <p className="font-headline font-medium">Helpful Links</p>
              <ul className="mt-6 space-y-4 text-sm">

                <li><Link href="/term&condition" className="text-muted transition hover:opacity-75">Terms & Conditions</Link></li>

                <li><Link href="/privacy-policy" className="text-muted transition hover:opacity-75">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="font-headline font-medium">Contact</p>

              <ul className="mt-6 space-y-4 text-sm flex flex-col items-center lg:items-start">
                {/* Email */}
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0">
                    <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v1.5l-10 6-10-6V4zm0 4.75v11.25A2 2 0 004 22h16a2 2 0 002-2V8.75l-10 6-10-6z" />
                  </svg>
                  <a href="mailto:team@mystrymind.com" className="text-muted transition hover:opacity-75">
                    team@mystrymind.com
                  </a>

                </li>

                {/* WhatsApp */}
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0 text-[#25D366]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.1-.472-.149-.67.15-.198.297-.767.966-.94 1.164-.174.199-.347.224-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.654-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.373-.025-.522-.075-.149-.67-1.611-.916-2.206-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.52.075-.792.373-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M20.52 3.48C18.24 1.2 15.24 0 12 0 5.37 0 0 5.37 0 12c0 2.12.55 4.16 1.6 5.96L0 24l6.19-1.62C8.08 23.45 10.04 24 12 24c6.63 0 12-5.37 12-12 0-3.24-1.26-6.24-3.48-8.52zM12 21.8c-1.76 0-3.48-.47-4.98-1.36l-.36-.21-3.68.96.98-3.59-.24-.37C3.57 15.59 3 13.84 3 12c0-4.96 4.04-9 9-9 2.4 0 4.65.94 6.36 2.64C20.06 7.35 21 9.6 21 12c0 4.96-4.04 9-9 9z" />
                  </svg>
                  <a href="https://wa.me/919082069773" target="_blank" rel="noreferrer" className="text-muted transition hover:opacity-75">
                    9082069773
                  </a>
                </li>

                {/* Address */}
                <li className="flex items-center gap-2">
  <MapPin className="h-5 w-5 flex-shrink-0" />
  <span className="text-muted">
    <a 
      href="https://maps.app.goo.gl/sz81Z2Xuv36iNQ8t9?g_st=aw" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Sonarpada, Dombivli East,<br />
      Maharashtra, 421201
    </a>
  </span>
</li>

              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-800 pt-2">
          <p className="text-center text-xs text-muted">
            &copy; {new Date().getFullYear()} MystryMind Innovations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
