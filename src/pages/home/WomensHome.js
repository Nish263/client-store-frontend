import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import bag from "../../assets/bag.jpg";
import CustomCard from "../../component/CustomCard";

const dummydata = [
  {
    img: bag,
    name: "handbag",
    price: "$40",
  },
  {
    img: bag,
    name: "handbag",
    price: "$40",
  },
  {
    img: bag,
    name: "handbag",
    price: "$40",
  },
  {
    img: bag,
    name: "handbag",
    price: "$40",
  },
];
const WomensHome = () => {
  return (
    <Container className="mb-5">
      <Row className="text-center py-4">
        <h3> Women Clothing</h3>
      </Row>
      <Row className="g-3">
        {dummydata.map((item) => (
          <Col className=" ">
            <Link className="nav-link" to={`/products-view/${item._id}`}>
              <CustomCard item={item} />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WomensHome;
