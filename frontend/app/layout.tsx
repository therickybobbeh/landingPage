import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Developer Portfolio',
  description: 'A professional portfolio for developers to showcase their work',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Bootstrap JS will be loaded client-side */}
      </body>
    </html>
  );
}