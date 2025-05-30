"use client";
import React from 'react';
import MainLayout from './components/templates/MainLayout';
import Banner from './components/organisms/Banner';
import ContactForm from './components/organisms/ContactForm';
import Projects from './components/organisms/Projects';
import Skills from './components/organisms/Skills';

export default function Home() {
  return (
    <MainLayout>
      <Banner />
      <Skills />
      <Projects />
      <ContactForm />
    </MainLayout>
  );
}