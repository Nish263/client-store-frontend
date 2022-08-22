import React from "react";

import HeroSection from "../component/HeroSection";
import PopularCollections from "../component/PopularCollections";

import { DefaultLayout } from "../Layout/DefaultLayout";

const Home = () => {
  return (
    <DefaultLayout>
      <HeroSection />

      <PopularCollections />
    </DefaultLayout>
  );
};

export default Home;
