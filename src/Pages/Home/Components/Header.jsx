import React from "react";
import { Container } from "react-bootstrap";
import Btn from "../../../Shared/Component/Buttons/Btn";

const Header = () => {
  return (
    <Container className="vh-min-100 center">
      <h5 className="fw-normal primary-lt">HELLO</h5>
      <h1 className="display-4 fw-bold primary">SAKIB SIDDIQI SUPTO</h1>
      <p className="dark">Front-end Web Developer</p>
      <Btn link="https://react-icons.github.io/react-icons/icons?name=hi">
        Resume
      </Btn>
    </Container>
  );
};

export default Header;
