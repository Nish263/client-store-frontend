import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MiddleNav = () => {
  return (
    <Navbar className="middlenav text-center" variant="light">
      <Container>
        <Navbar.Brand href="/">Parin Collection</Navbar.Brand>{" "}
        <Nav className="ms-auto">
          <Nav.Link href="#user">Register </Nav.Link>
          <Nav.Link href="#user">Login </Nav.Link>
          <Nav.Link href="#user">
            <i class="fa-solid fa-user"></i>{" "}
          </Nav.Link>
          <Nav.Link href="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MiddleNav;
