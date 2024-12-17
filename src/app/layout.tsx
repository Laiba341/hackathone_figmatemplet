import React from 'react';
import Header from '@/components/Header'; // Correct import path
import Footer from '@/components/Footer'; // Correct import path
import './globals.css'; // Global CSS (optional)

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className=' bg-slate-100'>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
