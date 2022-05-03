import React from "react";
import { Content, Paragraphs, Titles } from "../_components/Styles";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const ProximosEventos = () => {
  return (
    <Content
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <Titles>Proximos Eventos</Titles>
      <Titles>
        <Paragraphs>Proximos Eventos Info</Paragraphs>
      </Titles>
    </Content>
  );
};

export default ProximosEventos;
