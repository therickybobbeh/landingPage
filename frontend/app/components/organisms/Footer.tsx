import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Heading from '../atoms/Typography/Heading';
import Text from '../atoms/Typography/Text';
import Icon from '../atoms/Icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'github', url: 'https://github.com/therickybobbeh' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/this-is-robert/' },
  ];

  const quickLinks = [
    { label: 'Home', url: '/' },
    { label: 'Projects', url: '/#projects' },
    { label: 'Resume', url: '/resume' },
    { label: 'Contact', url: '/#contact-section' },
  ];
  
  const services = [
    'Web Development',
    'Mobile Apps',
    'API Development',
    'Technical Consulting',
  ];

  return (
    <footer className="bg-dark py-5 mt-auto">
      <Container>
        {/* Main Footer Content */}
        <Row className="gy-4 mb-5">
          <Col lg={5} md={6}>
            <div className="mb-4">
              <Link href="/frontend/public" className="text-decoration-none">
                <Heading level={3} color="white" className="mb-0 fw-bold">
                  Robert T. Cole
                </Heading>
              </Link>
            </div>
            
            <Text color="white-50" className="mb-4">
              Developing innovative solutions and building digital experiences that make a difference.
              Let's work together to bring your ideas to life.
            </Text>
            
            <div className="d-flex gap-2">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-dark rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '36px', height: '36px' }}
                >
                  <Icon name={social.name} color="white" />
                </a>
              ))}
            </div>
          </Col>

          <Col lg={3} md={6} xs={6}>
            <Heading level={5} color="white" className="mb-3">
              Quick Links
            </Heading>
            <ul className="list-unstyled">
              {quickLinks.map((link) => (
                <li key={link.label} className="mb-2">
                  <Link href={link.url} className="text-white-50 text-decoration-none hover-text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={4} md={6} xs={6}>
            <Heading level={5} color="white" className="mb-3">
              Services
            </Heading>
            <ul className="list-unstyled">
              {services.map((service) => (
                <li key={service} className="mb-2 text-white-50">
                  {service}
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* Copyright */}
        <hr className="border-secondary my-4" />
        
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <Text color="white-50" variant="small" className="mb-0">
              © {currentYear} DevPortfolio. All rights reserved.
            </Text>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <Text color="white-50" variant="small" className="mb-0">
              <Link href="/privacy" className="text-decoration-none text-white-50">Privacy Policy</Link>
              {" | "}
              <Link href="/terms" className="text-decoration-none text-white-50">Terms of Service</Link>
            </Text>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;