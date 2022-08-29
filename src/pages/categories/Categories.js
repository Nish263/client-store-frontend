import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Categories = () => {
  const { categories } = useSelector((state) => state.category);
  console.log(categories);
  return (
    <Container>
      <h4>Categories</h4>
      {categories.map((item, i )=>{
        <Link className="nav-link" to
      })}
    </Container>
  );
};

export default Categories; 
