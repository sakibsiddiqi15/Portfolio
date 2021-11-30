import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BsGithub,IoNewspaperSharp } from "react-icons/all";
const NavBar = () => {
  return (
    <Navbar bg="none" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand href="#home">
          <img src="/logo.png" alt="" />
        </Navbar.Brand>
        <Nav>
          <Nav.Item>
            <Nav.Link href="https://github.com/sakibsiddiqi15/" target="_blank">
              <BsGithub fontSize={24} className="text-dark" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://drive.google.com/file/d/1BVMs5OxYj3FfCT1thtJ1Ssbib9mSt8Wh/view?usp=sharing" target="_blank">
              <IoNewspaperSharp fontSize={24} className="dark" />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
