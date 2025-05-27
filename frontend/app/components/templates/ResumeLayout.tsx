import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainLayout from './MainLayout';
import { Heading, Text } from '../atoms';

interface ResumeLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const ResumeLayout = ({ 
  children, 
  title = "My Resume", 
  subtitle = "Professional experience and skills" 
}: ResumeLayoutProps) => {
  return (
    <MainLayout>
      {/* Header Section */}
      <section className="bg-primary-custom py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <Heading level={1} color="white" weight="bold" className="mb-3">
                {title}
              </Heading>
              <Text color="white-50" variant="lead" className="mb-0">
                {subtitle}
              </Text>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Content Section */}
      <section className="py-5">
        <Container>
          {children}
        </Container>
      </section>
    </MainLayout>
  );
};

export default ResumeLayout;