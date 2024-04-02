import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Milonga } from 'next/font/google';
import '@/app/globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const milonga = Milonga({ weight: ['400'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Accueil - EmilieM Photographie',
  description: 'EmilieM Photographie - Photographe à Lille',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='fr' className='scroll-smooth'>
      <body className={milonga.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
