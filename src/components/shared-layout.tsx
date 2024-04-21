import { ReactNode } from 'react';
import { Header } from './header';
import { BackToTop } from './back-to-top';

const SharedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}

      <BackToTop />

      <footer className='w-[95%] border-t-2 text-center'>
        <p>Footer</p>
      </footer>
    </>
  );
};

export default SharedLayout;
