import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Milonga } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';

const inter = Milonga({ weight: ['400'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Accueil - EmilieM Photographie',
  description: 'EmilieM Photographie - Photographe à Lille',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='fr'>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
