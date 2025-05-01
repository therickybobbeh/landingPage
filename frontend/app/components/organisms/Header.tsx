"use client";
import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import Heading from '../atoms/Typography/Heading';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/#projects-section' },
    { label: 'Resume', href: '/resume' },
    { label: 'Contact', href: '/#contact-section' },
  ];

  return (
    <Navbar
      expand="lg"
      fixed="top"
      bg="dark"                
      variant="dark"          
      className="py-2 shadow transition-all"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <Link href="/" passHref legacyBehavior>
          <Navbar.Brand className="text-white d-flex align-items-center">
            <Heading level={4} color="white" className="mb-0 fw-bold">
              Robert T. Cole
            </Heading>
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto align-items-center">
            {navItems.map((item, idx) => (
              <Nav.Item key={idx}>
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;