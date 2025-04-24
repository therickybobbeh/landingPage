"use client";

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ExperienceItem, { ExperienceItemProps } from '../../molecules/ExperienceItem';

const Experience = () => {
  const experiences: ExperienceItemProps[] = [
    {
      company: "Optum",
      position: "Software Engineer",
      duration: "Jan 2023 - Present · 2 yrs 4 mos",
      location: "North Carolina, United States · Hybrid",
      description: "Full-stack developer with hands-on experience integrating external healthcare systems (e.g., Epic Health Systems) into Optum's network using FHIR, HL7, and SMART on FHIR standards. Leveraging technologies like Angular, Spring Boot, and various databases (MySQL, PostgreSQL, Azure MSSQL), I build robust API integrations and ensure seamless data flow between client systems and our applications. My role spans designing and implementing microservices, modernizing legacy systems, and improving deployment processes via containerization.",
      responsibilities: [
        "Led modernization of our EHR integration platform, expanding the product by 59% across 7+ markets while decreasing deployment times.",
        "Developed secure healthcare APIs and standardized disparate data sources into consistent formats for downstream processing.",
        "Optimized onboarding workflows, reducing average time-to-market for affiliates to ~2 weeks.",
        "Built front-end applications with Angular and back-end services using Spring Boot and PostgreSQL.",
        "Containerized microservices for faster, more reliable deployments (Docker).",
        "Worked with business owners and healthcare partners to define technical requirements, ensuring integrated solutions meet clinical and regulatory needs.",
        "Guided other teams on best practices for FHIR/HL7-based integrations."
      ],
      skills: ["Angular", "Spring Boot", "PostgreSQL", "Docker", "FHIR", "HL7", "Healthcare APIs", "Microservices"],
      logo: "/images/company-logos/optum-logo.png",
      workType: "Full-time"
    },
    {
      company: "Optum",
      position: "Technology Development Associate",
      duration: "Jan 2023 - Jan 2024 · 1 yr 1 mo",
      location: "North Carolina, United States · Hybrid",
      description: "Technology Development Program (Rotations)",
      responsibilities: [
        "Rotation 1 (6 months): Developed secure solutions for existing applications, containerized micro front-end/back-end services and automated routing, enhancing local development. Tech Stack: Angular (micro front-end), Spring Boot, Azure.",
        "Rotation 2 (6 months): Contributed to a full-stack team building Angular apps for the healthcare sector. Enhanced search capabilities with Elasticsearch and implemented GraphQL APIs over PostgreSQL. Tech Stack: Angular, Spring Boot, Elasticsearch, GraphQL, PostgreSQL."
      ],
      skills: ["Angular", "Spring Boot", "Elasticsearch", "GraphQL", "PostgreSQL", "Docker", "Azure"],
      logo: "/images/company-logos/optum-logo.png",
      workType: "Full-time"
    },
    {
      company: "ServIT",
      position: "NOC analyst",
      duration: "Sep 2021 - Nov 2022 · 1 yr 3 mos",
      location: "Kennesaw, Georgia, United States",
      description: "",
      responsibilities: [
        "Responsible for night/weekend shift system monitoring processes for clients' IBM-I servers and applications, along with executing critical system backup processes used for disaster recovery",
        "Provided Levels 1 & 2 support for multiple clients ranging from day-to-day system processes, network configurations, Virtual Private Network (VPN) issues, firewall configuration, Domain configuration, Patching, to a wide range of Helpdesk system-related tickets",
        "SOC tasks such as working with client vulnerability assessments"
      ],
      skills: ["Linux", "Vulnerability Assessment", "System Administration", "Network Security"],
      logo: {
        photo: "/images/company-logos/servit-logo.png",
        background: true
      },
      workType: "Part-time"
    },
    {
      company: "ServIT",
      position: "NOC Analyst Co-op",
      duration: "May 2022 - Sep 2022 · 5 mos",
      location: "Kennesaw, Georgia, United States",
      description: "",
      responsibilities: [
        "Worked in a fast-paced environment aiding multiple client's day-to-day operations, while working on various projects",
        "Automated audits and cleanups of Active Directory & Azure Active Directory using PowerShell",
        "Created new policies regarding onboarding and offboarding"
      ],
      skills: ["Vulnerability Assessment", "GitHub", "PowerShell", "Azure AD"],
      logo: {
        photo: "/images/company-logos/servit-logo.png",
        background: true
      },
      workType: "Full-time"
    },
    {
      company: "City of Kennesaw",
      position: "Information Technology",
      duration: "Jun 2021 - Aug 2021 · 3 mos",
      location: "United States",
      description: "",
      responsibilities: [
        "Developed cybersecurity programs for the city, developed security education program and implemented industry standard security protocols",
        "Created email phishing tests, monitored email servers and constructed policies in proofpoint, Level 1 and 2 Helpdesk",
        "Centralized MS server updates by scraping the old system and rebuilding the server",
        "Restructured 20+ years of filesystems using Python",
        "Created new policies for information security and cybersecurity"
      ],
      skills: ["Vulnerability Assessment", "Python", "PowerShell", "Security"],
      logo: "/images/company-logos/kennesaw-logo.png",
      workType: "Internship"
    }
  ];

  const education = {
    school: "Georgia Institute of Technology",
    degree: "Master's Degree, Computer Science",
    duration: "2023 - Present",
    logo: "/images/education/gatech-logo.png"
  };

  const educationUndergrad = {
    school: "Kennesaw State University",
    degree: "Bachelor of Science, Cybersecurity",
    duration: "2019 - 2023",
    logo: "/images/education/ksu-logo.png"
  };

  return (
    <section id="experience-section" className="py-5 section-light">
      <Container className="py-5">
        <Row className="mb-5">
          <Col lg={12} className="text-center">
            <h2 className="display-5 fw-bold mb-3 text-primary-custom">Professional Experience</h2>
            <p className="lead text-muted mb-5">
              My journey building scalable applications and solving complex problems
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={12}>
            <div className="d-flex align-items-center mb-4">
              <div className="bg-light rounded p-2 me-3" style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {education.logo ? (
                  <img
                    src={education.logo}
                    alt={`${education.school} logo`}
                    width={50}
                    height={50}
                    className="school-logo"
                  />
                ) : (
                  <span className="text-primary-custom fs-3">
                    {education.school.charAt(0)}
                  </span>
                )}
              </div>
              <div>
                <h3 className="fs-4 fw-bold mb-0 text-primary-custom">{education.degree}</h3>
                <div className="d-flex align-items-center">
                  <h4 className="fs-5 mb-0">{education.school}</h4>
                </div>
                <div className="text-muted">
                  <small>{education.duration}</small>
                </div>
              </div>
            </div>
            <hr className="my-4" />

            <div className="d-flex align-items-center mb-4">
              <div className="bg-light rounded p-2 me-3" style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {educationUndergrad.logo ? (
                  <img
                    src={educationUndergrad.logo}
                    alt={`${educationUndergrad.school} logo`}
                    width={50}
                    height={50}
                    className="school-logo"
                  />
                ) : (
                  <span className="text-secondary fs-3">
                    {educationUndergrad.school.charAt(0)}
                  </span>
                )}
              </div>
              <div>
                <h3 className="fs-4 fw-bold mb-0 text-secondary">{educationUndergrad.degree}</h3>
                <div className="d-flex align-items-center">
                  <h4 className="fs-5 mb-0">{educationUndergrad.school}</h4>
                </div>
                <div className="text-muted">
                  <small>{educationUndergrad.duration}</small>
                </div>
              </div>
            </div>
            <hr className="my-4" />
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            {experiences.map((experience, index) => (
              <ExperienceItem key={index} {...experience} />
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;