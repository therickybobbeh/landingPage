"use client";
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

const featuresData: FeatureItem[] = [
  {
    icon: 'bi bi-shield-check',
    title: 'Clean Code',
    description: 'Maintainable and scalable code following best practices and industry standards'
  },
  {
    icon: 'bi bi-laptop',
    title: 'Responsive Design',
    description: 'Applications that work perfectly across all devices and screen sizes'
  },
  {
    icon: 'bi bi-speedometer2',
    title: 'Performance Optimized',
    description: 'Fast loading times with optimized assets and efficient algorithms'
  },
  {
    icon: 'bi bi-tools',
    title: 'Maintainable Solutions',
    description: 'Well-documented code and systems designed for long-term sustainability'
  },
  {
    icon: 'bi bi-graph-up',
    title: 'Scalable Architecture',
    description: 'Systems built to handle growth and increased demand seamlessly'
  },
  {
    icon: 'bi bi-clock-history',
    title: 'Timely Delivery',
    description: 'Projects completed efficiently and delivered on schedule every time'
  }
];

const Features = () => {
  return (
    <section id="features-section" className="py-5">
      <Container className="py-5">
        <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="p-4">
              <h3 className="text-primary fw-semibold mb-3">EXPERTISE</h3>
              <h2 className="display-5 fw-bold mb-4">Professional Development Services</h2>
              <p className="lead text-muted">
                With years of experience across multiple technologies and frameworks,
                I deliver high-quality solutions tailored to your specific needs.
                My development approach focuses on clean code, maintainability,
                and exceptional user experience.
              </p>
            </div>
          </Col>
          
          <Col lg={6}>
            <Row className="g-4">
              {featuresData.slice(0, 3).map((feature, index) => (
                <Col md={4} sm={6} key={index}>
                  <Card className="h-100 border-0 shadow-sm text-center hover-lift">
                    <Card.Body className="d-flex flex-column align-items-center p-4">
                      <div className="feature-icon-container bg-primary bg-opacity-10 p-3 rounded-circle mb-4">
                        <i className={`${feature.icon} text-primary fs-4`}></i>
                      </div>
                      <h5 className="card-title fw-bold">{feature.title}</h5>
                      <p className="card-text text-muted small">{feature.description}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            
            <Row className="g-4 mt-2">
              {featuresData.slice(3).map((feature, index) => (
                <Col md={4} sm={6} key={index}>
                  <Card className="h-100 border-0 shadow-sm text-center hover-lift">
                    <Card.Body className="d-flex flex-column align-items-center p-4">
                      <div className="feature-icon-container bg-primary bg-opacity-10 p-3 rounded-circle mb-4">
                        <i className={`${feature.icon} text-primary fs-4`}></i>
                      </div>
                      <h5 className="card-title fw-bold">{feature.title}</h5>
                      <p className="card-text text-muted small">{feature.description}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;