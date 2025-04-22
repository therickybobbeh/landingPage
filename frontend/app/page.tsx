"use client";

import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects'
import Resume from './components/Resume';
import Features from './components/Features';
import ContactForm from './components/ContactForm';
import GitHubProjects from './components/GitHubProjects';

export default function Home() {
  return (
    <>
      <Banner />
      <Skills />
      <Projects />
      <Resume />
      <Features />
      <GitHubProjects />
      <ContactForm />
    </>
  );
}