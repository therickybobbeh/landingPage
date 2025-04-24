"use client";
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  colorClass: string;
}

const featuresData: FeatureItem[] = [
  {
    icon: 'bi bi-shield-check',
    title: 'Clean Code',
    description: 'Maintainable and scalable code following best practices and industry standards',
    colorClass: 'text-secondary-custom'
  },
  {
    icon: 'bi bi-laptop',
    title: 'Responsive Design',
    description: 'Applications that work perfectly across all devices and screen sizes',
    colorClass: 'text-primary-custom'
  },
  {
    icon: 'bi bi-speedometer2',
    title: 'Performance Optimized',
    description: 'Fast loading times with optimized assets and efficient algorithms',
    colorClass: 'text-tertiary-custom'
  },
  {
    icon: 'bi bi-tools',
    title: 'Maintainable Solutions',
    description: 'Well-documented code and systems designed for long-term sustainability',
    colorClass: 'text-primary-custom'
  },
  {
    icon: 'bi bi-graph-up',
    title: 'Scalable Architecture',
    description: 'Systems built to handle growth and increased demand seamlessly',
    colorClass: 'text-secondary-custom'
  },
  {
    icon: 'bi bi-clock-history',
    title: 'Timely Delivery',
    description: 'Projects completed efficiently and delivered on schedule every time',
    colorClass: 'text-tertiary-custom'
  }
];

const Features = () => {
  return (
    <section id="features-section" className="py-5 bg-light">
      <Container className="py-5">
        <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="p-4">
              <h3 className="text-secondary-custom fw-semibold mb-3">EXPERTISE</h3>
              <h2 className="display-5 fw-bold mb-4">Professional Development Services</h2>
              <p className="lead text-muted">
                With years of experience across multiple technologies and frameworks,
                I deliver high-quality solutions tailored to your specific needs.
                My development approach focuses on clean code, maintainability,
                and exceptional user experience.
              </p>
              <div className="mt-4 pt-2">
                <div className="d-flex align-items-center">
                  <div className="position-relative">
                    <div style={{ height: '4px', width: '60px', background: 'var(--secondary)' }}></div>
                    <div style={{ 
                      position: 'absolute', 
                      height: '4px', 
                      width: '30px', 
                      background: 'var(--tertiary)',
                      right: '-40px',
                      top: '0'
                    }}></div>
                    <div style={{ 
                      position: 'absolute', 
                      height: '4px', 
                      width: '15px', 
                      background: 'var(--primary)',
                      right: '-65px',
                      top: '0'
                    }}></div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6}>
            <Row className="g-4">
              {featuresData.slice(0, 3).map((feature, index) => (
                <Col md={4} sm={6} key={index}>
                  <Card className="h-100 border-0 shadow-sm text-center hover-lift">
                    <Card.Body className="d-flex flex-column align-items-center p-4">
                      <div className={`feature-icon-container ${index === 0 ? 'bg-secondary-custom' : index === 1 ? 'bg-primary-custom' : 'bg-tertiary-custom'} bg-opacity-10 p-3 rounded-circle mb-4`} style={{
                        background: `rgba(${index === 0 ? '233, 75, 129' : index === 1 ? '112, 46, 192' : '122, 215, 227'}, 0.15)`,
                      }}>
                        <i className={`${feature.icon} ${feature.colorClass} fs-4`}></i>
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
                      <div className={`feature-icon-container p-3 rounded-circle mb-4`} style={{
                        background: `rgba(${index === 0 ? '112, 46, 192' : index === 1 ? '233, 75, 129' : '122, 215, 227'}, 0.15)`,
                      }}>
                        <i className={`${feature.icon} ${feature.colorClass} fs-4`}></i>
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