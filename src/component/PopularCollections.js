import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import sari from "../assets/sari.jpeg";

import CustomCard from "./CustomCard";

const dummyDta = [
  {
    img: sari,
  },
  {
    img: sari,
  },
  {
    img: sari,
  },
  {
    img: sari,
  },
];
const PopularCollections = () => {
  return (
    <Container>
      <Row>
        <h5 className="fw-bold mb-4 py-3 fs-2 text-center">
          Popular Collections
        </h5>
        {dummyDta.map((item, i) => (
          <Col className="g-3 mb-3">
            <CustomCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PopularCollections;
