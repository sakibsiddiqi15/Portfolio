import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { GrOverview, BsGithub } from "react-icons/all";
const MyCard = ({ children, img, title, github, livesite }) => {
  return (
    <Card className="position-relative my-card rounded border-0 overflow-hidden center">
      <Card.Img
        variant="top"
        src={img}
        className="position-relative a-r-img-13-9 shadow"
      />
      <Card.Body className="col-8 my-card-body position-absolute bg-glass border rounded    border-2 border-glass text-center text-light">
        <Card.Title>{title}</Card.Title>
        <Card.Text as="div">
          {children}
          <Row className="justify-content-center mt-2">
            <Col xs={3}>
              <a
                target="_blank"
                rel="noreferrer"
                className="a-r-4-4 rounded-pill center bg-light p-1"
                href={github}
              >
                <BsGithub />
              </a>
            </Col>
            <Col xs={3}>
              <a
                target="_blank"
                rel="noreferrer"
                className="a-r-4-4 rounded-pill center bg-light p-1"
                href={livesite}
              >
                <GrOverview />
              </a>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
