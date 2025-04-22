"use client";
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

// Sample GitHub repos data (would be fetched from GitHub API in production)
const sampleRepos: GitHubRepo[] = [
  {
    id: 1,
    name: "personal-portfolio",
    description: "Developer portfolio website built with Next.js and Bootstrap",
    html_url: "https://github.com/username/personal-portfolio",
    language: "TypeScript",
    stargazers_count: 15,
    forks_count: 3,
    topics: ["nextjs", "typescript", "portfolio", "bootstrap"]
  },
  {
    id: 2,
    name: "api-dashboard",
    description: "Interactive dashboard for monitoring API performance metrics",
    html_url: "https://github.com/username/api-dashboard",
    language: "Python",
    stargazers_count: 28,
    forks_count: 7,
    topics: ["python", "fastapi", "dashboard", "data-visualization"]
  },
  {
    id: 3,
    name: "e-commerce-platform",
    description: "Full-featured online store with payment processing",
    html_url: "https://github.com/username/e-commerce-platform",
    language: "JavaScript",
    stargazers_count: 42,
    forks_count: 12,
    topics: ["react", "ecommerce", "stripe", "nodejs"]
  }
];

const githubLanguageColors: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#2b7489",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  "C#": "#178600",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Go: "#00ADD8",
  Swift: "#ffac45",
  Kotlin: "#F18E33",
  Rust: "#dea584"
};

const GitHubProjects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>(sampleRepos);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // In a real implementation, this would fetch from GitHub API
  // useEffect(() => {
  //   const fetchGitHubRepos = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch('https://api.github.com/users/username/repos?sort=updated&per_page=6');
  //       const data = await response.json();
  //       setRepos(data);
  //     } catch (error) {
  //       console.error('Error fetching GitHub repos:', error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   
  //   fetchGitHubRepos();
  // }, []);

  return (
    <section id="github-section" className="py-5 bg-light">
      <Container className="py-5">
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="display-5 fw-bold mb-3">GitHub Repositories</h2>
            <p className="lead text-muted mb-0">
              Check out my open source contributions and projects
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {repos.map((repo) => (
            <Col key={repo.id} lg={4} md={6} className="mb-4">
              <Card className="h-100 shadow-sm hover-lift border-0">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-github fs-5 me-2"></i>
                    <h5 className="card-title mb-0 fw-bold">{repo.name}</h5>
                  </div>
                  
                  <Card.Text className="mb-3">{repo.description}</Card.Text>
                  
                  <div className="mb-3">
                    {repo.topics.slice(0, 4).map((topic, index) => (
                      <Badge 
                        key={index} 
                        bg="light" 
                        text="dark" 
                        className="me-2 mb-2"
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="d-flex align-items-center">
                      <span 
                        className="repo-language-color me-2 rounded-circle d-inline-block" 
                        style={{ 
                          backgroundColor: githubLanguageColors[repo.language] || "#858585",
                          width: "12px", 
                          height: "12px" 
                        }}
                      ></span>
                      <small>{repo.language}</small>
                    </div>
                    <div>
                      <small className="me-3">
                        <i className="bi bi-star me-1"></i>
                        {repo.stargazers_count}
                      </small>
                      <small>
                        <i className="bi bi-diagram-2 me-1"></i>
                        {repo.forks_count}
                      </small>
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer className="bg-white border-0">
                  <Button 
                    variant="outline-primary" 
                    href={repo.html_url} 
                    target="_blank" 
                    className="w-100"
                  >
                    View Repository
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
        
        <Row className="mt-5">
          <Col className="text-center">
            <a href="https://github.com/username" className="btn btn-dark px-4 py-2" target="_blank">
              <i className="bi bi-github me-2"></i>
              View All Repositories
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GitHubProjects;