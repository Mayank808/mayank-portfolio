import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'Mayank Mehra',
  description:
    'Hi, my name is Mayank and welcome to my website. While you are here feel free to learn a bit about me and visit my other socials.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='background'>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
