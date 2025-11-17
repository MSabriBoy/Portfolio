
import React from 'react';
import { Container } from 'react-bootstrap';


const About = () => (
  <section id="about" className="py-5 bg-secondary text-light fade-in">
    <Container>
      <h2 className="text-center mb-4   animate__animated animate__fadeInDown animate__slow">About Us</h2>
      <p className="mx-auto animate__animated animate__fadeInUp animate__slow" style={{ maxWidth: 800 }}>
        We are a passionate team of creative video editors dedicated to transforming raw footage into captivating visual stories. At our core, we believe in the power of storytelling — whether it's for businesses, content creators, influencers, or personal memories. From cinematic edits and motion graphics to color grading and professional sound design, we bring your vision to life with precision and flair. As a growing startup, our mission is to deliver high-quality, timely, and budget-friendly video editing solutions that leave a lasting impact.
      </p>
    </Container>
  </section>
);

export default About;
