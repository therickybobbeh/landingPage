"use client";
import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Heading from '../components/atoms/Typography/Heading';
import Text from '../components/atoms/Typography/Text';
import Icon from '../components/atoms/Icon';
import Experience from '../components/organisms/Experience';
import ResumeLayout from '../components/templates/ResumeLayout';

const resumePdfPath = '/RobertCole_Resume.pdf';

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
              <Heading level={4} className="mb-0">Resume</Heading>
              <a 
                href={resumePdfPath}
                download="RobertCole_Resume.pdf"
                className="btn btn-primary d-inline-flex align-items-center"
              >
                <i className="bi bi-download me-2"></i>
                Download Resume
              </a>
            </Card.Header>
    
          </Card>
        </Col>
      </Row>
      
      {/* Experience section */}
      <Experience />
    </ResumeLayout>
    </div>
  );
}