"use client";
import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import Link from 'next/link';

interface PersonalProject {
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

interface ProfessionalProject {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

const professionalProjects: ProfessionalProject[] = [
  {
    id: 1,
    title: "Real-Time Streaming Data Platform",
    company: "Medica (via On-Demand Group)",
    duration: "2025 - Present",
    description:
      "Architected the transition from batch-based company data processing to event-driven, real-time streaming. Built Kafka pipelines on on-prem Kubernetes and Confluent Cloud, significantly improving data freshness across the business.",
    technologies: ["Confluent Kafka", "Kubernetes", "Event-Driven", "Real-Time Streaming"],
  },
  {
    id: 2,
    title: "API Observability & Network Mapping Tool",
    company: "Medica (via On-Demand Group)",
    duration: "2025 - Present",
    description:
      "Designed and developed an internal tool that visualizes enterprise APIs as nodes in an interactive network bubble chart, giving teams insight into service dependencies and traffic patterns.",
    technologies: ["GraphQL", "Hasura", "Apollo", "Network Visualization"],
  },
  {
    id: 3,
    title: "EHR Cloud Modernization",
    company: "Optum / United Health Group",
    duration: "Jan 2023 - Jan 2025",
    description:
      "Led cloud modernization of EHR integrations for a Fortune 100 healthcare company, expanding the product by 59% across 7+ markets while improving deployment speed and reliability.",
    technologies: ["Angular", "Spring Boot", "Azure DevOps", "Microservices"],
  },
  {
    id: 4,
    title: "Healthcare Interoperability APIs",
    company: "Optum / United Health Group",
    duration: "Jan 2023 - Jan 2025",
    description:
      "Designed and integrated healthcare APIs using FHIR, HL7, and SMART on FHIR standards, including integrations with Epic Health Systems. Consolidated legacy code to reduce affiliate onboarding to ~2 weeks.",
    technologies: ["FHIR", "HL7", "SMART on FHIR", "Java", "PostgreSQL"],
  },
  {
    id: 5,
    title: "Security & Dependency Remediation",
    company: "Optum / United Health Group",
    duration: "Jan 2023 - Jan 2025",
    description:
      "Reduced security vulnerabilities by 95% through targeted dependency upgrades and extensive refactoring across microservices, improving compliance posture and long-term maintainability.",
    technologies: ["Java", ".NET", "CI/CD", "Security"],
  },
  {
    id: 6,
    title: "Active Directory Automation & SOC Operations",
    company: "ServIT",
    duration: "Aug 2021 - Dec 2022",
    description:
      "Automated Active Directory audits and cleanups with PowerShell, managed SOC tasks, and performed vulnerability assessments on client networks while supporting IBM-I server operations and DR procedures.",
    technologies: ["PowerShell", "Active Directory", "Vulnerability Assessment", "Linux"],
  },
];

const personalProjects: PersonalProject[] = [
  {
    id: 1,
    title: "Peritoneal Dialysis (PD) Management App",
    description:
      "A full stack application for managing peritoneal dialysis (PD) schedules, treatments, and patient records working whith fhir servers. The application allows patients to log their health data, provides analytics for trend monitoring, and enables providers to make informed treatment decisions based on notifications.",
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
    description:
      "An ai made from scratch using purely knowledge based implemntaion. \
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
    description:
      "A comprehensive dependency scanning tool designed to analyze project \
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
  },
];

const Projects = () => {
  return (
    <section id="projects-section" className="section">
      <Container className="section-content">
        <div className="section-header">
          <h2 className="section-title text-white">Featured Projects</h2>
          <p className="section-subtitle text-white-50">
            A mix of professional work and things I build on my own time
          </p>
        </div>

        {/* Professional Projects */}
        <div className="mb-3">
          <h3 className="fw-bold text-white mb-2">
            <i className="bi bi-briefcase-fill me-2"></i>Professional Projects
          </h3>
          <p className="text-white-50 mb-4">
            Selected work from my professional experience. Code and live environments are not public.
          </p>
        </div>

        <Row className="g-4 mb-5">
          {professionalProjects.map((project) => (
            <Col lg={4} md={6} key={`pro-${project.id}`}>
              <Card className="card-custom card-hover h-100 border-0 bg-white shadow">
                <Card.Body className="d-flex flex-column">
                  <div className="mb-2">
                    <Badge bg="secondary" className="me-2">
                      <i className="bi bi-briefcase me-1"></i>
                      {project.company}
                    </Badge>
                    <small className="text-muted">{project.duration}</small>
                  </div>
                  <Card.Title className="fw-bold mb-3 text-primary-custom">
                    {project.title}
                  </Card.Title>
                  <Card.Text className="mb-4 text-dark">
                    {project.description}
                  </Card.Text>
                  <div className="mt-auto">
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
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Personal Projects */}
        <div className="mb-3 mt-5">
          <h3 className="fw-bold text-white mb-2">
            <i className="bi bi-code-slash me-2"></i>Personal Projects
          </h3>
          <p className="text-white-50 mb-4">
            Side projects and experiments I build to learn new tools and solve my own problems
          </p>
        </div>

        <Row className="g-4">
          {personalProjects.map((project) => (
            <Col lg={4} md={6} key={`personal-${project.id}`}>
              <Card className="card-custom card-hover h-100 border-0 bg-white shadow">
                <div className="position-relative">
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
                    {!project.disableDemo && project.demoUrl && (
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary-custom flex-grow-1 btn-icon">
                        <i className="bi bi-display btn-icon-start"></i> Live Demo
                      </Link>
                    )}
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
