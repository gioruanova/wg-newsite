import React from "react";
import { Content, MainContentHome, Separator } from "../_components/Styles";

import Header from "./Header";
import ProximosEventos from "./ProximosEventos";

import Bio from "./Bio";
import ArtSection from "./ArtSection";

import Contacto from "./Contacto";
import Marcas from "./Marcas";

// import Musica from "./Musica";
// import Tatuaje from "./Tatuaje";

// import Pintura from "./Pintura";
// import PlasticaYMas from "./PlasticaYMas";
// import Eshop from "./Eshop";




const Home = () => {
  return (
    <MainContentHome>
      <Content>
        <Header />
   
        <ProximosEventos />

        <Bio />
        
        <ArtSection/>
        {/* <Separator />
        <Musica />
        <Separator />
        <Tatuaje />
        <Separator />
        <Pintura />
        <Separator />
        <PlasticaYMas />
        <Separator />
        <Eshop />
        <Separator /> */}
        <Contacto />
        <Separator />
        <Marcas/>
      </Content>
    </MainContentHome>
  );
};

export default Home;
