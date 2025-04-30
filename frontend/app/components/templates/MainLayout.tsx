import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import { UnifiedBackground } from '../atoms';

interface MainLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  darkMode?: boolean;
}

const MainLayout = ({ 
  children, 
  showHeader = true, 
  showFooter = true,
  darkMode = true
}: MainLayoutProps) => {
  return (
    <div className={`d-flex flex-column min-vh-100 position-relative ${darkMode ? 'bg-dark' : 'bg-light'}`}>
      <UnifiedBackground 
        intensity={darkMode ? 'normal' : 'light'} 
      />
      
      {showHeader && <Header />}
      
      <main className="flex-grow-1">
        {children}
      </main>
      
      {showFooter && <Footer />}
    </div>
  );
};

export default MainLayout;