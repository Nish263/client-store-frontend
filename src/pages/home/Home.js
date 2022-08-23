import React from "react";

import HeroSection from "../../component/HeroSection";
import PopularCollections from "../../component/PopularCollections";

import { DefaultLayout } from "../../Layout/DefaultLayout";
import KidsHome from "./KidsHome";
import MensHome from "./MensHome";
import WomensHome from "./WomensHome";

const Home = () => {
  return (
    <DefaultLayout>
      <HeroSection />
      <PopularCollections />
      <KidsHome />
      <WomensHome />
      <MensHome />
    </DefaultLayout>
  );
};

export default Home;
