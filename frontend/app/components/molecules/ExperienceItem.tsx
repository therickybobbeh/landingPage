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
  logo?: string | { photo: string; background: true};
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
    <Card className="mb-3 card-custom shadow-sm border-0">
      <Card.Body className="p-4 p-sm-3">
        <Row className="align-items-center mb-3 mb-sm-2 g-2">
          <Col xs="auto">
            {logo ? (
              <div className="rounded p-2 p-sm-1 experience-logo-container" style={{ 
                background: typeof logo === 'object' && logo.background === true ? '#000000' : '#ffffff'
              }}>
                <Image
                  src={typeof logo === 'string' ? logo : logo.photo}
                  alt={`${company} logo`}
                  width={50}
                  height={50}
                  className="company-logo experience-logo"
                />
              </div>
            ) : (
              <div className="bg-light rounded p-2 p-sm-1 d-flex align-items-center justify-content-center experience-logo-container">
                <span className="text-primary-custom fs-3 fs-sm-4">
                  {company.charAt(0)}
                </span>
              </div>
            )}
          </Col>
          <Col>
            <h3 className="fs-4 fs-sm-5 fw-bold mb-0 text-primary-custom">{position}</h3>
            <div className="d-flex flex-wrap align-items-center">
              <h4 className="fs-5 fs-sm-6 mb-0">{company}</h4>
              <span className="mx-2 mx-sm-1 text-muted">•</span>
              <span className="badge bg-light text-dark me-2 me-sm-1">{workType}</span>
            </div>
            <div className="text-muted small">
              <small>{duration} | {location}</small>
            </div>
          </Col>
        </Row>

        <p className="mb-3 mb-sm-2 small-on-mobile">{description}</p>

        {responsibilities.length > 0 && (
          <>
            <h5 className="fw-bold fs-5 fs-sm-6 mb-2 mb-sm-1">Key Responsibilities & Achievements</h5>
            <ul className="mb-3 mb-sm-2 small-on-mobile ps-4">
              {responsibilities.map((item, index) => (
                <li key={index} className="small-on-mobile">{item}</li>
              ))}
            </ul>
          </>
        )}

        {skills.length > 0 && (
          <div className="mt-3 mt-sm-2">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                bg="primary-custom" 
                className="me-2 mb-2 py-2 px-3 experience-badge">
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