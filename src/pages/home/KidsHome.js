import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import KidsClothing from "../../assets/kidsClothing.jpg";
import CustomCard from "../../component/CustomCard";
const dummydata = [
  {
    _id: 1,
    img: KidsClothing,
    name: "dress",
    price: "$25",
  },
  {
    img: KidsClothing,
    name: "dress",
    price: "$25",
  },
  {
    img: KidsClothing,
    name: "dress",
    price: "$25",
  },
  {
    img: KidsClothing,
    name: "dress",
    price: "$25",
  },
];
const KidsHome = () => {
  return (
    <Container className="mb-5">
      <Row className="text-center py-5">
        <h3> Kid Clothing</h3>
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
      {/* <div>
          <CustomCard products={products} />
        </div> */}
    </Container>
  );
};

export default KidsHome;
