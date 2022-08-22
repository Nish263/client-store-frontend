import React, { useEffect, useState } from "react";
import { DefaultLayout } from "../../Layout/DefaultLayout";
import KidsClothing from "../../assets/kidsClothing.jpg";
import { Container, Row, Col } from "react-bootstrap";
import CustomCard from "../../component/CustomCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductAction } from "../../component/products/productsAction";

const dummydata = [
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
  {
    img: KidsClothing,
    name: "dress",
    price: "$25",
  },
];
const KidClothing = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [allProducts, setAllProducts] = useState();

  useEffect(() => {
    dispatch(fetchProductAction());
  }, [dispatch]);
  console.log("all", products);
  return (
    <DefaultLayout>
      <Container>
        {/* <Row className="g-3">
          {dummydata.map((item) => (
            <Col className=" ">
              <CustomCard item={item} />
            </Col>
          ))}
        </Row> */}
        <div>
          <CustomCard products={products} />
        </div>
      </Container>
    </DefaultLayout>
  );
};

export default KidClothing;
