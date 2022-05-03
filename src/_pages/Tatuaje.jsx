import React from "react";
import {
  Content,
  Titles,
  StudioTitle,
  InternalLinks,
  Paragraphs,
} from "../_components/Styles";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import styled from "styled-components";
import { isMobile } from "react-device-detect";

const TatuajeContainer = styled.div`
  display: grid;
  ${isMobile
    ? "grid-template-row: 3fr  1fr;"
    : "grid-template-columns: 3fr  1fr;"}

  justify-items: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 15rem;
  margin: 0 0 2rem 0;
  ${isMobile ? "grid-row:1;" : ";"}
`;
const ImgContainer1 = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  width: 50%;
  height: 6rem;
  color: white;
  left: 0.5rem;
  top: 3rem;
  background-color: grey;
`;

const ImgContainer2 = styled(ImgContainer1)`
  left: 5rem;
  top: 1rem;
`;

const ImgContainer3 = styled(ImgContainer1)`
  left: 1.5rem;
  top: 8.5rem;
`;

const ImgContainer4 = styled(ImgContainer1)`
  left: 7rem;
  top: 6rem;
`;

const TatuajeTextContainer = styled.div`
padding: ${isMobile ? "" : "0 1rem;"}
text-align: justify;
p {
  text-align: justify;
}
`;

AOS.init();

const Tatuaje = () => {
  return (
    <Content
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <Titles>Tatuaje</Titles>
      <TatuajeContainer>
        <div>
          <StudioTitle>Ganesha Art Tattoo Studio</StudioTitle>
          <TatuajeTextContainer>
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
          </TatuajeTextContainer>
        </div>
        <ImgContainer>
          <ImgContainer1>
            <p>IMG 1</p>
          </ImgContainer1>
          <ImgContainer2>
            <p>IMG 2</p>
          </ImgContainer2>
          <ImgContainer3>
            <p>IMG 3</p>
          </ImgContainer3>
          <ImgContainer4>
            <p>IMG 4</p>
          </ImgContainer4>
        </ImgContainer>
      </TatuajeContainer>
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <InternalLinks to="/tatuajenavigation"> Ver Mas{" >"} </InternalLinks>
      </div>
    </Content>
  );
};

export default Tatuaje;
