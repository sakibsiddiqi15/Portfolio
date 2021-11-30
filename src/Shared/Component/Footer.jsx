import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { BsLinkedin, BsGithub, ImFacebook2 } from "react-icons/all";
const Footer = () => {
  return (
    <footer>
      <Container className="mt-5 text-center">
        <h4 style={{ fontWeight: 700 }} className="dark">
          SAKIB SIDDIQI SUPTO
        </h4>
        <Row className="justify-content-center">
          <Col xs={1} className="p-2 center h2" style={{ color: "#0077b5" }}>
            <Nav.Link
              href="https://www.linkedin.com/in/sakibsiddiqi15/"
              target="_blink"
            >
              <BsLinkedin />
            </Nav.Link>
          </Col>
          <Col xs={1} className="p-2 center h2" style={{ color: "#000" }}>
            <Nav.Link href="https://github.com/sakibsiddiqi15/" target="_blink">
              <BsGithub />
            </Nav.Link>
          </Col>
          <Col xs={1} className="p-2 center h2" style={{ color: "#3B5998" }}>
            <Nav.Link
              href="https://www.facebook.com/me.sakib.siddiqi/"
              target="_blink"
            >
              <ImFacebook2 />
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
