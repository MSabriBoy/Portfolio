
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaFilm, FaMagic, FaPalette } from 'react-icons/fa';


const services = [
    {
      icon: <FaFilm size={40} className="service-icon mb-3 text-info" />,
    title: 'Cinematic Video Editing',
    desc: 'Story-driven cuts, pacing, and transitions for YouTube, short films, or promos.',
  },
  {
    icon: <FaMagic size={40} className="service-icon mb-3 text-info" />,
    title: 'Motion Graphics & Titles',
    desc: 'Eye-catching intros, lower-thirds, and animated logos crafted in After Effects.',
  },
  {
    icon: <FaPalette size={40} className="service-icon mb-3 text-info" />,
    title: 'Color Grading & Correction',
    desc: 'Professional color balance and mood enhancement using DaVinci Resolve.',
  },
];

const Services = () => (
  <section id="services" className="py-5 bg-dark text-white fade-in">
    <Container>
      <h2 className="text-center mb-5">Services We Provide</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {services.map(({ icon, title, desc }) => (
          <Col key={title}>
            <Card bg="secondary" text="light" className="h-100 shadow-sm">
              <Card.Body>
                {icon}
                <Card.Title className="text-info">{title}</Card.Title>
                <Card.Text>{desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Services;
