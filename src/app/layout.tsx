import { type Metadata } from 'next';
import { Inter } from 'next/font/google';

import AuthProvider from '@/auth/AuthProvider';
import { ThemeProvider } from '@/components';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

function RootLayout({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider attribute="class" disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </AuthProvider>
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
