"use client";
import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: 'bi-github', url: 'https://github.com/' },
    { name: 'LinkedIn', icon: 'bi-linkedin', url: 'https://linkedin.com/in/' },
    { name: 'Twitter', icon: 'bi-twitter-x', url: 'https://twitter.com/' },
    { name: 'Instagram', icon: 'bi-instagram', url: 'https://instagram.com/' },
  ];

  const quickLinks = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/#about-section' },
    { name: 'Projects', url: '/#projects-section' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/#contact-section' },
  ];

  return (
    <footer>
      <div className="section-gradient-cool text-white py-5">
        <Container className="py-4">
          <Row className="gy-4">
            <Col lg={4} md={6}>
              <Link href="/" className="text-decoration-none">
                <h3 className="text-white mb-4">
                  <span className="fw-bold">Dev</span>
                  <span className="text-secondary-custom">Portfolio</span>
                </h3>
              </Link>
              <p className="text-white-50 mb-4">
                Full-stack developer specializing in creating elegant solutions for complex problems.
                Let's bring your ideas to life with modern web technologies.
              </p>
              <div className="d-flex gap-2 mb-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`social-link d-inline-flex align-items-center justify-content-center rounded-circle text-white p-2 ${
                      index === 0 ? 'card-gradient-purple' : 
                      index === 1 ? 'card-gradient-magenta' : 
                      index === 2 ? 'card-gradient-blue' : 
                      'card-gradient-light-blue'
                    }`}
                    style={{ width: '38px', height: '38px', transition: 'all 0.3s ease' }}
                    aria-label={social.name}
                  >
                    <i className={`bi ${social.icon} fs-5`}></i>
                  </a>
                ))}
              </div>
            </Col>
            
            <Col lg={2} md={6} className="ps-lg-4">
              <h5 className="text-white mb-4 fw-bold">Quick Links</h5>
              <ul className="list-unstyled">
                {quickLinks.map((link) => (
                  <li key={link.name} className="mb-2">
                    <Link href={link.url} className="text-white-50 text-decoration-none hover-effect d-flex align-items-center">
                      <span className="me-2 text-tertiary">
                        <i className="bi bi-chevron-right"></i>
                      </span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
            
            <Col lg={3} md={6}>
              <h5 className="text-white mb-4 fw-bold">Contact Info</h5>
              <ul className="list-unstyled text-white-50">
                <li className="d-flex mb-3">
                  <div className="bg-secondary-custom me-3 p-2 rounded-circle d-flex align-items-center justify-content-center" 
                    style={{ width: '36px', height: '36px', minWidth: '36px' }}>
                    <i className="bi bi-geo-alt text-white"></i>
                  </div>
                  <div>
                    <span>123 Developer Street, Tech City, 10001</span>
                  </div>
                </li>
                <li className="d-flex mb-3">
                  <div className="me-3 p-2 rounded-circle d-flex align-items-center justify-content-center" 
                    style={{ width: '36px', height: '36px', minWidth: '36px', background: 'var(--primary)' }}>
                    <i className="bi bi-envelope text-white"></i>
                  </div>
                  <div>
                    <a href="mailto:contact@example.com" className="text-white-50 text-decoration-none">contact@example.com</a>
                  </div>
                </li>
                <li className="d-flex">
                  <div className="me-3 p-2 rounded-circle d-flex align-items-center justify-content-center" 
                    style={{ width: '36px', height: '36px', minWidth: '36px', background: 'var(--tertiary)', color: 'var(--deep-purple)' }}>
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div>
                    <a href="tel:+11234567890" className="text-white-50 text-decoration-none">(123) 456-7890</a>
                  </div>
                </li>
              </ul>
            </Col>
            
            <Col lg={3} md={6}>
              <h5 className="text-white mb-4 fw-bold">Newsletter</h5>
              <p className="text-white-50 mb-3">Subscribe to receive updates and news about my latest projects.</p>
              <form className="mb-3">
                <div className="input-group">
                  <input 
                    type="email" 
                    className="form-control bg-black-500 border-0 text-white" 
                    placeholder="Your email" 
                    aria-label="Your email"
                    style={{ padding: '10px 15px' }}
                  />
                  <button 
                    className="btn btn-gradient-warm" 
                    type="button"
                    style={{ zIndex: 0 }}
                  >
                    <i className="bi bi-send-fill"></i>
                  </button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="py-3" style={{ 
        background: 'var(--deep-purple)',
        borderTop: '1px solid rgba(75, 109, 233, 0.2)' 
      }}>
        <Container className="text-center">
          <p className="text-white-50 mb-0 small">
            © {currentYear} <span className="text-trtiary">DevPortfolio</span>. All rights reserved | Designed with <i className="bi bi-heart-fill text-secondary-custom mx-1"></i> by <a href="/" className="text-tertiary text-decoration-none">John Doe</a>
          </p>
        </Container>
      </div>
      
      <style jsx>{`
        .hover-effect {
          transition: all 0.3s ease;
        }
        .hover-effect:hover {
          color: var(--tertiary) !important;
          transform: translateX(5px);
        }
        .social-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(122, 215, 227, 0.3);
        }
      `}</style>
    </footer>
  );
};

export default Footer;