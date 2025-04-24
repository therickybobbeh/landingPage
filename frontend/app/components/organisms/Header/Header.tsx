"use client";
import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Typography/Heading';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/#projects-section' },
    { label: 'Skills', href: '/#skills-section' },
    { label: 'Resume', href: '/resume' },
    { label: 'Contact', href: '/#contact-section' },
  ];

  const navbarClasses = `py-2 ${scrolled ? 'bg-dark shadow' : 'bg-transparent'} transition-all`;

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={navbarClasses}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <Link href="/" passHref legacyBehavior>
          <Navbar.Brand className="text-white d-flex align-items-center">
            <Heading level={4} color="white" className="mb-0 fw-bold">
              Dev<span className="text-primary">Portfolio</span>
            </Heading>
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          className="border-0 text-white"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto align-items-center">
            {navItems.map((item, index) => (
              <Nav.Item key={index}>
                <Link href={item.href} passHref legacyBehavior>
                  <Nav.Link 
                    className="text-white mx-lg-2"
                    onClick={() => setExpanded(false)}
                  >
                    {item.label}
                  </Nav.Link>
                </Link>
              </Nav.Item>
            ))}
            
            <Nav.Item className="mt-3 mt-lg-0 ms-lg-2">
              <Link href="/login" passHref legacyBehavior>
                <Button 
                  variant="outline-light" 
                  rounded 
                  size="sm"
                  withIcon
                  iconClassName="bi bi-lock"
                  onClick={() => setExpanded(false)}
                >
                  Admin
                </Button>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;