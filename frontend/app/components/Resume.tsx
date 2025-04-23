"use client";
import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';

// Set up the worker for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pdfWidth, setPdfWidth] = useState<number>(800);

  useEffect(() => {
    // Update width after component mounts (client-side only)
    const handleResize = () => {
      setPdfWidth(Math.min(window.innerWidth * 0.8, 800));
    };
    
    // Set initial width
    handleResize();
    
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsLoading(false);
  };

  const goToPrevPage = () => {
    setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prevPageNumber) => 
      Math.min(prevPageNumber + 1, numPages || 1)
    );
  };

  return (
    <section id="resume-section" className="py-5 section-light">
      <Container className="py-5">
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="display-5 fw-bold mb-3 text-primary-custom">Professional Resume</h2>
            <p className="lead text-muted mb-0">
              View my qualifications, experience, and education
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <Card className="card-custom shadow">
              <Card.Header className="d-flex justify-content-between align-items-center py-3 bg-primary-custom text-white">
                <h5 className="mb-0">Resume</h5>
                <div>
                  <a 
                    className="btn btn-accent-custom" 
                    href="/resume.pdf" 
                    download
                  >
                    <i className="bi bi-download me-1"></i> Download PDF
                  </a>
                </div>
              </Card.Header>
              <Card.Body className="p-0">
                <div className="pdf-container text-center">
                  {isLoading && (
                    <div className="py-5">
                      <Spinner animation="border" style={{ color: 'var(--primary)' }} />
                      <p className="mt-2">Loading resume...</p>
                    </div>
                  )}
                  
                  <Document
                    file="/resume.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={<div className="py-5"><Spinner animation="border" style={{ color: 'var(--primary)' }} /></div>}
                    className="d-flex justify-content-center"
                    error={<div className="py-5 text-danger">Failed to load PDF. Please check that the resume file exists.</div>}
                  >
                    <Page 
                      pageNumber={pageNumber} 
                      renderTextLayer={false} 
                      renderAnnotationLayer={false}
                      width={pdfWidth}
                      className="my-3"
                    />
                  </Document>
                </div>
              </Card.Body>
              {numPages && (
                <Card.Footer className="bg-light d-flex justify-content-between align-items-center py-3">
                  <Button 
                    variant="outline-secondary" 
                    onClick={goToPrevPage}
                    disabled={pageNumber <= 1}
                    className="d-flex align-items-center"
                  >
                    <i className="bi bi-chevron-left me-1"></i> Previous
                  </Button>
                  
                  <div className="px-3 py-1 bg-primary-custom text-white rounded">
                    Page <strong>{pageNumber}</strong> of <strong>{numPages}</strong>
                  </div>
                  
                  <Button 
                    variant="outline-secondary" 
                    onClick={goToNextPage}
                    disabled={pageNumber >= numPages}
                    className="d-flex align-items-center"
                  >
                    Next <i className="bi bi-chevron-right ms-1"></i>
                  </Button>
                </Card.Footer>
              )}
            </Card>
            
            <div className="mt-5 text-center">
              <p className="text-muted mb-4">
                Don't see the resume properly? You can also view it directly or download it using the links below:
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary-custom"
                >
                  <i className="bi bi-eye me-2"></i>
                  View PDF
                </a>
                <a 
                  href="/resume.pdf" 
                  download 
                  className="btn btn-accent-custom"
                >
                  <i className="bi bi-file-earmark-arrow-down me-2"></i>
                  Download PDF
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Resume;