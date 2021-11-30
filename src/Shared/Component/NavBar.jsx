import React from "react";
import { Container, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="none" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand href="#home"><img src="/logo.png" alt="" /></Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
