import React from "react";
import { DefaultLayout } from "../../Layout/DefaultLayout";
import { Row, Col, Container } from "react-bootstrap";
import CustomCard from "../../component/CustomCard";
import shirt1 from "../../assets/shirt1.jpeg";
import { Link } from "react-router-dom";
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
  { _id: 4, img: shirt1, name: "Shirt", price: "$45" },
];

const MenClothing = () => {
  return (
    <DefaultLayout>
      <Container>
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
    </DefaultLayout>
  );
};

export default MenClothing;
