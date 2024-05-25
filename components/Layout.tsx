import React, { ReactNode } from 'react';
import Nav from './Nav';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col max-w-4xl m-auto text-txtclr text-lg bg-bgclr">
      <div className="flex justify-center md:justify-start py-4">
        <Nav />
      </div>
      {children}
    </div>
  );
};

export default Layout;