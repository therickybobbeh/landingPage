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
        <div className="bg-primary-100 py-4">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/" className="text-decoration-none text-primary-custom">
                    <i className="bi bi-house-door me-1"></i> Home
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Resume</li>
              </ol>
            </nav>
          </div>
        </div>
        <Resume />
      </main>
      <Footer />
    </div>
  );
};

export default ResumePage;