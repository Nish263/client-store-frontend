import React from "react";

import Card from "react-bootstrap/Card";
const url = " http://localhost:8001/";
const CustomCard = ({ product }) => {
  return (
    <Card className="g-2 " style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`${url + product?.images[0].substr(7)}`}
        crossOrigin="anonymous"
      />
      <Card.Body>
        <Card.Title> {product.name}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Card.Text>{product.qty}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default CustomCard;
