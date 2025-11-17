import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

// 🔄 Replace with real images
import c1 from '../assets/images/client1.jpg';
import c2 from '../assets/images/client2.jpg';
import c3 from '../assets/images/client3.jpg';
import c4 from '../assets/images/client4.jpg';

const feedbacks = [
  {
    img: c1,
    quote:
      'They turned raw footage into a cinematic story. Fast delivery & superb quality!',
    name: 'Sanjay Verma, Travel Vlogger',
  },
  {
    img: c2,
    quote:
      'Our promo video got 10× engagement after their motion‑graphics makeover.',
    name: 'Aarti Sharma, Marketing Head',
  },
  {
    img: c3,
    quote:
      'Color grading made our short film look Hollywood‑level. Highly recommended.',
    name: 'Rahul Meena, Indie Filmmaker',
  },
  {
    img: c4,
    quote:
      'Seamless edits, on‑time revisions, and great communication. Our go‑to team!',
    name: 'Neha Gupta, Event Organizer',
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-5 bg-secondary text-light fade-in">
    <Container className="text-center">
      <h2 className="mb-4">Why We’re Our Clients’ Favourite</h2>

      <Carousel fade indicators={false} interval={5000}>
        {feedbacks.map(({ img, quote, name }) => (
          <Carousel.Item key={name}>
            <img
              src={img}
              alt={name}
              className="d-block mx-auto rounded-circle shadow glow-hover"
              style={{ width: 140, height: 140, objectFit: 'cover' }}
            />
            <blockquote className="mt-4 fst-italic px-3">
              “{quote}”
            </blockquote>
            <figcaption className="fw-bold">{name}</figcaption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  </section>
);

export default Testimonials;
