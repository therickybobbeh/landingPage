"use client";
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

const Banner = () => {
  return (
    <section 
      className="section-gradient-full py-5 position-relative" 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Background decoration elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: 0 }}>
        <div className="position-absolute rounded-circle" 
          style={{ 
            width: '300px', 
            height: '300px', 
            background: 'rgba(112, 46, 192, 0.2)',
            filter: 'blur(80px)',
            top: '10%',
            left: '5%'
          }}
        ></div>
        <div className="position-absolute rounded-circle" 
          style={{ 
            width: '200px', 
            height: '200px', 
            background: 'rgba(233, 75, 129, 0.15)',
            filter: 'blur(60px)',
            top: '25%',
            right: '15%'
          }}
        ></div>
        <div className="position-absolute rounded-circle" 
          style={{ 
            width: '250px', 
            height: '250px', 
            background: 'rgba(122, 215, 227, 0.15)',
            filter: 'blur(70px)',
            bottom: '15%',
            right: '10%'
          }}
        ></div>
      </div>

      <Container className="py-5 position-relative" style={{ zIndex: 1 }}>
        <Row className="align-items-center g-5">
          <Col lg={7} className="order-lg-1 order-2">
            <h5 className="text-tertiary fw-bold mb-3 d-flex align-items-center">
              <span className="me-2" style={{ width: '30px', height: '2px', display: 'inline-block', background: 'var(--tertiary)' }}></span>
              Full Stack Developer
            </h5>
            <h1 className="display-3 fw-bold text-white mb-4">
              Crafting Digital <span className="text-secondary-custom">Experiences</span> with Modern Technology
            </h1>
            <p className="lead text-white-50 mb-5">
              I design and develop custom web applications that solve real-world problems.
              From responsive frontends to scalable backends, I bring your digital vision to life.
            </p>
            
            <div className="d-flex flex-wrap gap-3">
              <Link href="/#projects-section" passHref>
                <Button className="btn-gradient-warm btn-lg px-4 py-2 btn-rounded">
                  <i className="bi bi-collection me-2"></i>
                  View My Work
                </Button>
              </Link>
              <Link href="/#contact-section" passHref>
                <Button variant="outline-light" className="btn-lg px-4 py-2 btn-rounded">
                  <i className="bi bi-chat-text me-2"></i>
                  Get In Touch
                </Button>
              </Link>
            </div>

            <div className="mt-5 pt-3 d-flex align-items-center">
              <div className="me-4">
                <div className="d-flex">
                  <div className="rounded-circle overflow-hidden border-3 border-white" style={{ width: '35px', height: '35px', marginLeft: '-5px', boxShadow: '0 0 0 2px var(--tertiary)' }}>
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" className="img-fluid" />
                  </div>
                  <div className="rounded-circle overflow-hidden border-3 border-white" style={{ width: '35px', height: '35px', marginLeft: '-5px', boxShadow: '0 0 0 2px var(--tertiary)' }}>
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" className="img-fluid" />
                  </div>
                  <div className="rounded-circle overflow-hidden border-3 border-white" style={{ width: '35px', height: '35px', marginLeft: '-5px', boxShadow: '0 0 0 2px var(--tertiary)' }}>
                    <img src="https://randomuser.me/api/portraits/men/57.jpg" alt="Client" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div>
                <p className="fw-bold text-white mb-0">10+ Clients</p>
                <p className="text-white-50 small mb-0">Trusted worldwide</p>
              </div>
              <div className="ms-4 ps-4 border-start border-white-50">
                <p className="fw-bold text-white mb-0">25+ Projects</p>
                <p className="text-white-50 small mb-0">Delivered on time</p>
              </div>
            </div>
          </Col>
          <Col lg={5} className="order-lg-2 order-1">
            <div className="position-relative" style={{ maxWidth: '500px', margin: '0 auto' }}>
              <div className="card-gradient-purple rounded-4 shadow-lg p-4" style={{ transform: 'rotate(-5deg)' }}>
                <div className="bg-black-700 rounded-3 p-3">
                  <pre className="text-light mb-0"><code>{`function Developer() {
  return {
    name: "John Doe",
    skills: ["React", "Next.js", "FastAPI", "PostgreSQL"],
    passion: "Building beautiful web applications"
  };
}

// Let's build something amazing together!`}</code></pre>
                </div>
              </div>
              <div 
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill card-gradient-magenta px-4 py-2 fs-6 fw-bold"
                style={{ zIndex: 2, boxShadow: '0 4px 12px rgba(233, 75, 129, 0.4)' }}
              >
                <i className="bi bi-check-circle-fill me-2"></i>
                Expert
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;