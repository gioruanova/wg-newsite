import React from "react";
import { Content, Titles, Paragraphs } from "../_components/Styles";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Contacto = () => {
  return (
    <Content
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <Titles>Contacto</Titles>
      <Paragraphs>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab autem
        perspiciatis dolores error alias quasi facilis atque, deserunt
        architecto eius, nesciunt ex inventore quis sapiente similique possimus
        nihil? Vel, reiciendis.Lorem ipsum dolor sit amet consectetur,
        adipisicing elit.
      </Paragraphs>
    </Content>
  );
};

export default Contacto;
