import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import { type PropsWithChildren } from 'react';

import { ThemeProvider } from '@/components/theme';
import NavBar from './NavBar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <NavBar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'Torakka - Addiction Recovery Tracker',
  description:
    'Track your addiction recovery journey with Torakka. Monitor your daily progress, celebrate successes, and remain committed through relapses.',
};

export default RootLayout;
