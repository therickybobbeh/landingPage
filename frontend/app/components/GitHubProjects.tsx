"use client";
import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const GitHubProjects = () => {
  return (
    <section id="about-me-section" className="section-gradient-mono py-5">
      <Container className="py-5">
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="display-5 fw-bold mb-3 text-white">About Me</h2>
            <p className="lead text-white-50 mb-0">
              I am a passionate developer with experience in building full-stack applications. I specialize in creating responsive and user-friendly web applications using modern technologies like Next.js, FastAPI, and PostgreSQL. My goal is to deliver high-quality software solutions that solve real-world problems.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={6} md={12} className="mb-4">
            <Card className="h-100 shadow-lg hover-lift border-0 card-light-grey">
              <div className="card-gradient-purple h-100 w-2 position-absolute top-0 start-0 bottom-0" 
                style={{ borderTopLeftRadius: 'var(--bs-card-border-radius)', borderBottomLeftRadius: 'var(--bs-card-border-radius)' }}></div>
              <Card.Body className="p-4 ps-5">
                <h4 className="card-title mb-3 fw-bold text-primary-custom">My Journey</h4>
                <Card.Text>
                  I started my development journey with a focus on front-end technologies and gradually expanded my skill set to include back-end development and database management. Over the years, I have worked on various projects ranging from personal portfolios to complex e-commerce platforms.
                </Card.Text>
                <div className="mt-3 d-flex">
                  <div className="rounded-pill py-2 px-3 me-2 bg-primary-custom text-white small">
                    <i className="bi bi-calendar-check me-1 text-white"></i> 5+ Years Experience
                  </div>
                  <div className="rounded-pill py-2 px-3 me-2 bg-secondary-custom text-white small">
                    <i className="bi bi-code-slash me-1 text-white"></i> 25+ Projects
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} md={12} className="mb-4">
            <Card className="h-100 shadow-lg hover-lift border-0 card-light-grey">
              <div className="card-gradient-analogous h-100 w-2 position-absolute top-0 start-0 bottom-0" 
                style={{ borderTopLeftRadius: 'var(--bs-card-border-radius)', borderBottomLeftRadius: 'var(--bs-card-border-radius)' }}></div>
              <Card.Body className="p-4 ps-5">
                <h4 className="card-title mb-3 fw-bold text-primary-custom">My Vision</h4>
                <Card.Text>
                  My vision is to continuously learn and grow as a developer while contributing to meaningful projects. I believe in the power of technology to bring positive change and strive to create applications that are not only functional but also impactful.
                </Card.Text>
                <div className="mt-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary me-3 p-2 rounded-circle text-center" style={{ width: '40px', height: '40px' }}>
                      <i className="bi bi-lightbulb text-white"></i>
                    </div>
                    <div>
                      <h6 className="mb-0">Innovation-Driven Development</h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="bg-secondary me-3 p-2 rounded-circle text-center" style={{ width: '40px', height: '40px' }}>
                      <i className="bi bi-people text-white"></i>
                    </div>
                    <div>
                      <h6 className="mb-0">User-Centered Solutions</h6>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GitHubProjects;