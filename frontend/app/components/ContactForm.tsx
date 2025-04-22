"use client";
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'danger' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In production, this would be an actual API call
      // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/messages`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      
      // if (!response.ok) throw new Error('Failed to submit message');
      
      // Simulate API call success
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        type: 'success',
        message: 'Your message has been sent successfully! I will get back to you soon.',
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'danger',
        message: 'There was an error sending your message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact-section" className="py-5">
      <Container className="py-5">
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold mb-3">Get in Touch</h2>
            <p className="lead text-muted mb-0">
              Have a project in mind or want to discuss potential opportunities? 
              Send me a message and I'll get back to you as soon as possible.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4 p-md-5">
                {submitStatus.type && (
                  <Alert variant={submitStatus.type} dismissible onClose={() => setSubmitStatus({ type: null, message: '' })}>
                    {submitStatus.message}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="name">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} className="mb-3">
                      <Form.Group controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3" controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project or inquiry..."
                      required
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button 
                      variant="primary" 
                      type="submit" 
                      size="lg"
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
            </Card>
          </Col>
        </Row>
        
        <Row className="justify-content-center mt-5">
          <Col lg={8} className="text-center">
            <hr className="my-5" />
            <h4>Or connect with me directly</h4>
            <div className="d-flex justify-content-center gap-4 mt-4">
              <a href="mailto:contact@example.com" className="text-decoration-none">
                <i className="bi bi-envelope-fill fs-4 text-primary me-2"></i>
                contact@example.com
              </a>
              <a href="tel:+1234567890" className="text-decoration-none">
                <i className="bi bi-telephone-fill fs-4 text-primary me-2"></i>
                (123) 456-7890
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;