import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const MiddleNav = () => {
  return (
    <Navbar className="middlenav text-center" variant="light">
      <Container>
        <Nav className="ms-auto">
          <Nav>
            <Link className="nav-link" to="#user">
              {" "}
              <h1 className="brand-name">Parin Collection</h1>
            </Link>
          </Nav>
        </Nav>
        <Nav className="ms-auto">
          <Nav>
            <Link className="nav-link" to="/user">
              {" "}
              Register
            </Link>{" "}
          </Nav>
          <Nav>
            <Link className="nav-link" to="/user">
              {" "}
              Login
            </Link>{" "}
          </Nav>
          <Nav>
            <Link className="nav-link" to="/user">
              {" "}
              <i class="fa-solid fa-user"></i>{" "}
            </Link>{" "}
          </Nav>
          <Nav>
            <Link className="nav-link" to="/cart">
              {" "}
              <i class="fa-solid fa-cart-shopping"></i>{" "}
            </Link>{" "}
          </Nav>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MiddleNav;
