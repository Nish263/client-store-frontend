import React from "react";
import { Row, Card, Button, Container, Col, Table } from "react-bootstrap";
import { DefaultLayout } from "../../Layout/DefaultLayout";
import slippers from "../../assets/slippers.jpeg";

const Cart = () => {
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
                <tr>
                  <td>1</td>
                  <td>
                    <div className="d-flex">
                      <div>
                        <img style={{ width: "100px" }} src={slippers}></img>
                      </div>
                      <div>
                        <h6>Bridal Sandal</h6> <p>$30.00</p>
                        <Button variant="danger"> Remove</Button>
                      </div>
                    </div>
                    <td></td>
                  </td>
                  <td>
                    <div>
                      <Button className="m-1">-</Button>
                      <span className="fs-5">2</span>
                      <Button className="m-1">{""}+</Button>
                    </div>
                  </td>
                  <td>$60.00</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default Cart;
