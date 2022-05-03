import React from "react";
import { Content, InternalLinks, Paragraphs } from "../_components/Styles";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

import styled from "styled-components";
import { isMobile } from "react-device-detect";

import BioPicture from "../_images/BioPicture.jpeg";

const BioContainer = styled.div`
  display: grid;
  ${isMobile
    ? "grid-template-row: 1fr 4fr 9fr;"
    : "grid-template-columns: 1fr 4fr 9fr;"}

  justify-items: center;
  align-items: center;
`;

const TitleContainer1 = styled.div`
  justify-content: center;
  text-align: ${isMobile ? "center" : "start"};
  transform: ${isMobile ? "" : "rotate(-90deg);"}
  line-height: 2.5rem;
  letter-spacing: 1.2rem;
  padding-left:1rem;

  h1 {
    color: ${(props) => props.theme.mainTitlesColor};
    font-size: ${isMobile ? "2rem" : "2.5rem;"}
    font-family: ${(props) => props.theme.generalFont};
    margin: 0;
    text-transform: uppercase;
    transition: 1s;
    
  }
`;

const PictureContainer = styled.img`
  border-radius: 10px;
  width: ${isMobile ? "100%" : "100%"};
  margin: 2rem 0;
`;

const BioTextContainer = styled.div`
  padding: ${isMobile ? "" : "0 2rem;"} p {
    text-align: ${isMobile ? "center" : "left"};
  }

  text-align: center;
  text-align: justify;
`;

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
      <BioContainer>
        <TitleContainer1>
          <h1>Walter</h1>
          <h1>Gandini</h1>
        </TitleContainer1>

        <PictureContainer src={BioPicture} />
        <BioTextContainer>
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
              sapiente similique possimus nihil? Vel, reiciendis. atque,
              deserunt architecto eius, nesciunt ex inventore quis sapiente
              similique possimus nihil? Vel, reiciendis. sapiente similique
              possimus nihil? Vel, reiciendis. atque, deserunt architecto eius,
              nesciunt ex inventore quis sapiente similique possimus nihil? Vel,
              reiciendis. sapiente similique possimus nihil? Vel, reiciendis.
              atque, deserunt architecto eius, nesciunt ex inventore quis
              
              
            </Paragraphs>
          </div>
        </BioTextContainer>
      </BioContainer>
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
