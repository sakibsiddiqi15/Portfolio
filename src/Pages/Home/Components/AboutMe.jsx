import React from "react";
import Title from "../../../Shared/Component/Title/Title";
import {
  BsInfoSquareFill,
  BsFillFileEarmarkPdfFill,
  BsChatRightDotsFill,
} from "react-icons/all";
import { Col, Container, Row } from "react-bootstrap";
import Btn from "../../../Shared/Component/Buttons/Btn";
const AboutMe = () => {
  return (
    <section id="about" className="vh-min-100">
      <Title title="About Me" icon={<BsInfoSquareFill size={40} />}>
        Wanna Know me? <br />
        <p>Read This Section.</p>
      </Title>
      <Container className="my-4">
        <Row xs={1} md={2} className="g-4">
          <Col>
            <img
              src="/Images/about.png"
              alt="about-me"
              className="img-fluid"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            />
          </Col>
          <Col className="vh-center align-content-center">
            <h3
              className="dark fw-bold ls-base"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              About Me
            </h3>
            <div className="text-secondary">
              <Col
                xs={12}
                md={10}
                lg={8}
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                I am web developer. I have been learning web development since
                2020. I have done some project with React.js, Node.js,
                Express.js, MongoDB. You can find my projects in my github. If
                you wanna know more about me then contact me. If you wanna work
                with me then feel to contact me.
              </Col>
              <div
                className="mt-4"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                <Btn
                  link="https://drive.google.com/file/d/1BVMs5OxYj3FfCT1thtJ1Ssbib9mSt8Wh/view?usp=sharing"
                  target="_blink"
                  classes="me-2"
                >
                  Resume <BsFillFileEarmarkPdfFill />
                </Btn>
                <Btn link="#contact">
                  Contact Me <BsChatRightDotsFill />
                </Btn>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
