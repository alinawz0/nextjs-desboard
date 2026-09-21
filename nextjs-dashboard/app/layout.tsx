import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Acme Dashboard',
    description: 'The official Next.js Learn Dashboard built with App Router.',
    url: 'https://next-learn-dashboard.vercel.sh',
    siteName: 'Acme Dashboard',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}