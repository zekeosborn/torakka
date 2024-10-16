import QueryClientProvider from '@/components/QueryClientProvider';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import { Inter, Shadows_Into_Light_Two } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const shadows = Shadows_Into_Light_Two({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-shadows',
});

export default function RootLayout({
  children,
}: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${shadows.variable} antialiased`}>
        <SessionProvider>
          <QueryClientProvider>
            <ThemeProvider attribute="class" defaultTheme="system">
              {children}
              <Toaster />
            </ThemeProvider>
          </QueryClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'Torakka - Addiction Recovery Tracker',
  description:
    'Track your daily progress and boost your awareness of the addiction.',
};
