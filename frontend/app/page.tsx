"use client";
import React from 'react';
import MainLayout from './components/templates/MainLayout/MainLayout';
import Banner from './components/organisms/Banner/Banner';
import ContactForm from './components/organisms/ContactForm/ContactForm';
import Projects from './components/organisms/Projects';
import Skills from './components/organisms/Skills';
import Experience from './components/organisms/Experience';

export default function Home() {
  return (
    <MainLayout>
      <Banner />
      <Skills />
      <Experience />
      <Projects />
      <ContactForm />
    </MainLayout>
  );
}