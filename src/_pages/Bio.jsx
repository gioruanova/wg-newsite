import React from "react";
import {
  Content,
  InternalLinks,
  Paragraphs,
  Titles,
} from "../_components/Styles";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Bio = () => {
  return (
    <Content
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <Titles>BIO</Titles>
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
        <InternalLinks to="/bionavigation">Ver Mas</InternalLinks>
      </div>
    </Content>
  );
};

export default Bio;
