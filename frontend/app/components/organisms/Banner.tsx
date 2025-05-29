"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Button from '../atoms/Button';
import Heading from '../atoms/Typography/Heading';
import Text from '../atoms/Typography/Text';
import AnimatedCard from '../molecules/AnimatedCard';
import CodeAnimation from '../animations/CodeAnimation';

// Create a custom event to communicate with the ChatWidget
const toggleChat = () => {
  // Create and dispatch a custom event that ChatWidget will listen for
  const event = new CustomEvent('toggle-chat-widget');
  window.dispatchEvent(event);
};

const Banner = () => {
  const bannerRef = useRef<HTMLElement>(null);
  const [hasScrolledPast, setHasScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current || hasScrolledPast) return;
      
      const bannerElement = bannerRef.current;
      const bannerBottom = bannerElement.offsetTop + bannerElement.offsetHeight / 3;
      
      // Check if user has scrolled past the banner
      if (window.scrollY > bannerBottom) {
        setHasScrolledPast(true);
        toggleChat();
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolledPast]); // Depend on hasScrolledPast to avoid unnecessary checks

  return (
    <section ref={bannerRef} className="section py-5 position-relative">
      {/* Background decoration elements removed - now using unified background */}
      
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
              <Link href="/#projects-section" passHref>
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
              <Link href="/resume" passHref>
                <Button 
                  gradient="cool" 
                  size="lg" 
                  rounded 
                  withIcon 
                  iconClassName="bi bi-file-earmark-text"
                  iconPosition="left"
                >
                  My Resume
                </Button>
              </Link>
              <Link href="/#contact-section" passHref>
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
              <Button 
                variant="outline-secondary" 
                size="lg" 
                rounded
                withIcon
                iconClassName="bi bi-chat-dots-fill"
                iconPosition="left"
                onClick={toggleChat}
              >
                Chat With Me
              </Button>
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