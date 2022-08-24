import React, { useEffect } from "react";

import HeroSection from "../../component/HeroSection";
import PopularCollections from "../../component/PopularCollections";
import { fetchProductAction } from "../../component/products/productsAction";

import { DefaultLayout } from "../../Layout/DefaultLayout";
import KidsHome from "./KidsHome";
import MensHome from "./MensHome";
import WomensHome from "./WomensHome";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../../component/categories/Categories";
import AllProduct from "../AllProduct";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductAction());
  }, [dispatch]);

  const { products } = useSelector((state) => state.product);

  return (
    <DefaultLayout>
      <HeroSection />
      {/* <PopularCollections />
      <Categories /> */}{" "}
      <AllProduct />
    </DefaultLayout>
  );
};

export default Home;
