import React from "react";
import { DefaultLayout } from "../../Layout/DefaultLayout";
import { Row, Col, Container } from "react-bootstrap";
import CustomCard from "../../component/CustomCard";
import shirt1 from "../../assets/shirt1.jpeg";
const dummydata = [
  {
    img: shirt1,
    name: "Shirt",
    price: "$45",
  },
  {
    img: shirt1,
    name: "Shirt",
    price: "$45",
  },
  {
    img: shirt1,
    name: "Shirt",
    price: "$45",
  },
  {
    img: shirt1,
    name: "Shirt",
    price: "$45",
  },
  {
    img: shirt1,
    name: "Shirt",
    price: "$45",
  },
  {
    img: shirt1,
    name: "Shirt",
    price: "$45",
  },
];

const MenClothing = () => {
  return (
    <DefaultLayout>
      <Container>
        <Row className="g-3">
          {dummydata.map((item) => (
            <Col className=" ">
              <CustomCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default MenClothing;
