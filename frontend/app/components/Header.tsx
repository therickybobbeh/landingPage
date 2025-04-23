"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on the homepage
  const isHomePage = pathname === '/';

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

  // Determine navbar background based on page and scroll state
  const getNavbarBackground = () => {
    return 'var(--black)';
  };
  
  // Determine navbar class based on page and scroll state
  const getNavbarClass = () => {
    return 'bg-black-custom';
  };
  
  // Determine border style based on scroll state only
  const getNavbarBorder = () => {
    return isScrolled ? '1px solid rgba(112, 46, 192, 0.2)' : 'none';
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      variant="dark"
      className={`py-3 transition-all ${getNavbarClass()}`}
      style={{ 
        transition: 'all 0.3s ease-in-out',
        backgroundColor: getNavbarBackground(),
        borderBottom: getNavbarBorder(),
      }}
    >
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand className="fw-bold fs-3">
            <span className="text-white">Dev</span>
            <span className="text-secondary-custom">Portfolio</span>
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
                      backgroundColor: pathname === item.path ? 'var(--secondary)' : 'var(--tertiary)',
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
                className="btn-gradient-warm btn-rounded px-4 fw-medium"
                style={{ boxShadow: '0 4px 15px rgba(233, 75, 129, 0.3)' }}
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