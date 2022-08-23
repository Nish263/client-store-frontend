import React, { useState } from "react";
import { DefaultLayout } from "../../Layout/DefaultLayout";
import { Container } from "react-bootstrap";
import { setAddToCartItem } from "../../pages/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const ProductLandingPage = ({ products }) => {
  const [imageIndex, setImageIndex] = useState(0);
  // const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);

  const handleTabClick = (index) => {
    setImageIndex(index);
  };

  // const handleOnClick = (item) => {
  //   cart.push(item);
  //   console.log(cart);
  // };

  const handleOnAddToCart = (product) => {
    dispatch(setAddToCartItem(product));
  };

  const { _id } = useParams();
  const product = products.filter((item) => item._id === _id);
  console.log(product);
  return (
    <DefaultLayout className="prodView">
      <Container>
        {product.map((item) => (
          <div className="details" key={item._id}>
            <div className="big-img">
              <img src={item.src[imageIndex]} alt="" />
            </div>
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>{item.price}</span>
              </div>

              <p>{item.description}</p>
              <p>{item.content}</p>

              <div className="thumb">
                {item.src.map((img, index) => (
                  <img
                    src={img}
                    className={index === imageIndex ? "active" : ""}
                    alt=""
                    key={index}
                    onClick={() => handleTabClick(index)}
                  />
                ))}
                <button
                  onClick={() => handleOnAddToCart(item)}
                  className="addCart"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </DefaultLayout>
  );
};

export default ProductLandingPage;
