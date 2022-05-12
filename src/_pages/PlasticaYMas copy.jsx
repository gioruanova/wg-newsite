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
import { PlasticaData } from "../_components/Messages";

import styled from "styled-components";
import { isMobile } from "react-device-detect";

const BioContainer = styled.div`
  display: grid;
  ${isMobile
    ? "grid-template-row: 1fr 4fr 9fr;"
    : "grid-template-columns: 1fr 4fr 9fr;"}

  justify-items: center;
  align-items: center;
  margin-bottom: 3rem;
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
    font-family: ${(props) => props.theme.generalTextFont};
    margin: 0;
    text-transform: uppercase;
    transition: 1s;
    
  }
`;

const BioTextContainer = styled.div`
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
    <BioContainer>
      <TitleContainer1>
        <Titles>{titles}</Titles>
      </TitleContainer1>
      <ImgContainer img={img}></ImgContainer>
      <BioTextContainer>
        <Paragraphs>{paragraph}</Paragraphs>
      </BioTextContainer>
    </BioContainer>
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
          Ver Mas{" >"}{" "}
        </InternalLinks>
      </Content>
    </div>
  );
};

export default PlasticaYMas;

//------------------------------------------------------------------------------------------------------------------------------------------------