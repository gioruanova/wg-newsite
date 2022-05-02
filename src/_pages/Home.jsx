import React from "react";
import { Content, MainContentHome, Separator } from "../_components/Styles";

import Bio from "./Bio";
import Musica from "./Musica";
import Tatuaje from "./Tatuaje";
import Pintura from "./Pintura";
import PlasticaYMas from "./PlasticaYMas";
import Contacto from "./Contacto";

const Home = () => {
  return (
    <MainContentHome>
      <Content>
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
        <Contacto />
      </Content>
    </MainContentHome>
  );
};

export default Home;
