import React from "react";

import Header from "./Header";
import NextEvents from "../_components/NextEvents";

import Bio from "./Bio";
import BannerSeparator from "../_components/BannerSeparator";
import ArtSection from "./ArtSection";

import Contact from "./Contact";
import Brands from "../_components/Brands";
// import Eshop from "./Eshop";

import { Content, MainContentHome, Separator } from "../_components/Styles";

// ------------------------------------------------------------

const Home = () => {
  return (
    <MainContentHome className="animate__animated animate__fadeIn animate__delay-1s animate__slower">
      <Content>
        <Header />
        <NextEvents />
        <Bio />
        <BannerSeparator />
        <ArtSection />
        <Contact />
        <Separator />
        <Brands />
      </Content>
    </MainContentHome>
  );
};

export default Home;
