import { ReactNode } from 'react';
import type { Metadata } from 'next';
import '@/app/globals.css';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import { BackToTop } from '@/components/back-to-top';

export const metadata: Metadata = {
  title: 'Portfolio - EmilieM Photographie',
  description: 'EmilieM Photographie - Photographe à Lille',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='fr'>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <Header />
          {children}

          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
