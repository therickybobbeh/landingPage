"use client";
import React, { useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Alert } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Import our atomic components
import { Card, CardBody, Heading, Text, Button, Icon } from '../components/atoms';
import { FormGroup } from '../components/molecules';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    
    // Mock login - Replace with actual authentication
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (formData.email === 'admin@example.com' && formData.password === 'password') {
        // Success - redirect to admin
        router.push('/admin');
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (err) {
      setError('An error occurred during login. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col lg={5} md={8} sm={11}>
            <div className="text-center mb-4">
              <Link href="/" className="text-decoration-none">
                <Heading level={3} color="primary" className="mb-0">
                  Dev<span className="text-secondary">Portfolio</span>
                </Heading>
              </Link>
            </div>
            
            <Card roundedSize="lg" className="shadow-sm border-0">
              <CardBody className="p-4 p-md-5">
                <div className="text-center mb-4">
                  <Heading level={4}>Admin Login</Heading>
                  <Text color="muted">Sign in to access the dashboard</Text>
                </div>
                
                {error && (
                  <Alert variant="danger" className="mb-4">
                    {error}
                  </Alert>
                )}
                
                <Form onSubmit={handleSubmit}>
                  <FormGroup
                    controlId="email"
                    label="Email Address"
                    required
                  >
                    <InputGroup>
                      <InputGroup.Text>
                        <Icon name="envelope" />
                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="admin@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                  
                  <FormGroup
                    controlId="password"
                    label="Password"
                    required
                  >
                    <InputGroup>
                      <InputGroup.Text>
                        <Icon name="lock" />
                      </InputGroup.Text>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                  
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                  </div>
                  
                  <div className="d-grid">
                    <Button 
                      type="submit" 
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Signing In...
                        </>
                      ) : (
                        'Sign In'
                      )}
                    </Button>
                  </div>
                </Form>
                
                <div className="text-center mt-4">
                  <Text variant="small">
                    <Link href="/" className="text-decoration-none">
                      Forgot your password?
                    </Link>
                  </Text>
                </div>
                
                <hr className="my-4" />
                
                <div className="text-center">
                  <Text variant="small" color="muted">
                    <Link href="/" className="btn btn-sm btn-light">
                      <Icon name="arrow-left" className="me-1" />
                      Return to Website
                    </Link>
                  </Text>
                </div>
              </CardBody>
            </Card>
            
            <div className="text-center mt-4">
              <Text variant="small" color="muted">
                © {new Date().getFullYear()} DevPortfolio. All rights reserved.
              </Text>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}