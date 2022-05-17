import React from "react";

import Header from "./Header";
import ProximosEventos from "./ProximosEventos";

import Bio from "./Bio";
import BannerSeparator from "../_components/BannerSeparator";
import ArtSection from "./ArtSection";

import Contacto from "./Contacto";
import Marcas from "./Marcas";
// import Eshop from "./Eshop";

import { Content, MainContentHome, Separator } from "../_components/Styles";

// ------------------------------------------------------------

const Home = () => {
  return (
    <MainContentHome className="animate__animated animate__fadeIn animate__delay-1s animate__slower">
      <Content>
        <Header />
        <ProximosEventos />
        <Bio />
        <BannerSeparator />
        <ArtSection />
        <Contacto />
        <Separator />
        <Marcas />
      </Content>
    </MainContentHome>
  );
};

export default Home;
