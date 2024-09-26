import { AuthProvider, QueryClientProvider, ThemeProvider } from '@/components';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import { Inter, Shadows_Into_Light_Two } from 'next/font/google';
import type { PropsWithChildren } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const shadows = Shadows_Into_Light_Two({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-shadows',
});

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${shadows.variable} antialiased`}>
        <QueryClientProvider>
          <AuthProvider>
            <ThemeProvider attribute="class">
              {children}
              <Toaster />
            </ThemeProvider>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'Torakka - Addiction Recovery Tracker',
  description:
    'Track your addiction recovery journey. Monitor your daily progress, celebrate successes, and remain committed through relapses.',
};
