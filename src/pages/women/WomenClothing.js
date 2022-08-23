import React from "react";
import { DefaultLayout } from "../../Layout/DefaultLayout";
import { Row, Col, Container } from "react-bootstrap";
import CustomCard from "../../component/CustomCard";
import bag from "../../assets/bag.jpg";
import { Link } from "react-router-dom";
const dummydata = [
  {
    _id: 1,
    img: bag,
    name: "handbag",
    price: "$40",
  },
  {
    _id: 2,
    img: bag,
    name: "handbag",
    price: "$40",
  },
  {
    _id: 2,
    img: bag,
    name: "handbag",
    price: "$40",
  },
  {
    _id: 2,
    img: bag,
    name: "handbag",
    price: "$40",
  },
  {
    _id: 3,
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
export default WomenClothing;
