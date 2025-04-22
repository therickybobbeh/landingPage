import React from 'react';
import Link from 'next/link';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

// Navigation items data
const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Projects', href: '#projects-section', current: false },
    { name: 'Resume', href: '#resume-section', current: false },
    { name: 'Skills', href: '#skills-section', current: false },
    { name: 'Contact', href: '#contact-section', current: false },
];

const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="py-3">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/favicon.ico"
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
            alt="Developer Portfolio"
          />
          Developer Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            {navigation.map((item) => (
              <Nav.Link
                key={item.name}
                href={item.href}
                active={item.current}
                className="px-3"
              >
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
          <Link href="/login" passHref legacyBehavior>
            <Button variant="outline-light">Admin Login</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;