import { ReactNode } from 'react';
import { Header } from './header';

const SharedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default SharedLayout;
