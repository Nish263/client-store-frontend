import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MiddleNav = () => {
  const { cartItem } = useSelector((state) => state.cart);
  return (
    <Navbar className="middlenav text-center" variant="light">
      <Container>
        <Nav className="ms-auto">
          <Nav>
            <Link className="nav-link" to="/">
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
              <div className="cart-item">
                <i class="fa-solid fa-cart-shopping"></i>
                <span className="cart"> {cartItem.length}</span>
              </div>
            </Link>{" "}
          </Nav>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MiddleNav;
