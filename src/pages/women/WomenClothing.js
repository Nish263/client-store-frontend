import React from "react";
import { DefaultLayout } from "../../Layout/DefaultLayout";
import { Row, Col, Container } from "react-bootstrap";
import CustomCard from "../../component/CustomCard";
import bag from "../../assets/bag.jpg";
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
const WomenClothing = () => {
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
export default WomenClothing;
