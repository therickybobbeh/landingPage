"use client";
import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <section id="about-section" className="section-gradient-mono py-5">
      <Container className="py-5">
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="display-5 fw-bold mb-3 text-white">About Me</h2>
            <p className="lead text-white-50 mb-0">
              Passionate developer building innovative web solutions
            </p>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={4} md={5} className="mb-4 mb-md-0">
            <div className="text-center">
              <div className="position-relative d-inline-block">
                <div className="card-gradient-purple rounded-circle position-absolute w-100 h-100" 
                  style={{ transform: 'translate(10px, 10px)', zIndex: 0 }}></div>
                <Image 
                  src="/profile-placeholder.jpg" 
                  alt="Profile Photo" 
                  roundedCircle 
                  className="img-fluid mb-4 shadow position-relative"
                  style={{ maxWidth: '250px', border: '4px solid white', zIndex: 1 }}
                />
              </div>
            </div>
          </Col>
          <Col lg={8} md={7}>
            <Card className="border-0 shadow-lg card-light-grey">
              <Card.Body className="p-4">
                <h3 className="mb-3 text-primary-custom">Hello, I'm John Doe</h3>
                <p className="mb-3">
                  I'm a full-stack developer with over 5 years of experience building web applications
                  using modern technologies. My expertise spans across frontend frameworks like React and Next.js,
                  as well as backend technologies including FastAPI and PostgreSQL.
                </p>
                <p className="mb-3">
                  My approach to development focuses on creating clean, maintainable code that delivers
                  exceptional user experiences. I'm passionate about building accessible applications
                  that solve real-world problems.
                </p>
                <p className="mb-4">
                  When I'm not coding, you can find me hiking in the mountains, reading science fiction,
                  or experimenting with new technologies to expand my skill set.
                </p>
                
                <h4 className="border-bottom border-primary pb-2 mb-3">My Focus Areas</h4>
                <Row className="g-4">
                  <Col md={6}>
                    <div className="card-light rounded-3 p-3 h-100 shadow-sm">
                      <div className="d-flex align-items-center">
                        <div className="bg-primary p-3 rounded-3 text-white me-3">
                          <i className="bi bi-laptop fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Web Development</h5>
                          <p className="mb-0 text-muted small">Responsive, modern interfaces</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="card-light rounded-3 p-3 h-100 shadow-sm">
                      <div className="d-flex align-items-center">
                        <div className="bg-secondary p-3 rounded-3 text-white me-3">
                          <i className="bi bi-server fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">API Design</h5>
                          <p className="mb-0 text-muted small">Scalable backend services</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="card-light rounded-3 p-3 h-100 shadow-sm">
                      <div className="d-flex align-items-center">
                        <div className="bg-tertiary p-3 rounded-3 text-dark me-3">
                          <i className="bi bi-database fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Database Architecture</h5>
                          <p className="mb-0 text-muted small">Optimized data structures</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="card-light rounded-3 p-3 h-100 shadow-sm">
                      <div className="d-flex align-items-center">
                        <div className="bg-primary-light p-3 rounded-3 text-white me-3">
                          <i className="bi bi-diagram-3 fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">DevOps</h5>
                          <p className="mb-0 text-muted small">CI/CD and containerization</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;