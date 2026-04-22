"use client";
import React from 'react';
import { Container, Row, Col, Card, Image as BootstrapImage, Carousel } from 'react-bootstrap';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <section id="about-section" className="section-gradient-mono py-5">
      <Container className="py-5">
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="display-5 fw-bold mb-3 text-white">About Me</h2>
            <p className="lead text-white-50 mb-0">
              Full-stack software engineer with years of experience building and operating
              highly compliant systems in regulated, secure environments.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={4} md={5} className="mb-4 mb-md-0">
            <div className="text-center">
              <div className="position-relative d-inline-block">
                <div className="card-gradient-purple rounded-circle position-absolute w-100 h-100" 
                  style={{ transform: 'translate(10px, 10px)', zIndex: 0 }}></div>
                <BootstrapImage 
                  src="/images/personal/headshot.jpeg" 
                  alt="Robert Cole - Profile Photo" 
                  roundedCircle 
                  className="img-fluid mb-4 shadow position-relative"
                  style={{ maxWidth: '250px', border: '4px solid white', zIndex: 1 }}
                />
              </div>
              
              {/* Education Badge */}
              <div className="mt-4 mb-4">
                <div className="bg-white rounded-pill shadow-sm p-3 d-flex align-items-center mb-3">
                  <div className="bg-primary rounded-circle p-2 me-2" style={{ width: '40px', height: '40px' }}>
                    <i className="bi bi-mortarboard-fill text-white fs-5"></i>
                  </div>
                  <div className="text-start">
                    <h6 className="mb-0 fw-bold text-black">Georgia Tech</h6>
                    <small className="text-muted">Master&apos;s in Computer Science</small>
                  </div>
                </div>
                
                <div className="bg-white rounded-pill shadow-sm p-3 d-flex align-items-center">
                  <div className="bg-secondary rounded-circle p-2 me-2" style={{ width: '40px', height: '40px' }}>
                    <i className="bi bi-mortarboard-fill text-white fs-5"></i>
                  </div>
                  <div className="text-start">
                    <h6 className="mb-0 fw-bold text-black">Kennesaw State University</h6>
                    <small className="text-muted">BS in Cybersecurity</small>
                  </div>
                </div>
              </div>
              
              {/* Interests Carousel */}
              <div className="mt-4">
                <h5 className="text-white mb-3">Life Beyond Code</h5>
                <Carousel className="interest-carousel shadow rounded bg-white">
                  <Carousel.Item>
                    <div style={{ position: 'relative', height: '200px', width: '100%' }}>
                      <Image
                        src="/images/personal/snowboard.jpeg"
                        alt="Snowboarding"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded"
                      />
                    </div>
                    <Carousel.Caption>
                      <h5 className="bg-dark bg-opacity-50 p-1 rounded">Snowboarding</h5>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div style={{ position: 'relative', height: '200px', width: '100%' }}>
                      <Image
                        src="/images/personal/fishing.jpeg"
                        alt="Fishing"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded"
                      />
                    </div>
                    <Carousel.Caption>
                      <h5 className="bg-dark bg-opacity-50 p-1 rounded">Fishing Adventures</h5>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div style={{ position: 'relative', height: '200px', width: '100%' }}>
                      <Image
                        src="/images/personal/crab.jpeg"
                        alt="Crabbing"
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                        className="rounded"
                      />
                    </div>
                    {/* <Carousel.Caption>
                      <h5 className="bg-dark bg-opacity-50 p-1 rounded">Crabbing Experiences</h5>
                    </Carousel.Caption> */}
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </Col>
          <Col lg={8} md={7}>
            <Card className="border-0 shadow-lg card-light-grey">
              <Card.Body className="p-4">
                <h3 className="mb-3 text-primary-custom">Hello, I&apos;m Robert Cole</h3>
                <p className="mb-3">
                I&apos;m a software engineer with a background spanning full-stack development, cloud-native
                systems, and cybersecurity. Most of my career has been spent inside HIPAA-regulated
                healthcare and insurance environments &mdash; places where security, auditability, and data
                integrity are non-negotiable &mdash; so I build with those constraints in mind from day one.
                </p>
                <p className="mb-3">
                Currently contracting through On-Demand Group at Medica, I lead greenfield engineering
                initiatives on internal platforms, including an API observability tool and a real-time
                Kafka-based data streaming pipeline, while partnering with DevOps to harden deployments
                across Kubernetes and Confluent Cloud. Previously at Optum / UnitedHealth Group, I shipped
                Angular and Spring Boot applications, led cloud modernization of EHR integrations using
                FHIR, HL7, and SMART on FHIR, and drove a 95% reduction in security vulnerabilities through
                disciplined dependency hygiene and refactoring.
                </p>
                <p className="mb-4">
                I&apos;m pursuing a Master&apos;s in Computer Science with an AI specialization at Georgia
                Tech while working full-time, and I hold a BS in Cybersecurity from Kennesaw State. That
                combination &mdash; engineering, AI, and security &mdash; shapes how I think about every
                system I build.
                </p>
                
                <h4 className="border-bottom border-primary pb-2 mb-3">My Focus Areas</h4>
                <Row className="g-4">
                  <Col md={6}>
                    <div className="card-light rounded-3 p-3 h-100 shadow-sm">
                      <div className="d-flex align-items-center">
                        <div className="bg-primary p-3 rounded-3 text-white me-3">
                          <i className="bi bi-layers fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Full-Stack Engineering</h5>
                          <p className="mb-0 text-muted small">Java, Spring Boot, TypeScript, Angular, React, Next.js</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="card-light rounded-3 p-3 h-100 shadow-sm">
                      <div className="d-flex align-items-center">
                        <div className="bg-secondary p-3 rounded-3 text-white me-3">
                          <i className="bi bi-shield-check fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Compliant &amp; Secure Systems</h5>
                          <p className="mb-0 text-muted small">HIPAA environments, vulnerability remediation, SOC &amp; cybersecurity background</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="card-light rounded-3 p-3 h-100 shadow-sm">
                      <div className="d-flex align-items-center">
                        <div className="bg-tertiary p-3 rounded-3 text-dark me-3">
                          <i className="bi bi-heart-pulse fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Healthcare Interoperability</h5>
                          <p className="mb-0 text-muted small">FHIR, HL7, SMART on FHIR, Epic, EHR integrations</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="card-light rounded-3 p-3 h-100 shadow-sm">
                      <div className="d-flex align-items-center">
                        <div className="bg-primary-light p-3 rounded-3 text-white me-3">
                          <i className="bi bi-diagram-3 fs-4 text-dark"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Cloud &amp; DevOps in Regulated Envs</h5>
                          <p className="mb-0 text-muted small">Azure, AWS, Docker, Kubernetes, Terraform, CI/CD</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="card-light rounded-3 p-3 h-100 shadow-sm">
                      <div className="d-flex align-items-center">
                        <div className="bg-primary p-3 rounded-3 text-white me-3">
                          <i className="bi bi-broadcast-pin fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Streaming &amp; Data Platforms</h5>
                          <p className="mb-0 text-muted small">Confluent Kafka, GraphQL, Hasura, Apollo, PostgreSQL</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="card-light rounded-3 p-3 h-100 shadow-sm">
                      <div className="d-flex align-items-center">
                        <div className="bg-secondary p-3 rounded-3 text-white me-3">
                          <i className="bi bi-cpu fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Applied AI &amp; ML</h5>
                          <p className="mb-0 text-muted small">Python, OpenCV, NumPy, knowledge-based reasoning, Georgia Tech MS</p>
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