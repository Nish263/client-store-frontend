import React from "react";
import { Container, Nav, Navbar, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Nav className="bottomnav d-flex justify-content-between me-auto">
          <Nav>
            <Link className="nav-link" to="/kids">
              KIDS
            </Link>
          </Nav>

          <Nav>
            <Link className="nav-link" to="/mens">
              MENS
            </Link>
          </Nav>
          <Nav>
            <Link className="nav-link" to="/womens">
              WOMENS
            </Link>
          </Nav>
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
