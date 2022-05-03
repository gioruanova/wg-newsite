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

const PlasticContainer = styled.div`
  display: grid;
  grid-template-row: 1fr 1fr;
  justify-items: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${isMobile ? "100%" : "22%"};
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
  width: 40%;
  height: 6rem;
  color: white;
  left: 1.5rem;
  top: 6rem;
  background-color: grey;
`;

const ImgContainer2 = styled(ImgContainer1)`
  left: 9rem;
  top: 6rem;
`;

const ImgContainer3 = styled(ImgContainer1)`
  left: 5rem;
  top: 7.5rem;
`;

const ImgContainer4 = styled(ImgContainer1)`
  left: 0rem;
  top: 3rem;
`;

const ImgContainer5 = styled(ImgContainer4)`
  left: 10rem;
  top: 3rem;
`;

const ImgContainer6 = styled(ImgContainer4)`
  width: 50%;
  height: 8rem;
  left: 4rem;
  top: 1.5rem;
`;

const EshopTextContainer = styled.div`
  padding: ${isMobile ? "" : "0 1rem;"}
  text-align: justify;
  p {
    text-align: justify;
  }
`;

AOS.init();

const Eshop = () => {
  return (
    <Content
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <Titles>E-Shop</Titles>
      <PlasticContainer>
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

            <ImgContainer5>
              <p>IMG 5</p>
            </ImgContainer5>

            <ImgContainer6>
              <p>IMG 6</p>
            </ImgContainer6>
          </>
        </ImgContainer>
        <EshopTextContainer>
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
        </EshopTextContainer>
      </PlasticContainer>
      <div
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <InternalLinks to="/plasticaymasnavigation">
          Ver Mas{" >"}{" "}
        </InternalLinks>
      </div>
    </Content>
  );
};

export default Eshop;
