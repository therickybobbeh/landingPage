"use client";
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Heading from '../atoms/Typography/Heading';
import Text from '../atoms/Typography/Text';
import Icon from '../atoms/Icon';
import Button from '../atoms/Button';

/**
 * ContactForm component - Displays contact information and social links
 * Following Atomic Design principles as an organism composed of molecules and atoms
 */
const ContactForm = () => {
  // Contact methods data for better maintainability
  const contactMethods = [
    {
      icon: "envelope",
      title: "rcole2597@gmail.com",
      subtitle: "Email",
      actionIcon: "envelope",
      actionText: "Send Email",
      href: "mailto:rcole2597@gmail.com",
    },
    {
      icon: "telephone",
      title: "(678) 451-5840",
      subtitle: "Phone",
      actionIcon: "telephone",
      actionText: "Call Me",
      href: "tel:6784515840",
    },
    {
      icon: "geo-alt",
      title: "Raleigh, North Carolina",
      subtitle: "Location",
      actionIcon: "map",
      actionText: "View on Map",
      href: "https://goo.gl/maps/raleigh",
      isExternal: true,
    }
  ];

  // Social links data
  const socialLinks = [
    {
      icon: "github",
      href: "https://github.com/therickybobbeh",
      label: "GitHub"
    },
    {
      icon: "linkedin",
      href: "https://www.linkedin.com/in/this-is-robert/",
      label: "LinkedIn"
    }
  ];

  return (
    <section id="contact-section" className="section bg-dark py-5 position-relative">
      {/* Background decorations */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
        <div className="position-absolute rounded-circle bg-primary opacity-10" 
          style={{ width: '300px', height: '300px', filter: 'blur(80px)', top: '5%', right: '10%', zIndex: 0 }}></div>
        <div className="position-absolute rounded-circle bg-primary opacity-10" 
          style={{ width: '200px', height: '200px', filter: 'blur(60px)', bottom: '10%', left: '5%', zIndex: 0 }}></div>
      </div>
      
      <Container className="py-5 position-relative" style={{ zIndex: 1 }}>
        {/* Section header */}
        <Row className="justify-content-center mb-5">
          <Col lg={8} md={10} className="text-center">
            <Heading level={2} color="white" variant="section" className="mb-3">
              Get in Touch
            </Heading>
            <Text color="white-50" variant="lead" className="mb-0">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out 
              using any of the contact methods below.
            </Text>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <Card className="card border-0 shadow-lg rounded-4">
              {/* Card header - Purple gradient header */}
              <Card.Header className="card-header-gradient border-0 p-4">
                <div className="d-flex align-items-center">
                  <div className="bg-primary-custom rounded-circle me-3 shadow-sm d-flex align-items-center justify-content-center" 
                    style={{ width: "48px", height: "48px" }}>
                    <Icon name="person-lines-fill" color="white" size="md" />
                  </div>
                  <div>
                    <h4 className="text-dark mb-0">Contact Information</h4>
                    <Text variant="small" className="mb-0 opacity-75 text-dark">
                      Reach out directly through any of these channels
                    </Text>
                  </div>
                </div>
              </Card.Header>
              
              {/* Card body with white background */}
              <Card.Body className="p-4 p-md-5">
                <Row className="g-4">
                  {contactMethods.map((method, index) => (
                    <Col md={4} key={method.icon} className={index < contactMethods.length - 1 ? "mb-4 mb-md-0" : ""}>
                      <div className="d-flex flex-column align-items-center align-items-md-start">
                        {/* Contact information with circular purple badge */}
                        <div className="d-flex align-items-center mb-3">
                          <div className="bg-primary-custom rounded-circle d-flex align-items-center justify-content-center shadow-sm me-3" 
                            style={{ width: "45px", height: "45px" }}>
                            <Icon name={method.icon} color="white" size="md" />
                          </div>
                          <div>
                            <div className="fw-semibold">{method.title}</div>
                            <Text variant="small" color="secondary">{method.subtitle}</Text>
                          </div>
                        </div>
                        {/* Action button */}
                        <div>
                          <Button 
                            as="a"
                            href={method.href}
                            variant="primary-custom"
                            size="sm"
                            rounded
                            withIcon
                            iconPosition="left"
                            iconClassName={`bi bi-${method.actionIcon}`}
                            {...(method.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          >
                            {method.actionText}
                          </Button>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>

                {/* Social links */}
                <div className="text-center mt-5">
                  <Text color="secondary" className="mb-3">
                    Connect with me on social media
                  </Text>
                  <div className="d-flex justify-content-center gap-3">
                    {socialLinks.map(link => (
                      <Button 
                        key={link.icon}
                        as="a"
                        href={link.href} 
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline-primary-custom"
                        size="sm"
                        className="bg-primary-custom rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                        aria-label={link.label}
                        style={{ width: '40px', height: '40px', padding: 0 }}
                      >
                        <Icon name={link.icon} color="white" size="sm" />
                      </Button>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;