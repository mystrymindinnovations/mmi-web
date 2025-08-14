import type { Metadata } from "next";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

const metadataBase = new URL("https://mystrymind.com");

export const metadata: Metadata = {
  title: "MystryMind Innovations Private Limited",
  description:
    "MystryMind Innovations Private Limited is a modern tech startup specializing in AI, cloud computing, and web solutions. We help businesses innovate faster with scalable, secure, and future-ready technology.",
  metadataBase,
  openGraph: {
    title: "MystryMind Innovations Private Limited",
    description:
      "MystryMind Innovations Private Limited is a modern tech startup specializing in AI, cloud computing, and web solutions. We help businesses innovate faster with scalable, secure, and future-ready technology.",
    url: "https://mystrymind.com",
    siteName: "MystryMind",
    images: [
      {
        url: new URL("/assets/logos/og-image.png", metadataBase).toString(),
        width: 1200,
        height: 630,
        alt: "MystryMind Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MystryMind Innovations Private Limited",
    description:
      "MystryMind Innovations Private Limited is a modern tech startup specializing in AI, cloud computing, and web solutions.",
    images: [new URL("/assets/logos/og-image.png", metadataBase).toString()],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Fonts and Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* SEO Extras */}
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MystryMind Innovations Private Limited",
              url: "https://mystrymind.com",
              logo: "https://mystrymind.com/assets/logos/og-image.png",
              sameAs: [
                "https://www.facebook.com/share/1DW62dCDEz/",
                "https://x.com/mystrymind?t=PVdHEVLeE0vRQrDIDRSfZQ&s=09",
                "https://www.instagram.com/mystryminddotcom?igsh=MTZvcmdnazZyMGNw",
                "https://www.linkedin.com/company/mystrymind-innovations-pvt-ltd/",
              ],
            }),
          }}
        />
      </head>
      <body className={cn("min-h-screen bg-background font-body antialiased")}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}

