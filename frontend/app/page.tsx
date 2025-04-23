"use client";
import React from 'react';
import Banner from './components/Banner';
import AboutMe from './components/Skills'; // This is our AboutMe component (renamed from Skills)
import GitHubProjects from './components/GitHubProjects';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      <main className="flex-grow-1">
        <Banner />
        <AboutMe />
        <Projects />
        <GitHubProjects />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}