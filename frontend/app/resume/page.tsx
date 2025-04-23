"use client";
import React from 'react';
import Resume from '../components/Resume';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ResumePage = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      <main className="flex-grow-1 pt-5 mt-4">
        <Resume />
      </main>
      <Footer />
    </div>
  );
};

export default ResumePage;