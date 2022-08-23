import React from "react";
import { Row, Card, Button, Container } from "react-bootstrap";
import { DefaultLayout } from "../../Layout/DefaultLayout";
import bag from "../../assets/bag.jpg";

const Cart = () => {
  return (
    <DefaultLayout>
      <Container>
        <Row>
          <h2 className="text-center py-3 "> My Shopping Bag</h2>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default Cart;
