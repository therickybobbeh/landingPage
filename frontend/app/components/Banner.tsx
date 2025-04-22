"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ModalVideo from 'react-modal-video';

const Banner = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section id="home-section" className="bg-dark position-relative py-5">
      {/* Video modal for "How it works" */}
      <ModalVideo channel='youtube' isOpen={isOpen} videoId="your_video_id" onClose={() => setOpen(false)} />
      
      <Container className="py-5">
        <Row className="align-items-center py-5">
          <Col lg={7} className="mb-5 mb-lg-0">
            <h1 className="display-4 fw-bold text-white mb-4">
              Developer Portfolio<br />
              Showcase Your Work
            </h1>
            <p className="text-light fs-5 mb-5">
              A professional portfolio highlighting skills, projects, and experience. 
              Connect with potential clients and employers through this 
              interactive platform.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Button variant="primary" size="lg" className="px-4 py-3">
                View Projects
              </Button>
              <Button 
                variant="outline-light" 
                className="d-flex align-items-center px-4 py-3"
                onClick={() => setOpen(true)}
              >
                <i className="bi bi-play-circle me-2 fs-5"></i>
                Watch Overview
              </Button>
            </div>
          </Col>

          <Col lg={5} className="text-center">
            <div className="position-relative banner-image-container">
              {/* Profile image placeholder */}
              <Image 
                src="/profile-placeholder.jpg" 
                alt="Developer Profile" 
                width={400} 
                height={400} 
                className="rounded-circle shadow img-fluid"
                style={{ objectFit: 'cover' }}
              />
              
              {/* Decorative elements */}
              <div className="position-absolute top-0 start-0 translate-middle bg-primary rounded-circle p-3 d-none d-lg-block">
                <i className="bi bi-code-slash text-white fs-5"></i>
              </div>
              
              <div className="position-absolute bottom-0 end-0 translate-middle bg-info rounded-circle p-3 d-none d-lg-block">
                <i className="bi bi-braces text-white fs-5"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;