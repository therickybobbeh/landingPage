import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Metadata, Viewport } from 'next';
import BootstrapClient from './components/BootstrapClient';
import Script from 'next/script';
import ChatWidget from './components/molecules/ChatWidget/ChatWidget';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
}

export const metadata: Metadata = {
  title: 'Robert Cole | Full-Stack Software Engineer Portfolio',
  description: 'Explore the portfolio of Bob Cole: full-stack engineer with expertise in angular, Next.js, FastAPI, PostgreSQL, and UI/UX design. Featuring Georgia Tech AI/CS projects, personal web apps, and more.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Robert Cole | Full-Stack Software Engineer Portfolio',
    description: 'Browse Robert Cole\'s professional portfolio showcasing full-stack projects, web design work, and graduate studies at Georgia Tech.',
    images: [
      {
        url: 'https://www.bob-cole.com/preview.jpeg', // Updated to use the correct preview.jpeg file
        width: 1200,
        height: 630,
        alt: 'Preview of Robert Cole\'s Full-Stack Developer Portfolio',
      },
    ],
    siteName: 'Bob Cole Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robert Cole | Full-Stack Software Engineer Portfolio',
    description: 'Explore the portfolio of Robert Cole: full-stack engineer with expertise in Angular, Next.js, FastAPI, PostgreSQL, and UI/UX design.',
    images: ['https://www.bob-cole.com/preview.jpeg'], // Updated to use the same preview image
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* Bootstrap Icons - Added CDN link */}
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        
        {/* Google Analytics Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NTQ0183SW4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NTQ0183SW4');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning={true}>
        <BootstrapClient />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}