import React from "react";
import { Content, MainContentHome, Separator } from "../_components/Styles";

import Header from "./Header";
import ProximosEventos from "./ProximosEventos";

import Bio from "./Bio";
import BannerSeparator from "./BannerSeparator";
import ArtSection from "./ArtSection";

import Contacto from "./Contacto";
import Marcas from "./Marcas";

// import Eshop from "./Eshop";

const Home = () => {
  return (
    <MainContentHome>
      <Content>
        <Header />
        <ProximosEventos />
        <Bio />
        <BannerSeparator/>
        <ArtSection />
        <Contacto />
        <Separator />
        <Marcas />
      </Content>
    </MainContentHome>
  );
};

export default Home;
