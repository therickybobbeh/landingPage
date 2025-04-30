"use client";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Button from '../atoms/Button';
import Heading from '../atoms/Typography/Heading';
import Text from '../atoms/Typography/Text';
import AnimatedCard from '../molecules/AnimatedCard';
import CodeAnimation from '../animations/CodeAnimation';
import Avatar from '../atoms/Avatar';

const Banner = () => {
  return (
    <section className="section bg-dark py-5 position-relative">
      {/* Background decoration elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: 1 }}>
        <div className="position-absolute rounded-circle bg-primary opacity-20" 
          style={{ 
            width: '300px', 
            height: '300px',
            filter: 'blur(80px)',
            top: '10%',
            left: '5%'
          }}
        ></div>
        <div className="position-absolute rounded-circle bg-secondary opacity-15" 
          style={{ 
            width: '200px', 
            height: '200px',
            filter: 'blur(60px)',
            top: '25%',
            right: '15%'
          }}
        ></div>
        <div className="position-absolute rounded-circle bg-info opacity-15" 
          style={{ 
            width: '250px', 
            height: '250px',
            filter: 'blur(70px)',
            bottom: '15%',
            right: '10%'
          }}
        ></div>
      </div>

      <Container className="py-5 position-relative min-vh-100 d-flex align-items-center" style={{ zIndex: 1 }}>
        <Row className="align-items-center g-5">
          <Col lg={7} className="order-lg-1 order-2">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-info" style={{ width: '30px', height: '2px' }}></div>
              <Text color="white" weight="bold" className="ms-2 mb-0">
                Full Stack Developer
              </Text>
            </div>
            
            <Heading level={1} variant="display" color="white" weight="bold" className="mb-4">
              Crafting Digital <span className="text-secondary">Experiences</span> with Modern Technology
            </Heading>
            
            <Text color="white-50" variant="lead" className="mb-5">
              I design and develop custom web applications that solve real-world problems.
              From responsive frontends to scalable backends, I bring your digital vision to life.
            </Text>
            
            <div className="d-flex flex-wrap gap-3">
              <Link href="/frontend/public#projects-section" passHref>
                <Button 
                  gradient="warm" 
                  size="lg" 
                  rounded 
                  withIcon 
                  iconClassName="bi bi-collection"
                  iconPosition="left"
                >
                  View My Work
                </Button>
              </Link>
              <Link href="/frontend/public#contact-section" passHref>
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  rounded
                  withIcon
                  iconClassName="bi bi-chat-text"
                  iconPosition="left"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>

          </Col>
          <Col lg={5} className="order-lg-2 order-1">
            <div className="position-relative" style={{ maxWidth: '500px', margin: '0 auto' }}>
              <AnimatedCard 
                gradient="purple"
                roundedSize="lg"
                animationType="tilt"
                perspective={1500}
                maxTilt={10}
                glareIntensity={0.2}
                className="p-4"
              >
                <CodeAnimation />
                {/* Tech Tags */}
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {['React', 'Next.js', 'TypeScript', 'Bootstrap', 'FastAPI'].map((tech, index) => (
                    <span 
                      key={index}
                      className="badge rounded-pill bg-white bg-opacity-10 text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </AnimatedCard>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;