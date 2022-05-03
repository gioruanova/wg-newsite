import React from "react";
import {
  Content,
  InternalLinks,
  Titles,
  Paragraphs,
} from "../_components/Styles";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Musica = () => {
  return (
    <Content
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="900"
      data-aos-easing="ease-in-out"
    >
      <Titles>Musica</Titles>
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
      <InternalLinks to="/musicanavigation">Ver Mas</InternalLinks>
    </Content>
  );
};

export default Musica;
