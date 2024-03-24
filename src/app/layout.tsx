import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Milonga } from 'next/font/google';
import '@/app/globals.css';

const milonga = Milonga({ weight: ['400'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Accueil - EmilieM Photographie',
  description: 'EmilieM Photographie - Photographe à Lille',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='fr'>
      <body className={milonga.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
