import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';  // optional icons

const Footer = () => (
  <footer className="site-footer bg-dark text-light py-4 mt-auto fade-in">
    <Container>
      <Row className="align-items-center">

        <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
          &copy; {new Date().getFullYear()} MSB Portfolio. All rights reserved.
        </Col>


        <Col md={6} className="text-center text-md-end">

          <a
            href="https://github.com/your‑github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-info me-3"
          >
            <FaGithub className="service-icon mb-3" size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/your‑profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-info me-3"
          >
            <FaLinkedin className="service-icon mb-3" size={24} />
          </a>
          <a
            href="https://www.youtube.com/your‑channel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-info"
          >
            <FaYoutube className="service-icon mb-3" size={24} />
          </a>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
