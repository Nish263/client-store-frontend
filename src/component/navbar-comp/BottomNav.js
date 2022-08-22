import React from "react";
import { Container, Nav, Navbar, Form } from "react-bootstrap";

const BottomNav = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Nav className="bottomnav d-flex justify-content-between ms-auto">
          <Nav.Link href="/kids">KIDS</Nav.Link>
          <Nav.Link href="/mens">MENS</Nav.Link>
          <Nav.Link href="/womens">WOMENS</Nav.Link>
        </Nav>
        <Nav className="ms-auto ">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <button className="btn btn-middlenav">
              <i class="fa-solid fa-magnifying-glass fa-lg"></i>
            </button>
          </Form>{" "}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default BottomNav;
