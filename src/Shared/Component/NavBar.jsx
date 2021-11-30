import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BsGithub, IoNewspaperSharp, CgMenuRight } from "react-icons/all";
const NavBar = () => {
  return (
    <Navbar bg="white" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand href="#home">
          <img src="/logo.png" alt="logo" style={{ maxWidth: "30px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <CgMenuRight />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => window.scrollTo(0, 0)}>Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="https://github.com/sakibsiddiqi15/" target="_blank">
              <BsGithub fontSize={24} className="text-dark" />
            </Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1BVMs5OxYj3FfCT1thtJ1Ssbib9mSt8Wh/view?usp=sharing"
              target="_blank"
            >
              <IoNewspaperSharp fontSize={24} className="dark" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
