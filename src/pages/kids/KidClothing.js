import React, { useEffect, useState } from "react";
import { DefaultLayout } from "../../Layout/DefaultLayout";
import KidsClothing from "../../assets/kidsClothing.jpg";
import { Container, Row, Col } from "react-bootstrap";
import CustomCard from "../../component/CustomCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductAction } from "../../component/products/productsAction";
import { Link } from "react-router-dom";

const dummydata = [
  {
    _id: 1,
    img: KidsClothing,
    name: "dress",
    price: "$25",
  },
  {
    _id: 2,
    img: KidsClothing,
    name: "dress",
    price: "$25",
  },
  {
    _id: 3,
    img: KidsClothing,
    name: "dress",
    price: "$25",
  },
  {
    _id: 4,
    img: KidsClothing,
    name: "dress",
    price: "$25",
  },
];
const KidClothing = () => {
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
        {/* <div>
          <CustomCard products={products} />
        </div> */}
      </Container>
    </DefaultLayout>
  );
};

export default KidClothing;
