import { ReactNode } from 'react';
import { Header } from './header';
import { BackToTop } from './back-to-top';

const SharedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}

      <BackToTop />
    </>
  );
};

export default SharedLayout;
