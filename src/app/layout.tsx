import type { Metadata } from 'next';
import '../styles/globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';

const metadataBase = new URL('https://mystrymind.com');

export const metadata: Metadata = {
  title: 'MystryMind | Innovate Beyond Limits',
  description: 'Modern tech startup pushing the limits of innovation.',
  metadataBase,
  openGraph: {
    title: 'MystryMind | Innovate Beyond Limits',
    description: 'Modern tech startup pushing the limits of innovation.',
    url: 'https://mystrymind.com',
    siteName: 'MystryMind',
    images: [
      {
        url: new URL('/assets/logos/og-image.png', metadataBase).toString(),
        width: 1200,
        height: 630,
        alt: 'MystryMind Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MystryMind | Innovate Beyond Limits',
    description: 'Modern tech startup pushing the limits of innovation.',
    images: [new URL('/assets/logos/og-image.png', metadataBase).toString()],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Fonts and Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Optional: SEO extras */}
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
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
