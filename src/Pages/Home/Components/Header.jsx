import React from "react";
import { Container } from "react-bootstrap";
import Btn from "../../../Shared/Component/Buttons/Btn";
import { IoNewspaperSharp } from "react-icons/all";
const Header = () => {
  return (
    <header id="#">
      <Container className="vh-min-100 center">
        <img src="/Images/me.png" alt="me" className="img-fluid rounded-pill mb-3" style={{maxWidth:"200px",outline:"3px solid #5A57FF",outlineOffset:"4px"}} />
      <h1
        className="display-4 fw-bold primary"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        SAKIB SIDDIQI SUPTO
      </h1>
      <p
        className="dark"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        Front-end Web Developer
      </p>
      <Btn
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        link="https://drive.google.com/file/d/1BVMs5OxYj3FfCT1thtJ1Ssbib9mSt8Wh/view?usp=sharing"
      >
        Resume <IoNewspaperSharp />
      </Btn>
    </Container>
    </header>
  );
};

export default Header;
