
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => (
  <section id="contact" className="py-5 bg-dark text-white fade-in">
    <Container style={{ maxWidth: 600 }}>
      <h2 className="text-center mb-4">Contact Us</h2>
      <Form
        action="https://formspree.io/f/xqaboeqa"
        method="POST"
        className="contact-form"
      >
        <Form.Group className="mb-3" controlId="name">
          <Form.Control type="text" name="name" placeholder="Your Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control type="email" name="email" placeholder="Your Email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="mobile">
          <Form.Control type="tel" name="mobile" placeholder="Your Mobile Number" required />
        </Form.Group>
        <Form.Group className="mb-4" controlId="message">
          <Form.Control
            as="textarea"
            rows={5}
            name="message"
            placeholder="Your Message"
            required
          />
        </Form.Group>
        <div className="text-center">
          <Button variant="info" type="submit" className="fw-bold">
            Send Message
          </Button>
        </div>
      </Form>
    </Container>
  </section>
);

export default Contact;
