"use client";
import React from 'react';
import { Container, Row, Col, ProgressBar, Card } from 'react-bootstrap';

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

const skillsData: SkillCategory[] = [
  {
    name: "Frontend Development",
    skills: [
      { name: "React", level: 90, icon: "react" },
      { name: "JavaScript", level: 85, icon: "javascript" },
      { name: "HTML/CSS", level: 95, icon: "html5" },
      { name: "Next.js", level: 80, icon: "nextjs" }
    ]
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Python", level: 85, icon: "python" },
      { name: "FastAPI", level: 75, icon: "fastapi" },
      { name: "Node.js", level: 80, icon: "nodejs" },
      { name: "PostgreSQL", level: 70, icon: "postgresql" }
    ]
  },
  {
    name: "Tools & Methods",
    skills: [
      { name: "Git", level: 90, icon: "git" },
      { name: "Docker", level: 75, icon: "docker" },
      { name: "CI/CD", level: 70, icon: "cicd" },
      { name: "Agile", level: 85, icon: "agile" }
    ]
  }
];

// Helper function to determine progress bar variant based on skill level
const getVariant = (level: number): string => {
  if (level >= 90) return "success";
  if (level >= 75) return "info";
  if (level >= 60) return "primary";
  return "secondary";
};

const Skills = () => {
  return (
    <section id="skills-section" className="py-5 bg-light">
      <Container className="py-5">
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="display-5 fw-bold mb-3">Technical Skills</h2>
            <p className="lead text-muted mb-0">
              Proficient in a variety of technologies and development methodologies
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {skillsData.map((category, categoryIndex) => (
            <Col key={categoryIndex} lg={4} md={6} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Header className="bg-dark text-white py-3">
                  <h5 className="mb-0">{category.name}</h5>
                </Card.Header>
                <Card.Body>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="mb-4">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <h6 className="mb-0 fw-bold">{skill.name}</h6>
                        <span>{skill.level}%</span>
                      </div>
                      <ProgressBar 
                        now={skill.level} 
                        variant={getVariant(skill.level)} 
                        className="skill-progress-bar" 
                        style={{ height: '10px' }}
                      />
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5 justify-content-center">
          <Col md={8} className="text-center">
            <h5 className="fw-bold mb-4">Additional Experience With</h5>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {['AWS', 'GraphQL', 'Redux', 'TypeScript', 'MongoDB', 'Jest', 'Firebase', 'Webpack', 'Sass'].map((item, i) => (
                <span key={i} className="badge bg-secondary p-2 m-1">{item}</span>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;