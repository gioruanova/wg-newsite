import React from "react";
import { Content, InternalLinks, Paragraphs } from "../_components/Styles";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import { BioData } from "../_components/Messages";

import styled from "styled-components";
import { isMobile } from "react-device-detect";

import BioImg from "../_images/BioImg.jpeg";

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

const ImgContainer = styled.img`
  border-radius: 10px;
  width: ${isMobile ? "100%" : "100%"};
  margin: 2rem 0;
`;

const BioTextContainer = styled.div`
  padding: ${isMobile ? "" : "0 2rem;"} p {

  }

  text-align: center;
  text-align: justify;
`;

AOS.init();

function Item({ Paragraph }) {
  return (
    <>
      <>
        <>
          <></>
        </>
        <>
          <div>
            <Paragraphs>{Paragraph}</Paragraphs>
          </div>
        </>
      </>
    </>
  );
}

const Bio = () => {
  return (
    <div>
      <>
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

            <ImgContainer src={BioImg} />
            <BioTextContainer>
              <div>
                {BioData.slice(0, 1).map((e, Bio) => (
                  <Item key={Bio} Paragraph={e.Paragraph} />
                ))}
              </div>
            </BioTextContainer>
          </BioContainer>
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <InternalLinks to="/bionavigation"> Ver Mas{" >"} </InternalLinks>
          </div>
        </Content>
      </>
    </div>
  );
};

export default Bio;

//------------------------------------------------------------------------------------------------------------------------------------------------
