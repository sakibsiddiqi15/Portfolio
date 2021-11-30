import React from "react";
import { Container } from "react-bootstrap";
import Btn from "../../../Shared/Component/Buttons/Btn";
import {IoNewspaperSharp} from "react-icons/all";
const Header = () => {
  return (
    <Container className="vh-min-100 center">
      <h5 className="fw-normal primary-lt">HELLO</h5>
      <h1 className="display-4 fw-bold primary">SAKIB SIDDIQI SUPTO</h1>
      <p className="dark">Front-end Web Developer</p>
      <Btn link="https://drive.google.com/file/d/1BVMs5OxYj3FfCT1thtJ1Ssbib9mSt8Wh/view?usp=sharing">
        Resume <IoNewspaperSharp/>
      </Btn>
    </Container>
  );
};

export default Header;
