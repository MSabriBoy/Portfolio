
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import cutie from '../assets/images/cutie.jpg';   

const Profile = () => (
  <section id="profile" className="py-5 bg-secondary text-light fade-in">
    <Container className="text-center">
      <h2 className="mb-4">Our Profile</h2>
      <Button
        variant="info"
        href={cutie}
        download="MSB-profile.jpg"   
        className="fw-bold"
      >
        Download Profile
      </Button>
    </Container>
  </section>
);

export default Profile;
