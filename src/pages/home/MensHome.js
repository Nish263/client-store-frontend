import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import shirt1 from "../../assets/shirt1.jpeg";
import CustomCard from "../../component/CustomCard";
const dummydata = [
  {
    _id: 1,
    img: shirt1,
    name: "Shirt",
    price: "$45",
  },
  {
    _id: 2,
    img: shirt1,
    name: "Shirt",
    price: "$45",
  },
  {
    _id: 3,
    img: shirt1,
    name: "Shirt",
    price: "$45",
  },
  {
    _id: 4,
    img: shirt1,
    name: "Shirt",
    price: "$45",
  },
  ,
];
const MensHome = () => {
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

export default MensHome;
