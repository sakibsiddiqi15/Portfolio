import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { GrOverview, BsGithub,BsFillArrowUpRightCircleFill } from "react-icons/all";
import { NavLink } from "react-router-dom";
const MyCard = ({ children, img, title, github,route, livesite }) => {
  return (
    <Card
      className="position-relative my-card rounded border-0 overflow-hidden center"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
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
            <Col xs={3}>
              <NavLink
                className="a-r-4-4 rounded-pill center bg-light p-1"
                to={`/projects/${route}`}
              >
                <BsFillArrowUpRightCircleFill />
              </NavLink>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
