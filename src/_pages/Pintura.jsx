import React from "react";
import {
  Content,
  Titles,
  InternalLinks,
  Paragraphs,
} from "../_components/Styles";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Pintura = () => {
  return (
    <Content
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <Titles>Pintura</Titles>
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
      <div
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <InternalLinks to="/pinturanavigation">Ver Mas</InternalLinks>
      </div>
    </Content>
  );
};

export default Pintura;
