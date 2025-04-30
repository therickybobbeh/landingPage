"use client";
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import ResumeLayout from '../components/templates/ResumeLayout';
import { Heading, Text, Button, Icon } from '../components/atoms';
import { AnimatedCard } from '../components/molecules';
import Experience from '../components/organisms/Experience';

const resumePdfPath = '/Robert Cole - Software Engineer - Resume copy.pdf';

export default function ResumePage() {
  return (
    <div className="mt-4">
    <ResumeLayout 
      title="Professional Resume" 
      subtitle="My skills, experience, and education details"
    >
      <Row className="justify-content-center mb-4">
        <Col md={10} lg={8}>
          <Card className="border-0 shadow-sm">
            <Card.Header className="p-3 d-flex justify-content-between align-items-center">
              <Heading level={4} className="mb-0">Resume Download</Heading>
              <a 
                className="btn btn-primary-custom btn-sm rounded d-inline-flex align-items-center"
                href={resumePdfPath}
                download="Robert Cole - Software Engineer - Resume.pdf"
              >
                <i className="bi bi-download me-2"></i>
                Download PDF
              </a>
            </Card.Header>
            
            <Card.Body className="p-4">
              <Row className="g-2 justify-content-center">
                <Col sm={6} md={4}>
                  <AnimatedCard
                    gradient="purple" 
                    className="text-center p-4"
                    animationType="hover-lift"
                  >
                    <Icon name="file-earmark-pdf" size="lg" color="white" className="mb-3" />
                    <Heading level={5} color="white" className="mb-3">PDF Format</Heading>
                    <a 
                      className="btn btn-outline-light btn-sm rounded d-inline-flex align-items-center"
                      href={resumePdfPath}
                      download="Robert Cole - Software Engineer - Resume.pdf"
                    >
                      <i className="bi bi-download  me-2"></i>
                      Download PDF
                    </a>
                  </AnimatedCard>
                </Col>
                
                <Col sm={6} md={4}>
                  <AnimatedCard
                    gradient="blue" 
                    className="text-center p-4"
                    animationType="hover-lift"
                  >
                    <Icon name="file-earmark-word" size="lg" color="white" className="mb-3" />
                    <Heading level={5} color="white" className="mb-3">Word Format</Heading>
                    <a 
                      className="btn btn-outline-light btn-sm rounded d-inline-flex align-items-center"
                      href={resumePdfPath}
                      download="Robert Cole - Software Engineer - Resume.docx"
                    >
                      <i className="bi bi-download me-2"></i>
                      Download DOCX
                    </a>
                  </AnimatedCard>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      {/* Experience section added here */}
      <Experience />
      
      <Row className="justify-content-center mt-4">
        <Col md={10} lg={8} className="text-center">
          <Text variant="small" color="muted">
            Last updated: April 2023
          </Text>
        </Col>
      </Row>
    </ResumeLayout>
    </div>
  );
}