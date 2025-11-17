
import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => (
  <header id="hero" className="bg-dark text-white py-5 fade-in">
    <Container>
      <Row className="justify-content-center text-center">
        <Col lg={8}>
          <h1 className="display-4 fw-bold animate__animated animate__fadeInDown animate__slow">
            Hi, We are <span className="text-info">Video Editors</span>
          </h1>
          <p className="lead lead animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>-Creative Video Editors-</p>
        </Col>
      </Row>
    </Container>
  </header>
);

export default Hero;
