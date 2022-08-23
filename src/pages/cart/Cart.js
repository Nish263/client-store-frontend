import React from "react";
import { Row, Card, Button, Container, Col, Table } from "react-bootstrap";
import { DefaultLayout } from "../../Layout/DefaultLayout";
import slippers from "../../assets/slippers.jpeg";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.cartItem);
  console.log(cartItem);
  return (
    <DefaultLayout>
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItem.map((item, i) => (
                  <tr>
                    <td>1</td>
                    <td>
                      <div className="d-flex">
                        <div>
                          <img
                            style={{ width: "100px" }}
                            src={item.src[0]}
                          ></img>
                        </div>
                        <div>
                          <h6>{item.title}</h6> <p> ${item.price}</p>
                          <Button variant="danger"> Remove</Button>
                        </div>
                      </div>
                      <td></td>
                    </td>
                    <td>
                      <div>
                        <Button className="m-1">-</Button>
                        <span className="fs-5">{item.quantity}</span>
                        <Button className="m-1">{""}+</Button>
                      </div>
                    </td>
                    <td> ${item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default Cart;
