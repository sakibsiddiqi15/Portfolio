import React from "react";
import Title from "../../../Shared/Component/Title/Title";
import { AiFillProject } from "react-icons/all";
import { Col, Container, Row } from "react-bootstrap";
import MyCard from "../../../Shared/Component/Cards/MyCard";
const Projects = () => {
  return (
    <section className="vh-min-100">
      <Title title="Projects" icon={<AiFillProject size={50} />}>
        As a web developer I have some Project. In this section I added some of
        my projects.
      </Title>
      <Container>
        <Row xs={1} md={2} lg={3} className="mt-5 g-4">
          <Col>
            <MyCard
              img="/Images/bb.png"
              title="B.B. Bicycle Buy"
              github="https://github.com/sakibsiddiqi15/MERN-BB-Bicycle-buy"
              livesite="https://bb-bicycle-s15.netlify.app/"
            >
              This website for buying bicycle. It's a full-stack web
              application.
            </MyCard>
          </Col>
          <Col>
            <MyCard
              img="/Images/diye-asbo.png"
              title="B.B. Bicycle Buy"
              github="https://github.com/sakibsiddiqi15/MERN-BB-Bicycle-buy"
              livesite="https://bb-bicycle-s15.netlify.app/"
            >
              This website for buying bicycle. It's a full-stack web
              application.
            </MyCard>
          </Col>
          <Col>
            <MyCard
              img="/Images/lg-hospital.png"
              title="B.B. Bicycle Buy"
              github="https://github.com/sakibsiddiqi15/MERN-BB-Bicycle-buy"
              livesite="https://bb-bicycle-s15.netlify.app/"
            >
              This website for buying bicycle. It's a full-stack web
              application.
            </MyCard>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
