"use client";
import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  codeUrl: string;
  featured: boolean;
  gradient: string;
  showImage?: boolean;
  disableDemo?: boolean;
  disableCode?: boolean; 
}


const projects: Project[] = [
  {
    id: 1,
    title: "Peritoneal Dialysis (PD) Management App",
    description: "A full stack application for managing peritoneal dialysis (PD) schedules, treatments, and patient records working whith fhir servers. The application allows patients to log their health data, provides analytics for trend monitoring, and enables providers to make informed treatment decisions based on notifications.",
    image: "/githubPreview/dialysisImage.png",
    technologies: ["Angular", "fhir", "PostgreSQL", "python", "FastAPI"],
    demoUrl: "",
    codeUrl: "https://github.com/therickybobbeh/dialysisApp",
    featured: true,
    gradient: "card-gradient-purple",
    showImage: true,
    disableDemo: true,
  },
  {
    id: 2,
    title: "This website",
    description: "Personal project where I explore differnt tools to create frontends.",
    image: "/githubPreview/react.png",
    technologies: ["react", "next.js", "azure", "typescript", "CI/CD", "github actions"],
    demoUrl: "",
    codeUrl: "https://github.com/therickybobbeh/landingPage",
    featured: false,
    gradient: "card-gradient-dark",
    showImage: true,
    disableDemo: true,
  },
  {
    id: 3,
    title: "Ravens Scale matrix AI",
    description: "An ai made from scratch using purely knowledge based implemntaion. \
      The AI is designed to solve the Ravens Progressive Matrices, a non-verbal test of intelligence \
      that requires pattern recognition and logical reasoning. \n\n\
      To access this project please email me individually, Georgia Tech has asked me to not share it publicly.",
    image: "/githubPreview/ravensScale.png",
    technologies: ["Python", "openCv", "numpy"],
    demoUrl: "https://social-dash.example.com",
    codeUrl: "https://github.com/username/social-dashboard",
    featured: true,
    gradient: "card-gradient-analogous",
    showImage: true,
    disableDemo: true,
    disableCode: true,
  },
  {
    id: 4,
    title: "Dependency Scanner",
    description: "A comprehensive dependency scanning tool designed to analyze project \
     dependencies and identify security vulnerabilities. The application features both a CLI \
     interface for developer workflows and a web interface for easy visualization of scan results.\
      This tool helps teams maintain secure codebases by detecting outdated or vulnerable dependencies.",
    image: "/githubPreview/dep-scanner.png",
    technologies: ["Python", "AWS", "Flask", "PyPI", "Docker", "CI/CD"],
    demoUrl: "http://depscan-prod-alb-1243821159.us-east-1.elb.amazonaws.com/",
    codeUrl: "https://github.com/therickybobbeh/dep-scanner",
    featured: true,
    gradient: "card-gradient-blue",
    showImage: true,
    disableDemo: false,
    disableCode: false,
  }
];

const Projects = () => {
  return (
    <section id="projects-section" className="section">
      <Container className="section-content">
        <div className="section-header">
          <h2 className="section-title text-white">Featured Projects</h2>
          <p className="section-subtitle text-white-50">
            Check out some of my recent development work
          </p>
        </div>

        <Row className="g-4">
          {projects.map((project) => (
            <Col lg={4} md={6} key={project.id}>
              <Card className="card-custom card-hover h-100 border-0 bg-white shadow">
                <div className="position-relative">
                  {/* Conditionally render the image preview */}
                  {project.showImage !== false && (
                    <Card.Img
                      variant="top"
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                      style={{
                        height: '200px',
                        objectFit: 'cover',
                        border: '4px solid #ffffff',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                        borderRadius: '8px'
                      }}
                    />
                  )}
                  {project.featured && (
                    <Badge bg="accent" className="floating-badge custom-badge">
                      <i className="bi bi-star-fill me-1"></i> Featured
                    </Badge>
                  )}
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold mb-3 text-primary-custom">
                    {project.title}
                  </Card.Title>
                  <Card.Text className="mb-4 text-dark">
                    {project.description}
                  </Card.Text>
                  <div className="mb-3">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className="me-2 mb-2 py-2 px-3 bg-light text-dark"
                        style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto d-flex gap-2">
                    {/* Conditionally render the demo button */}
                    {!project.disableDemo && project.demoUrl && (
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary-custom flex-grow-1 btn-icon">
                        <i className="bi bi-display btn-icon-start"></i> Live Demo
                      </Link>
                    )}
                    {/* Conditionally render the code button */}
                    {!project.disableCode && (
                      <Link
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-black-custom btn-icon">
                        <i className="bi bi-github btn-icon-start"></i> Code
                      </Link>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Link
            href="https://github.com/therickybobbeh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary-custom px-5 py-3 fw-bold btn-icon"
            style={{ boxShadow: '0 4px 15px rgba(122, 215, 227, 0.3)' }}>
            <i className="bi bi-github btn-icon-start"></i>
            View More on GitHub
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Projects;