"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about-section' },
    { name: 'Projects', path: '/#projects-section' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/#contact-section' },
  ];

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      variant="dark"
      className={`py-3 transition-all ${isScrolled ? 'bg-black-custom' : 'bg-transparent'}`}
      style={{ 
        transition: 'all 0.3s ease-in-out',
        backgroundColor: isScrolled ? 'var(--black)' : 'transparent',
        borderBottom: isScrolled ? '1px solid rgba(126, 87, 194, 0.2)' : 'none',
      }}
    >
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand className="fw-bold fs-3">
            <span className="text-white">Dev</span>
            <span className="text-primary-light-custom">Portfolio</span>
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map((item) => (
              <Link 
                href={item.path} 
                key={item.name} 
                passHref
              >
                <Nav.Link 
                  as="span"
                  className={`px-3 nav-link ${pathname === item.path ? 'active fw-semibold' : ''}`}
                  style={{
                    position: 'relative',
                    color: 'white',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {item.name}
                  <span 
                    className="position-absolute bottom-0 start-50 translate-middle-x" 
                    style={{
                      height: '2px',
                      width: pathname === item.path ? '60%' : '0',
                      backgroundColor: 'var(--primary-light)',
                      transition: 'all 0.3s ease',
                      opacity: pathname === item.path ? 1 : 0,
                    }}
                  ></span>
                </Nav.Link>
              </Link>
            ))}
          </Nav>

          <div className="ms-lg-3 mt-3 mt-lg-0">
            <Link href="/#contact-section" passHref>
              <Button 
                className="btn-primary-custom px-4 rounded-pill fw-medium"
                style={{ boxShadow: '0 4px 15px rgba(94, 53, 177, 0.3)' }}
              >
                <i className="bi bi-chat-text-fill me-2"></i>
                Get In Touch
              </Button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;