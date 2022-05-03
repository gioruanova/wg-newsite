import React from "react";
import { Content, MainContentHome, Separator } from "../_components/Styles";

import Bio from "./Bio";
import Musica from "./Musica";
import Tatuaje from "./Tatuaje";
import Pintura from "./Pintura";
import PlasticaYMas from "./PlasticaYMas";
import Contacto from "./Contacto";
import HeaderInfo from "./HeaderInfo";
import ProximosEventos from "./ProximosEventos";
import Eshop from "./Eshop";

const Home = () => {
  return (
    <MainContentHome>
      <Content>
        <HeaderInfo />
        <Separator />
        <ProximosEventos />
        <Separator />
        <Bio />
        <Separator />
        <Musica />
        <Separator />
        <Tatuaje />
        <Separator />
        <Pintura />
        <Separator />
        <PlasticaYMas />
        <Separator />
        <Eshop />
        <Separator />
        <Contacto />
      </Content>
    </MainContentHome>
  );
};

export default Home;
