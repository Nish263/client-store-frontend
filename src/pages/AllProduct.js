import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomCard from "../component/CustomCard";

const AllProduct = () => {
  const { products } = useSelector((state) => state.product);

  console.log(products);
  return (
    <Container>
      <h4>all products</h4>
      {products.map((item, i) => (
        <Link className="nav-link" to={`/products-view/${item._id}`}>
          <CustomCard key={i} product={item} />
        </Link>
      ))}
    </Container>
  );
};

export default AllProduct;
