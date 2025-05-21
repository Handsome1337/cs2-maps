import type { Metadata } from 'next';
import { Tektur } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const tekturSans = Tektur({
  variable: '--font-tektur-sans',
  subsets: ['latin', 'cyrillic']
});

export const metadata: Metadata = {
  title: {
    template: '%s | CS2 Maps',
    default: 'CS2 Maps'
  },
  description: 'Справочник по картам CS2'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] h-screen ${tekturSans.variable} antialiased`}
      >
        {children}
        <Script src="https://player.vimeo.com/api/player.js"></Script>
      </body>
    </html>
  );
}
