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
import Marcas from "./Marcas";


const Home = () => {
  return (
    <MainContentHome>
      <Content>
        <HeaderInfo />
        <Separator className="animate__animated animate__fadeIn animate__delay-1s" />
        <ProximosEventos />
        <Separator className="animate__animated animate__fadeIn animate__delay-1s" />
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
        <Separator />
        <Marcas/>
      </Content>
    </MainContentHome>
  );
};

export default Home;
