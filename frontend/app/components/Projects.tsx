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
}

// Sample projects data (would be fetched from API in production)
const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store with secure payment processing, user accounts, and an admin dashboard.",
    image: "/project-1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "https://demo-ecommerce.example.com",
    codeUrl: "https://github.com/username/ecommerce-platform",
    featured: true,
    gradient: "card-gradient-purple"
  },
  {
    id: 2,
    title: "Budget Tracker App",
    description: "Personal finance application that helps users track expenses, set budgets, and visualize spending patterns.",
    image: "/project-2.jpg",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
    demoUrl: "https://budget-app.example.com",
    codeUrl: "https://github.com/username/budget-tracker",
    featured: false,
    gradient: "card-gradient-dark"
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media managers with scheduled posting and engagement metrics.",
    image: "/project-3.jpg",
    technologies: ["Next.js", "TypeScript", "FastAPI", "Redis"],
    demoUrl: "https://social-dash.example.com",
    codeUrl: "https://github.com/username/social-dashboard",
    featured: true,
    gradient: "card-gradient-analogous"
  },
];

const Projects = () => {
  return (
    <section id="projects-section" className="section section-gradient-charcoal">
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
              <Card className="card-custom card-hover card-light-grey h-100 border-0">
                <div className="position-relative">
                  <div className={`position-absolute w-100 h-100 opacity-50 ${project.gradient}`} 
                    style={{ mixBlendMode: 'overlay', zIndex: 1 }}></div>
                  <Card.Img 
                    variant="top" 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
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
                  <Card.Text className="mb-4">
                    {project.description}
                  </Card.Text>
                  <div className="mb-3">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        className={`me-2 mb-2 py-2 px-3 custom-badge ${project.gradient}`}
                        style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto d-flex gap-2">
                    <Link 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary-custom flex-grow-1 btn-icon"
                    >
                      <i className="bi bi-display btn-icon-start"></i> Live Demo
                    </Link>
                    <Link 
                      href={project.codeUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-black-custom btn-icon"
                    >
                      <i className="bi bi-github btn-icon-start"></i> Code
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Link 
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-tertiary-custom px-5 py-3 fw-bold btn-icon"
            style={{ boxShadow: '0 4px 15px rgba(122, 215, 227, 0.3)' }}
          >
            <i className="bi bi-github btn-icon-start"></i>
            View More on GitHub
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Projects;