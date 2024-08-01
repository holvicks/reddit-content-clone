"use client"

import React, { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';
import { RecoilRoot } from "recoil";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <RecoilRoot>
        {children}
        </RecoilRoot>
        </main>
    </>
  );
};

export default Layout;


