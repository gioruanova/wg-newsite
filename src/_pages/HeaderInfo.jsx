import React, { useEffect } from "react";
import { Content, Paragraphs, Titles } from "../_components/Styles";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const HeaderInfo = () => {
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <Content
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <Titles>Walter Gandini</Titles>
      <Titles>
        <Paragraphs>Musica - Tatuaje - Pintura - Plastica</Paragraphs>
      </Titles>
    </Content>
  );
};

export default HeaderInfo;
