"use client";
import React, { useState, FormEvent } from 'react';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import Card, { CardHeader, CardBody, CardFooter } from '../atoms/Card';
import Button from '../atoms/Button';
import Heading from '../atoms/Typography/Heading';
import Text from '../atoms/Typography/Text';
import Icon from '../atoms/Icon';
import FormGroup from '../molecules/FormGroup';
import IconWithText from '../molecules/IconWithText';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormState {
  isSubmitting: boolean;
  submitResult: {
    success: boolean;
    message: string;
  } | null;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [state, setState] = useState<ContactFormState>({
    isSubmitting: false,
    submitResult: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setState({ ...state, isSubmitting: true, submitResult: null });

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
        setState({
          isSubmitting: false,
          submitResult: {
            success: true,
            message: 'Your message has been sent successfully. I\'ll get back to you soon!',
          }
        });
        // Clear form
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await response.json();
        setState({
          isSubmitting: false,
          submitResult: {
            success: false,
            message: errorData.message || 'An error occurred. Please try again later.',
          }
        });
      }
    } catch (error) {
      setState({
        isSubmitting: false,
        submitResult: {
          success: false,
          message: 'Unable to send message. Please try again later.',
        }
      });
    }
  };

  return (
    <section id="contact-section" className="section bg-dark py-5">
      {/* Background decoration */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: 0 }}>
        <div className="position-absolute rounded-circle bg-primary opacity-10" 
          style={{ width: '300px', height: '300px', filter: 'blur(80px)', top: '5%', right: '10%' }}></div>
        <div className="position-absolute rounded-circle bg-primary opacity-10" 
          style={{ width: '200px', height: '200px', filter: 'blur(60px)', bottom: '10%', left: '5%' }}></div>
      </div>
      
      <Container className="py-5 position-relative" style={{ zIndex: 1 }}>
        <Row className="justify-content-center mb-5">
          <Col lg={8} md={10} className="text-center">
            <Heading level={2} color="white" variant="section" className="mb-3">
              Get in Touch
            </Heading>
            <Text color="white-50" variant="lead" className="mb-0">
              Have a project in mind or want to discuss potential opportunities? Send me a message and I'll get 
              back to you as soon as possible.
            </Text>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <Card variant="dark" roundedSize="lg">
              <CardHeader className="card-header-gradient border-0 p-4">
                <div className="d-flex align-items-center">
                  <div className="bg-dark icon-circle me-3 shadow-sm center-flex">
                    <Icon name="envelope-paper-fill" color="white" size="md" />
                  </div>
                  <div>
                    <Heading level={4} color="white" className="mb-0">
                      Send a Message
                    </Heading>
                    <Text color="white-50" variant="small" className="mb-0">
                      I'll respond within 24 hours
                    </Text>
                  </div>
                </div>
              </CardHeader>
              
              <CardBody className="p-4 p-md-5">
                {state.submitResult && (
                  <Alert 
                    variant={state.submitResult.success ? 'success' : 'danger'}
                    className="mb-4"
                  >
                    {state.submitResult.message}
                  </Alert>
                )}
                
                <Form onSubmit={handleSubmit}>
                  <Row className="g-4">
                    <Col md={6}>
                      <FormGroup 
                        controlId="name" 
                        label="Your Name" 
                        required
                        variant="dark"
                      >
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="form-control-dark"
                        />
                      </FormGroup>
                    </Col>

                    <Col md={6}>
                      <FormGroup 
                        controlId="email" 
                        label="Email Address" 
                        required
                        variant="dark"
                      >
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="form-control-dark"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <FormGroup 
                    controlId="subject" 
                    label="Subject" 
                    required
                    variant="dark"
                    className="mt-3"
                  >
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-control-dark"
                    />
                  </FormGroup>

                  <FormGroup 
                    controlId="message" 
                    label="Message" 
                    required
                    variant="dark"
                    className="mt-3"
                  >
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
                  </FormGroup>

                  <div className="mt-4 text-center">
                    <Button 
                      type="submit" 
                      variant="primary"
                      size="lg" 
                      rounded
                      disabled={state.isSubmitting}
                    >
                      {state.isSubmitting ? (
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
              </CardBody>
              
              <CardFooter className="bg-black-800 p-4 border-0">
                <Row className="g-4 text-center text-sm-start">
                  <Col sm={4}>
                    <IconWithText
                      iconName="envelope"
                      title="contact@example.com"
                      subtitle="Email"
                      iconColor="primary"
                      titleColor="white"
                      subtitleColor="white-50"
                      iconClassName="bg-primary icon-circle center-flex shadow-sm"
                    />
                  </Col>
                  <Col sm={4}>
                    <IconWithText
                      iconName="telephone"
                      title="(123) 456-7890"
                      subtitle="Phone"
                      iconColor="primary"
                      titleColor="white"
                      subtitleColor="white-50"
                      iconClassName="bg-primary icon-circle center-flex shadow-sm"
                    />
                  </Col>
                  <Col sm={4}>
                    <IconWithText
                      iconName="geo-alt"
                      title="New York, USA"
                      subtitle="Location"
                      iconColor="primary"
                      titleColor="white"
                      subtitleColor="white-50"
                      iconClassName="bg-primary icon-circle center-flex shadow-sm"
                    />
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;