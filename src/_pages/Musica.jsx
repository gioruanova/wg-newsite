import React, { useEffect } from "react";
import {
  Content,
  InternalLinks,
  Titles,
  Paragraphs,
} from "../_components/Styles";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

import styled from "styled-components";
import { isMobile } from "react-device-detect";

const MusicContainer = styled.div`
  display: grid;
  ${isMobile ? "grid-template-row: 1fr 2fr;" : "grid-template-columns:1fr 2fr;"}
  justify-items: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  width: 60%;
`;

const MusicTextContainer = styled.div`
  padding: 0 1rem;
  p {
    text-align: ${isMobile ? "center" : "left"};
  }
  :last-child {
    text-align: center;
  }
`;

AOS.init();

const Musica = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <Content
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="900"
      data-aos-easing="ease-in-out"
    >
      <Titles>Musica</Titles>
      <MusicContainer>
        <ImgContainer>
          <Titles>IMG</Titles>
        </ImgContainer>
        <MusicTextContainer>
          <div>
            <Paragraphs>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab autem
              perspiciatis dolores error alias quasi facilis atque, deserunt
              architecto eius, nesciunt ex inventore quis sapiente similique
              possimus nihil? Vel, reiciendis.Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Ab autem perspiciatis dolores error
              alias quasi facilis atque, deserunt architecto eius, nesciunt ex
              inventore quis sapiente similique possimus nihil? Vel,
              reiciendis.Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Ab autem perspiciatis dolores error alias quasi facilis
              atque, deserunt architecto eius, nesciunt ex inventore quis
              sapiente similique possimus nihil? Vel, reiciendis.
            </Paragraphs>
          </div>
          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <InternalLinks to="/musicanavigation">Ver Mas</InternalLinks>
          </div>
        </MusicTextContainer>
      </MusicContainer>
    </Content>
  );
};

export default Musica;
