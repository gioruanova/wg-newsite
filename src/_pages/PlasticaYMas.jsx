import React from "react";
import {
  Content,
  InternalLinks,
  Paragraphs,
  Titles,
  TitleContainerBox,
} from "../_components/Styles";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import { PlasticaData } from "../_components/Messages";

import styled from "styled-components";
import { isMobile } from "react-device-detect";

const PlasticaContainer = styled.div`
  display: grid;
  ${isMobile
    ? "grid-template-row: 9fr 4fr 1fr;"
    : "grid-template-columns: 1fr 4fr 9fr;"}

  justify-items: center;
  align-items: center;
  margin-bottom: 3rem;
`;

const PlasticaTextContainer = styled.div`
  padding: ${isMobile ? "" : "0 2rem;"} p {

  }
  text-align: center;
  text-align: justify;
  ${isMobile ? "grid-row: 3;" : ""}
`;

AOS.init();

function Item({ paragraph, img, titles }) {
  const ImgContainer = styled.div`
    transition: 1s;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-color: none;
    width: 100%;
    height: 20rem;
    margin: 1rem;
    border-radius: 5px;
    ${isMobile ? "grid-row: 2;" : ""}
  `;
  return (
    <PlasticaContainer>
      <TitleContainerBox>
        <Titles>{titles}</Titles>
      </TitleContainerBox>
      <ImgContainer img={img}></ImgContainer>
      <PlasticaTextContainer>
        <Paragraphs>{paragraph}</Paragraphs>
      </PlasticaTextContainer>
    </PlasticaContainer>
  );
}

const PlasticaYMas = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <Content>
        <div>
          {PlasticaData.slice(0, 1).map((e, Bio) => (
            <Item
              key={Bio}
              paragraph={e.Paragraph}
              img={e.Img}
              titles={e.Titles}
            />
          ))}
        </div>
        <InternalLinks to="/plasticaymasnavigation">
          {" "}
          Ver Más{" >"}{" "}
        </InternalLinks>
      </Content>
    </div>
  );
};

export default PlasticaYMas;

//------------------------------------------------------------------------------------------------------------------------------------------------
