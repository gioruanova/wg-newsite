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

import styled from "styled-components";
import { isMobile } from "react-device-detect";

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
  text-align: start;
  transform: ${isMobile ? "" : "rotate(-90deg);"}
  line-height: 2.5rem;
  letter-spacing: 1.2rem;
  

  h1 {
    color: ${(props) => props.theme.mainTitlesColor};
    font-size: 2.5rem;
    font-family: ${(props) => props.theme.generalFont};
    margin: 0;
    text-transform: uppercase;
    transition: 1s;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  width: 60%;
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

        <ImgContainer>
          <Titles>IMG</Titles>
        </ImgContainer>
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
            <InternalLinks to="/bionavigation">Ver Mas</InternalLinks>
          </div>
        </BioTextContainer>
      </BioContainer>
    </Content>
  );
};

export default Bio;
