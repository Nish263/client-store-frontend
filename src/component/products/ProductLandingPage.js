import React, { useState } from "react";
import { DefaultLayout } from "../../Layout/DefaultLayout";
import { Container } from "react-bootstrap";
import { setAddToCartItem } from "../../pages/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const products = [
  {
    _id: "1",
    title: "Saree",
    src: [
      "https://cdn.shopify.com/s/files/1/0876/3680/products/octavia_dress_red_5_1024x1024.jpg?v=1657846545",
      "https://cdn.shopify.com/s/files/1/0876/3680/products/octavia_dress_black_9_1024x1024.jpg?v=1653462771",
      " https://cdn.shopify.com/s/files/1/0876/3680/products/octavia_dress_white_7_1024x1024.jpg?v=1654652769",
      "https://cdn.shopify.com/s/files/1/0876/3680/products/octavia_dress_pink_7_1024x1024.jpg?v=1653634782",
    ],
    description: "The siffon saree, available in different colour",
    price: "$100",
    colors: ["red", "pink", "green", "orange"],
    count: 1,
  },
];

const ProductLandingPage = () => {
  const [imageIndex, setImageIndex] = useState(0);
  // const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);
  console.log(cart);
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
  return (
    <DefaultLayout className="prodView">
      <Container>
        {products.map((item) => (
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
