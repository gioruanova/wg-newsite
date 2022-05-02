import React from "react";
import {
  Content,
  Titles,
  StudioTitle,
  InternalLinks,
  Paragraphs,
} from "../_components/Styles";

const Tatuaje = () => {
  return (
    <Content>
      <Titles>Tatuaje</Titles>
      <StudioTitle>Ganesha Art Tattoo Studio</StudioTitle>
      <Paragraphs>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab autem
        perspiciatis dolores error alias quasi facilis atque, deserunt
        architecto eius, nesciunt ex inventore quis sapiente similique possimus
        nihil? Vel, reiciendis.Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Ab autem perspiciatis dolores error alias quasi
        facilis atque, deserunt architecto eius, nesciunt ex inventore quis
        sapiente similique possimus nihil? Vel, reiciendis.Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Ab autem perspiciatis dolores error
        alias quasi facilis atque, deserunt architecto eius, nesciunt ex
        inventore quis sapiente similique possimus nihil? Vel, reiciendis.
      </Paragraphs>
      <InternalLinks to="/tatuajenavigation">Ver Mas</InternalLinks>
    </Content>
  );
};

export default Tatuaje;
