import React from "react";

import Card from "react-bootstrap/Card";

const CustomCard = ({ item }) => {
  return (
    <Card className="g-2 " style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title> {item.name}</Card.Title>
        <Card.Text>{item.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default CustomCard;
