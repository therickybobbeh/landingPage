"use client";

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import ExperienceItem, { ExperienceItemProps } from '../molecules/ExperienceItem';

const Experience = () => {
  const experiences: ExperienceItemProps[] = [
    {
      company: "Optum / United Health Group",
      position: "Software Engineer",
      duration: "Jan 2023 - Present",
      location: "Raleigh, NC",
      description: "Full-stack developer with hands-on experience integrating external healthcare systems (e.g., Epic Health Systems) into Optum's network using FHIR, HL7, and SMART on FHIR standards. Leveraging technologies like Angular, Spring Boot, and various databases (MySQL, PostgreSQL, Azure MSSQL), I build robust API integrations and ensure seamless data flow between client systems and our applications. My role spans designing and implementing microservices, modernizing legacy systems, and improving deployment processes via containerization.",
      responsibilities: [
        "Built full-stack applications with Angular / Typescript (frontend), Spring Boot / Java, and PostgreSQL (backend) for a Fortune 100 company",
        "Led cloud modernization of EHR integrations, expanding our product by 59% across 7+ markets while improving deployment speed",
        "Enhanced systems that take different data from multiple sources and standardize it into a format that our systems can process",
        "Worked with business owners to define requirements, constructed and built technical integrations with vendors",
        "Design and integrate healthcare APIs, working with Epic Health Systems and FHIR / HL7 standards",
        "Optimized and consolidated legacy code, which reduced time-to-market for affiliate onboarding down to an average of 2 weeks",
        "Engineered, designed, and deployed microservices with an Angular front-end and .NET back end using Azure DevOps, enhancing application performance and scalability. Assisted in establishing new development patterns",
        "Developed client-facing Angular applications, integrated GraphQL APIs, and optimized Elasticsearch queries. Reduced security vulnerabilities by 95% through code refactoring and dependency upgrades"
      ],
      skills: ["Angular", "TypeScript", "Spring Boot", "Java", "PostgreSQL", "Docker", "FHIR", "HL7", "Healthcare APIs", "Microservices", "Azure DevOps", ".NET"],
      logo: "/images/company-logos/optum-logo.png",
      workType: "Full-time"
    },
    {
      company: "ServIT",
      position: "Network Operations Center Analyst",
      duration: "Aug 2021 - Dec 2022 · 1 yr 5 mos",
      location: "Kennesaw, Georgia",
      description: "",
      responsibilities: [
        "Monitored and conducted IBM-I server operations, executed disaster recovery procedures",
        "Automated Active Directory audits and cleanups with PowerShell, improving security and efficiency",
        "Managed SOC tasks and performed vulnerability assessments for client networks",
        "Provided Level 1 & 2 helpdesk support, troubleshooting systems, networks, and software issues while assisting users"
      ],
      skills: ["Linux", "Vulnerability Assessment", "System Administration", "Network Security", "PowerShell", "Active Directory"],
      logo: {
        photo: "/images/company-logos/servit-logo.png",
        background: true
      },
      workType: "Full-time"
    },
    {
      company: "City of Kennesaw",
      position: "Information Technology",
      duration: "May 2021 - Aug 2021 · 3 mos",
      location: "Kennesaw, Georgia",
      description: "",
      responsibilities: [
        "Developed cybersecurity policies and phishing awareness training for municipal employees",
        "Centralized server updates and restructured legacy file systems using Python",
        "Strengthened email security infrastructure with Proofpoint and CrowdStrike monitoring",
        "Created and implemented new policies for information security and cybersecurity and monitored crowd strike for executables and remediated alerts"
      ],
      skills: ["Vulnerability Assessment", "Python", "PowerShell", "Security", "CrowdStrike", "Proofpoint"],
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

        <Row className="mb-5 mb-sm-2">
          <Col lg={12}>
            {/* Education Item - Georgia Tech */}
            <div className="d-flex align-items-center mb-4 mb-sm-1">
              <div className="bg-light rounded p-2 p-sm-1 me-3 me-sm-1 education-logo-container">
                {education.logo ? (
                  <div style={{ position: 'relative', width: '50px', height: '50px' }}>
                    <Image
                      src={education.logo}
                      alt={`${education.school} logo`}
                      fill
                      sizes="50px"
                      className="school-logo education-logo"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                ) : (
                  <span className="text-primary-custom fs-3">
                    {education.school.charAt(0)}
                  </span>
                )}
              </div>
              <div>
                <h3 className="fs-4 fs-sm-5 fw-bold mb-0 text-primary-custom">{education.degree}</h3>
                <div className="d-flex align-items-center">
                  <h4 className="fs-5 fs-sm-6 mb-0">{education.school}</h4>
                </div>
                <div className="text-muted small">
                  <small>{education.duration}</small>
                </div>
              </div>
            </div>
            <hr className="my-4 my-sm-1" />

            {/* Education Item - KSU */}
            <div className="d-flex align-items-center mb-4 mb-sm-1">
              <div className="bg-light rounded p-2 p-sm-1 me-3 me-sm-1 education-logo-container">
                {educationUndergrad.logo ? (
                  <div style={{ position: 'relative', width: '50px', height: '50px' }}>
                    <Image
                      src={educationUndergrad.logo}
                      alt={`${educationUndergrad.school} logo`}
                      fill
                      sizes="50px"
                      className="school-logo education-logo"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                ) : (
                  <span className="text-secondary fs-3">
                    {educationUndergrad.school.charAt(0)}
                  </span>
                )}
              </div>
              <div>
                <h3 className="fs-4 fs-sm-5 fw-bold mb-0 text-secondary">{educationUndergrad.degree}</h3>
                <div className="d-flex align-items-center">
                  <h4 className="fs-5 fs-sm-6 mb-0">{educationUndergrad.school}</h4>
                </div>
                <div className="text-muted small">
                  <small>{educationUndergrad.duration}</small>
                </div>
              </div>
            </div>
            <hr className="my-4 my-sm-1" />
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