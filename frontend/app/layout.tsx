import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Metadata } from 'next';
import BootstrapClient from './components/BootstrapClient';

export const metadata: Metadata = {
  title: 'Bob Cole | Full-Stack Software Engineer Portfolio',
  description: 'Explore the portfolio of Bob Cole: full-stack engineer with expertise in angular, Next.js, FastAPI, PostgreSQL, and UI/UX design. Featuring Georgia Tech AI/CS projects, personal web apps, and more.',
  icons: {
    icon: '/favicon.ico',
  },
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0',
  openGraph: {
    title: 'Bob Cole | Full-Stack Software Engineer Portfolio',
    description: 'Browse Bob Cole\'s professional portfolio showcasing full-stack projects, web design work, and graduate studies at Georgia Tech.',
    images: [
      {
        url: '/preview.jpeg',
        width: 1200,
        height: 630,
        alt: 'Preview of Bob Cole\'s Full-Stack Developer Portfolio',
      },
    ],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}