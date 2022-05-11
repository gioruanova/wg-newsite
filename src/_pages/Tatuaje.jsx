import React from "react";
import {
  Content,
  InternalLinks,
  Paragraphs,
  StudioTitle,
} from "../_components/Styles";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import { TatuajeData } from "../_components/Messages";

import styled from "styled-components";
import { isMobile } from "react-device-detect";

const BioContainer = styled.div`
  display: grid;
  ${isMobile
    ? "grid-template-row:  1fr 2fr;"
    : "grid-template-columns:  1fr 2fr;"}

  justify-items: center;
  align-items: center;
  margin-bottom: 3rem;
`;

const BioTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${isMobile ? "" : "0 2rem 0 2rem;"} p {

  }
  align-items: ${isMobile ? "center" : "baseline"};
  ${isMobile ? "grid-row: 3;" : ""}
`;

export const Titles = styled.h1`
  color: ${(props) => props.theme.mainTitlesColor};
  font-size: ${(props) => props.theme.sizeMaintTitles};
  font-family: ${(props) => props.theme.generalFont};
  margin: 0 0 2rem 0;
  text-transform: uppercase;
  transition: 1s;
`;

const TitleContainer1 = styled.div`
  justify-content: center;
  text-align: ${isMobile ? "center" : "start"};
    line-height: 2.5rem;
  letter-spacing: 1.2rem;
  padding-left:1rem;

  h1 {
    color: ${(props) => props.theme.mainTitlesColor};
    font-size: ${isMobile ? "2rem" : "2.5rem;"}
    font-family: ${(props) => props.theme.generalFont};
    text-transform: uppercase;
    transition: 1s;`;

AOS.init();

function Item({ paragraph, img, titles, studiotitle }) {
  const ImgContainer = styled.div`
    transition: 1s;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    border-color: none;
    width: 100%;
    height: 20rem;
    border-radius: 10px;

    ${isMobile ? "grid-row: 4;" : ""}
  `;
  return (
    <BioContainer>
      {img && <ImgContainer img={img}></ImgContainer>}
      <BioTextContainer>
        <TitleContainer1>
          <Titles>{titles}</Titles>
        </TitleContainer1>
        <StudioTitle>{studiotitle}</StudioTitle>

        <Paragraphs>{paragraph}</Paragraphs>
      </BioTextContainer>
    </BioContainer>
  );
}

const Tatuaje = () => {
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
          {TatuajeData.slice(0, 1).map((e, Bio) => (
            <Item
              key={Bio}
              paragraph={e.ParagraphTatuajeSummary}
              img={e.Img}
              titles={e.Titles}
              studiotitle={e.StudioTitle}
            />
          ))}
        </div>

        <InternalLinks to="/tatuajenavigation"> Ver Mas{" >"} </InternalLinks>
      </Content>
    </div>
  );
};

export default Tatuaje;

//------------------------------------------------------------------------------------------------------------------------------------------------
