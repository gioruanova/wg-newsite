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

import styled from "styled-components";
import { isMobile } from "react-device-detect";

const PinturaContainer = styled.div`
  display: grid;
  ${isMobile
    ? "grid-template-row: 1fr  3fr;"
    : "grid-template-columns: 1fr  2fr;"}
  justify-items: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 20rem;
  margin: 0 0 2rem 0;
  
`;

const ImgContainer1 = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  width: 40%;
  height: 10rem;
  color: white;
  left: 0;
  top: 2.5rem;
  background-color: grey;
`;

const ImgContainer2 = styled(ImgContainer1)`
  left: ${isMobile ? "2rem" : "5rem"};
  top: 4rem;
`;

const ImgContainer3 = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  width: 40%;
  height: 10rem;
  color: white;
  right: 4rem;
  top: 6rem;
  background-color: grey;
`;

const ImgContainer4 = styled(ImgContainer3)`
  right: 0rem;
  top: 8rem;
`;

const BioTextContainer = styled.div`
  padding: 0 1rem;
  p {
    text-align: ${isMobile ? "center" : "left"};
  }
  :last-child {
    text-align: center;
  }
`;

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
      <PinturaContainer>
        <ImgContainer>
          <>
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
          </>
        </ImgContainer>
        <BioTextContainer>
          <Paragraphs>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab autem
            perspiciatis dolores error alias quasi facilis atque, deserunt
            architecto eius, nesciunt ex inventore quis sapiente similique
            possimus nihil? Vel, reiciendis.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Ab autem perspiciatis dolores error
            alias quasi facilis atque, deserunt architecto eius, nesciunt ex
            inventore quis sapiente similique possimus nihil? Vel,
            reiciendis.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Ab autem perspiciatis dolores error alias quasi facilis atque,
            deserunt architecto eius, nesciunt ex inventore quis sapiente
            similique possimus nihil? Vel, reiciendis.
          </Paragraphs>
         
        </BioTextContainer>
      </PinturaContainer>
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
