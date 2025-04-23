"use client";
import React, { useState, FormEvent } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitResult({
          success: true,
          message: 'Your message has been sent successfully. I\'ll get back to you soon!',
        });
        // Clear form
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await response.json();
        setSubmitResult({
          success: false,
          message: errorData.message || 'An error occurred. Please try again later.',
        });
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: 'Unable to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-section" className="section section-gradient-black">
      {/* Background decoration */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: 0 }}>
        <div className="bg-blur-circle bg-blur-circle-purple bg-blur-circle-lg" 
          style={{ top: '5%', right: '10%' }}></div>
        <div className="bg-blur-circle bg-blur-circle-purple bg-blur-circle-md" 
          style={{ bottom: '10%', left: '5%' }}></div>
      </div>
      
      <Container className="section-content">
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <div className="section-header">
              <h2 className="section-title text-white">Get in Touch</h2>
              <p className="section-subtitle text-white-50">
                Have a project in mind or want to discuss potential opportunities? Send me a message and I'll get 
                back to you as soon as possible.
              </p>
            </div>
            
            <Card className="card-custom card-dark shadow-lg">
              <Card.Header className="card-header-gradient border-0 p-4">
                <div className="d-flex align-items-center">
                  <div className="bg-black-custom icon-circle me-3 shadow-sm">
                    <i className="bi bi-envelope-paper-fill text-white fs-4"></i>
                  </div>
                  <div>
                    <h4 className="mb-0 text-white">Send a Message</h4>
                    <p className="mb-0 text-white-50">I'll respond within 24 hours</p>
                  </div>
                </div>
              </Card.Header>
              
              <Card.Body className="p-4 p-md-5">
                {submitResult && (
                  <Alert 
                    variant={submitResult.success ? 'success' : 'danger'}
                    className="mb-4"
                  >
                    {submitResult.message}
                  </Alert>
                )}
                
                <Form onSubmit={handleSubmit}>
                  <Row className="g-4">
                    <Col md={6}>
                      <Form.Group controlId="name">
                        <Form.Label className="form-label-light">Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="form-control-dark"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="email">
                        <Form.Label className="form-label-light">Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="form-control-dark"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mt-3" controlId="subject">
                    <Form.Label className="form-label-light">Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-control-dark"
                    />
                  </Form.Group>

                  <Form.Group className="mt-3" controlId="message">
                    <Form.Label className="form-label-light">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      placeholder="Tell me about your project or inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="form-control-dark textarea-expandable"
                    />
                  </Form.Group>

                  <div className="mt-4 text-center">
                    <Button 
                      type="submit" 
                      className="btn-primary-custom btn-submit" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
              
              <Card.Footer className="bg-black-800 p-4 border-0">
                <Row className="g-4 text-center text-sm-start">
                  <Col sm={4}>
                    <div className="d-flex align-items-center justify-content-center justify-content-sm-start">
                      <div className="bg-primary icon-circle me-3 shadow-sm center-flex">
                        <i className="bi bi-envelope text-white"></i>
                      </div>
                      <div className="text-white-50">
                        <small>Email</small>
                        <p className="mb-0 text-white">contact@example.com</p>
                      </div>
                    </div>
                  </Col>
                  <Col sm={4}>
                    <div className="d-flex align-items-center justify-content-center justify-content-sm-start">
                      <div className="bg-primary icon-circle me-3 shadow-sm center-flex">
                        <i className="bi bi-telephone text-white"></i>
                      </div>
                      <div className="text-white-50">
                        <small>Phone</small>
                        <p className="mb-0 text-white">(123) 456-7890</p>
                      </div>
                    </div>
                  </Col>
                  <Col sm={4}>
                    <div className="d-flex align-items-center justify-content-center justify-content-sm-start">
                      <div className="bg-primary icon-circle me-3 shadow-sm center-flex">
                        <i className="bi bi-geo-alt text-white"></i>
                      </div>
                      <div className="text-white-50">
                        <small>Location</small>
                        <p className="mb-0 text-white">New York, USA</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;