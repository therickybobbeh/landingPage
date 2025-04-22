import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

// Footer links data
const usefulLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '#projects-section' },
  { name: 'Resume', href: '#resume-section' },
  { name: 'Skills', href: '#skills-section' },
  { name: 'Contact', href: '#contact-section' },
];

const socialLinks = [
  { icon: 'bi bi-github', href: 'https://github.com/' },
  { icon: 'bi bi-linkedin', href: 'https://linkedin.com/' },
  { icon: 'bi bi-twitter-x', href: 'https://twitter.com/' },
  { icon: 'bi bi-envelope-fill', href: 'mailto:contact@example.com' },
];

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <Container>
        <Row className="mb-4">
          <Col lg={5} md={12} className="mb-4 mb-lg-0">
            <h4 className="mb-3">Developer Portfolio</h4>
            <p className="text-muted mb-4">
              A professional portfolio showcasing development skills, projects, and experience.
              Connect with me to discuss opportunities and collaborations.
            </p>
            <div className="d-flex gap-3">
              {socialLinks.map((item, i) => (
                <Link key={i} href={item.href} className="text-white fs-5" target="_blank">
                  <i className={item.icon}></i>
                </Link>
              ))}
            </div>
          </Col>

          <Col lg={3} md={6} sm={6} className="mb-4 mb-lg-0">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {usefulLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link href={link.href} className="text-decoration-none text-muted">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={4} md={6} sm={6}>
            <h5 className="mb-3">Contact Info</h5>
            <ul className="list-unstyled text-muted">
              <li className="mb-2">
                <i className="bi bi-telephone me-2"></i> (123) 456-7890
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i> contact@example.com
              </li>
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i> San Francisco, CA
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="mt-4 mb-3" />
        <div className="text-center text-muted">
          <small>&copy; {new Date().getFullYear()} Developer Portfolio. All rights reserved.</small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;