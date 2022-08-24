import React from "react";
import { Row, Card, Button, Container, Col, Table } from "react-bootstrap";
import { DefaultLayout } from "../../Layout/DefaultLayout";
import slippers from "../../assets/slippers.jpeg";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddToCartItem,
  setReduceCartItem,
  setRemoveCartItem,
} from "./cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.cartItem);

  const handleOnAddItem = (product) => {
    dispatch(setAddToCartItem(product));
  };

  const handleOnReduceItem = (product) => {
    dispatch(setReduceCartItem(product));
  };

  const handleOnRemoveItem = (product) => {
    dispatch(setRemoveCartItem(product));
  };

  return (
    <DefaultLayout>
      <Container>
        {cartItem.length > 0 ? (
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
                              src={`http://localhost:8001/${item.images[0].substr(
                                7
                              )}`}
                              crossOrigin="anonymous"
                            ></img>
                          </div>
                          <div>
                            <h6>{item.title}</h6> <p> $ {item.price}</p>
                            <Button
                              variant="danger"
                              onClick={() => handleOnRemoveItem(item)}
                            >
                              {" "}
                              Remove
                            </Button>
                          </div>
                        </div>
                        <td></td>
                      </td>
                      <td>
                        <div>
                          <Button
                            onClick={() => handleOnReduceItem(item)}
                            className="m-1"
                          >
                            -
                          </Button>
                          <span className="fs-5">{item.quantity}</span>
                          <Button
                            onClick={() => handleOnAddItem(item)}
                            className="m-1"
                          >
                            {""}+
                          </Button>
                        </div>
                      </td>
                      <td> $ {item.price * item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        ) : (
          <h2 className="text-center py-5">Your cart is empty</h2>
        )}
      </Container>
    </DefaultLayout>
  );
};

export default Cart;
