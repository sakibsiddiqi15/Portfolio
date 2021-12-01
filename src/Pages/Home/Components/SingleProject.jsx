import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import useProjects from "../../../Hooks/useProjects";
import Page from "../../../Shared/Component/Page";
import Title from "../../../Shared/Component/Title/Title";
import { BsGithub, GrOverview } from "react-icons/all";
import Btn from "../../../Shared/Component/Buttons/Btn";

const SingleProject = () => {
  const { route } = useParams();
  const { projects } = useProjects();
  const thisProject = projects?.find((project) => project.route === route);
  const imgClasses = "img-fluid border border-2 cover-4-3 my-shadow";
  return (
    <Page>
      <section id="pro" className="vh-min-100 mt-5">
        <Title title={thisProject?.title}>{thisProject?.text}</Title>
        <Container className="my-5">
          <Row xs={1} md={2} className="g-4">
            <Col>
              <img
                src={thisProject?.img[0]}
                alt={thisProject?.route}
                className={imgClasses + " mb-3"}
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              />
              <Row className="g-3">
                <Col>
                  <img
                    src={thisProject?.img[1]}
                    alt={thisProject?.route}
                    className={imgClasses}
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                  />
                </Col>
                <Col>
                  <img
                    src={thisProject?.img[2]}
                    alt={thisProject?.route}
                    className={imgClasses}
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                  />
                </Col>
              </Row>
            </Col>
            <Col>
              <div>
                <h5 className="fw-bold mb-3">Technology: </h5>
                <div className="d-flex flex-wrap">
                  {thisProject?.technology?.map((item) => (
                    <span
                      className="p-2 fw-bold dark m-2"
                      style={{
                        borderLeft: "3px solid #8785FF",
                        background: "#8785FF10",
                      }}
                      data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <h5 className="mt-4 fw-bold mb-3">Technology: </h5>
                <div>
                  {thisProject?.features?.map((item) => (
                    <p
                      className="p-2 fw-bold dark me-2"
                      style={{
                        borderLeft: "3px solid #8785FF",
                      }}
                      data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom"
                    >
                      {item}
                    </p>
                  ))}
                  <Row className="justify-content-center mt-4">
                    <Col xs={5}>
                      <Btn target="_blank" link={thisProject?.live}>
                        Github
                        <BsGithub />
                      </Btn>
                    </Col>
                    <Col xs={5}>
                      <Btn target="_blank" link={thisProject?.live}>
                        Live <GrOverview />
                      </Btn>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Page>
  );
};

export default SingleProject;
