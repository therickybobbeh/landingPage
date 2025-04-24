import React from 'react';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

const MainLayout = ({ children, showHeader = true, showFooter = true }: MainLayoutProps) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {showHeader && <Header />}
      
      <main className="flex-grow-1">
        {children}
      </main>
      
      {showFooter && <Footer />}
    </div>
  );
};

export default MainLayout;