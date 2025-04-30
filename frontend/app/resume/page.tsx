"use client";
import React, { useState } from 'react';
import { Row, Col, Card, Nav } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';
import ResumeLayout from '../components/templates/ResumeLayout';
import { Heading, Text, Button, Icon } from '../components/atoms';
import { AnimatedCard } from '../components/molecules';

// Configure pdf.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumePdfPath = '/Robert Cole - Software Engineer - Resume copy.pdf';

export default function ResumePage() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<string>('view');

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const nextPage = () => {
    if (pageNumber < (numPages || 1)) {
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <ResumeLayout 
      title="Professional Resume" 
      subtitle="My skills, experience, and education details"
    >
      <Row className="justify-content-center mb-4">
        <Col md={10} lg={8}>
          <Card className="border-0 shadow-sm">
            <Card.Header className="bg-white p-3 d-flex justify-content-between align-items-center">
              <Nav variant="tabs" className="border-bottom-0" activeKey={activeTab}>
                <Nav.Item>
                  <Nav.Link 
                    eventKey="view" 
                    onClick={() => setActiveTab('view')}
                    className="text-primary"
                  >
                    <Icon name="file-earmark-text" size="sm" className="me-2" />
                    View Resume
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link 
                    eventKey="download" 
                    onClick={() => setActiveTab('download')}
                    className="text-primary"
                  >
                    <Icon name="download" size="sm" className="me-2" />
                    Download Options
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              
              <div>
                <Text variant="small" color="muted" className="mb-0">
                  Page {pageNumber} of {numPages || '-'}
                </Text>
              </div>
            </Card.Header>
            
            <Card.Body className="p-0">
              {activeTab === 'view' ? (
                <div className="text-center">
                  <div className="pdf-container position-relative" style={{ height: '80vh', overflow: 'auto' }}>
                    <Document
                      file={resumePdfPath}
                      onLoadSuccess={onDocumentLoadSuccess}
                      className="d-flex justify-content-center"
                    >
                      <Page 
                        pageNumber={pageNumber} 
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        scale={1.2}
                      />
                    </Document>
                  </div>
                  
                  <div className="pdf-controls d-flex justify-content-center py-3 border-top">
                    <Button 
                      onClick={prevPage}
                      disabled={pageNumber <= 1}
                      variant="outline-light"
                      size="sm"
                      withIcon
                      iconClassName="bi bi-chevron-left"
                      className="me-2"
                    >
                      Previous
                    </Button>
                    
                    <Button 
                      onClick={nextPage}
                      disabled={pageNumber >= (numPages || 1)}
                      variant="outline-light"
                      size="sm"
                      withIcon
                      iconClassName="bi bi-chevron-right"
                      iconPosition="right"
                      className="ms-2"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="p-4">
                  <Heading level={4} className="mb-3">Download Options</Heading>
                  
                  <Row className="g-3">
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
                          download
                        >
                          <i className="bi bi-download me-2"></i>
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
                        <Button 
                          variant="outline-light"
                          rounded
                          size="sm"
                          withIcon
                          iconClassName="bi bi-download"
                        >
                          Download DOCX
                        </Button>
                      </AnimatedCard>
                    </Col>
                    
                    <Col sm={6} md={4}>
                      <AnimatedCard
                        gradient="magenta" 
                        className="text-center p-4"
                        animationType="hover-lift"
                      >
                        <Icon name="file-earmark-text" size="lg" color="white" className="mb-3" />
                        <Heading level={5} color="white" className="mb-3">Plain Text</Heading>
                        <Button 
                          variant="outline-light"
                          rounded
                          size="sm"
                          withIcon
                          iconClassName="bi bi-download"
                        >
                          Download TXT
                        </Button>
                      </AnimatedCard>
                    </Col>
                  </Row>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className="justify-content-center">
        <Col md={10} lg={8} className="text-center">
          <Text variant="small" color="muted">
            Last updated: April 2023
          </Text>
        </Col>
      </Row>
    </ResumeLayout>
  );
}