"use client";
import React from 'react';
import MainLayout from './components/templates/MainLayout/MainLayout';
import Banner from './components/organisms/Banner/Banner';
import ContactForm from './components/organisms/ContactForm/ContactForm';
import Projects from './components/Projects';
import Skills from './components/Skills';
import GitHubProjects from './components/GitHubProjects';
import Features from './components/Features';

export default function Home() {
  return (
    <MainLayout>
      <Banner />
      <Features />
      <GitHubProjects />
      <Projects />
      <Skills />
      <ContactForm />
    </MainLayout>
  );
}