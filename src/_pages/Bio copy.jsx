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
import { BioData } from "../_components/Messages";

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

const BioTextContainer = styled.div`
  padding: ${isMobile ? "" : "0 2rem;"} p {

  }
  text-align: center;
  text-align: justify;
`;

AOS.init();

function Item({ Paragraph, img, titles }) {
  const ImgContainer = styled.div`
    transition: 1s;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-color: none;
    width: 100%;
    height: 13rem;
    margin: 1rem;
    border-radius: 5px;
  `;

  return (
    <BioContainer>
      <TitleContainerBox>
        <Titles>{titles}</Titles>
      </TitleContainerBox>
      <ImgContainer img={img}></ImgContainer>
      <BioTextContainer>
        <Paragraphs>{Paragraph}</Paragraphs>
      </BioTextContainer>
    </BioContainer>
  );
}

const Bio = () => {
  return (
    <div
      data-aos="fade-rightt"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <Content>
        <div>
          {BioData.slice(0, 1).map((e, Bio, Img, Titles) => (
            <Item
              key={Bio}
              Paragraph={e.SummaryBio}
              img={e.Img}
              titles={e.Titles}
            />
          ))}
        </div>

        <InternalLinks to="/bionavigation"> Ver Mas{" >"} </InternalLinks>
      </Content>
    </div>
  );
};

export default Bio;

//------------------------------------------------------------------------------------------------------------------------------------------------
