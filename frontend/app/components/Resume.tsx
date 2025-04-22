"use client";
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';

// Set up the worker for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
    <section id="resume-section" className="py-5">
      <Container className="py-5">
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="display-5 fw-bold mb-3">Professional Resume</h2>
            <p className="lead text-muted mb-0">
              View my qualifications, experience, and education
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <Card className="shadow-sm border-0">
              <Card.Header className="bg-white py-3 d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Resume</h5>
                <div>
                  <a 
                    className="btn btn-outline-primary" 
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
                      <Spinner animation="border" variant="primary" />
                      <p className="mt-2">Loading resume...</p>
                    </div>
                  )}
                  
                  <Document
                    file="/resume.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={<div className="py-5"><Spinner animation="border" /></div>}
                    className="d-flex justify-content-center"
                  >
                    <Page 
                      pageNumber={pageNumber} 
                      renderTextLayer={false} 
                      renderAnnotationLayer={false}
                      width={window !== undefined ? Math.min(window.innerWidth * 0.8, 800) : 800}
                    />
                  </Document>
                </div>
              </Card.Body>
              {numPages && (
                <Card.Footer className="bg-white d-flex justify-content-between align-items-center py-3">
                  <Button 
                    variant="outline-secondary" 
                    onClick={goToPrevPage}
                    disabled={pageNumber <= 1}
                  >
                    <i className="bi bi-chevron-left"></i> Previous
                  </Button>
                  
                  <p className="mb-0">
                    Page {pageNumber} of {numPages}
                  </p>
                  
                  <Button 
                    variant="outline-secondary" 
                    onClick={goToNextPage}
                    disabled={pageNumber >= numPages}
                  >
                    Next <i className="bi bi-chevron-right"></i>
                  </Button>
                </Card.Footer>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Resume;