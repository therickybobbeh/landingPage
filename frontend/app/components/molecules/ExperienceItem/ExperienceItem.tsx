"use client";

import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import Image from 'next/image';

export interface ExperienceItemProps {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  logo?: string;
  workType?: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  position,
  duration,
  location,
  description,
  responsibilities,
  skills,
  logo,
  workType = 'Full-time',
}) => {
  return (
    <Card className="mb-4 card-custom shadow-sm border-0">
      <Card.Body className="p-4">
        <Row className="align-items-center mb-3">
          <Col xs="auto">
            {logo ? (
              <div className="bg-light rounded p-2" style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  src={logo}
                  alt={`${company} logo`}
                  width={50}
                  height={50}
                  className="company-logo"
                />
              </div>
            ) : (
              <div className="bg-light rounded p-2 d-flex align-items-center justify-content-center" style={{ width: '64px', height: '64px' }}>
                <span className="text-primary-custom fs-3">
                  {company.charAt(0)}
                </span>
              </div>
            )}
          </Col>
          <Col>
            <h3 className="fs-4 fw-bold mb-0 text-primary-custom">{position}</h3>
            <div className="d-flex flex-wrap align-items-center">
              <h4 className="fs-5 mb-0">{company}</h4>
              <span className="mx-2 text-muted">•</span>
              <span className="badge bg-light text-dark me-2">{workType}</span>
            </div>
            <div className="text-muted">
              <small>{duration} | {location}</small>
            </div>
          </Col>
        </Row>

        <p className="mb-3">{description}</p>

        {responsibilities.length > 0 && (
          <>
            <h5 className="fw-bold fs-5 mb-2">Key Responsibilities & Achievements</h5>
            <ul className="mb-3">
              {responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {skills.length > 0 && (
          <div className="mt-3">
            {skills.map((skill, index) => (
              <Badge key={index} bg="primary-custom" className="me-2 mb-2 py-2 px-3">
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default ExperienceItem;