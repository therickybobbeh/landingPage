"use client";
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

interface ProjectData {
  imgSrc: string;
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  codeUrl: string;
}

const projectsData: ProjectData[] = [
  {
    imgSrc: '/project-1.jpg',
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with shopping cart, user authentication, and payment processing.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: 'https://project-demo.com',
    codeUrl: 'https://github.com/username/project1'
  },
  {
    imgSrc: '/project-2.jpg',
    title: 'Task Management App',
    description: 'A productivity application for organizing tasks with drag-and-drop functionality and team collaboration features.',
    technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
    demoUrl: 'https://project-demo.com',
    codeUrl: 'https://github.com/username/project2'
  },
  {
    imgSrc: '/project-3.jpg',
    title: 'Weather Dashboard',
    description: 'Interactive weather application providing real-time forecasts, historical data, and location-based services.',
    technologies: ['React', 'Redux', 'OpenWeather API', 'Chart.js'],
    demoUrl: 'https://project-demo.com',
    codeUrl: 'https://github.com/username/project3'
  }
];

const Projects = () => {
  return (
    <section id="projects-section" className="py-5 bg-light">
      <Container className="py-5">
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="display-5 fw-bold mb-3">Featured Projects</h2>
            <p className="lead text-muted mb-0">
              Explore my recent work and technical achievements
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {projectsData.map((project, index) => (
            <Col key={index} lg={4} md={6} className="mb-4">
              <Card className="h-100 shadow-sm border-0 transition-transform hover-lift">
                <div className="position-relative">
                  <Card.Img 
                    variant="top" 
                    src={project.imgSrc} 
                    alt={project.title} 
                    className="project-image"
                    height={220}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="position-absolute top-0 end-0 p-2">
                    <span className="badge bg-primary">Featured</span>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold">{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  
                  <div className="mb-3">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="badge bg-secondary me-2 mb-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card.Body>
                <Card.Footer className="bg-white border-0 d-flex justify-content-between">
                  <a href={project.demoUrl} className="btn btn-sm btn-outline-primary" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.codeUrl} className="btn btn-sm btn-outline-secondary" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github me-1"></i> Code
                  </a>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
        
        <Row className="mt-5">
          <Col className="text-center">
            <a href="/projects" className="btn btn-primary px-4 py-2">
              View All Projects <i className="bi bi-arrow-right ms-2"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;