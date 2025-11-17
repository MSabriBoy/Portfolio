
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { EnvelopeFill, TelephoneFill, GeoAltFill } from "react-bootstrap-icons";

const ContactInfoRow = () => (
  <section className="bg-dark text-light contact-strip  py-4">
    <Container>
      <Row className="text-center justify-content-center align-items-center g-4">
        <Col xs={12} md={3}>
          <EnvelopeFill size={24} color="#0dcaf0" className="info-icon " />
          <div className="mt-2">sales@bornonfeed.in</div>
        </Col>
        <Col xs={12} md={3}>
          <TelephoneFill size={24} color="#0dcaf0" className="info-icon" />
          <div className="mt-2">+91 8873274866</div>
        </Col>
        <Col xs={12} md={3}>
          <TelephoneFill size={24} color="#0dcaf0" className="info-icon" />
          <div className="mt-2">+91 87457038384</div>
        </Col>
        <Col xs={12} md={3}>
          <GeoAltFill size={24} color="#0dcaf0" className="info-icon" />
          <div className="mt-2">Delhi, NCR</div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default ContactInfoRow;
