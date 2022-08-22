import React from "react";
import { Row, Card, Button, Container } from "react-bootstrap";
import { DefaultLayout } from "../../Layout/DefaultLayout";
import bag from "../../assets/bag.jpg";

const Cart = () => {
  return (
    <DefaultLayout>
      <Container>
        <Row>
          <h3 className="text-left py-3 "> My Item</h3>
          <hr />
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default Cart;
