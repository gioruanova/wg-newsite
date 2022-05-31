import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

import AOS from "aos";
import "aos/dist/aos.css";

import { BioArray } from "../../_components/DataArray";
import { MainContent } from "../../_components/Styles";
import Redes from "../../_components/Redes";

// ------------------------------------------------------------

const ParagraphsNavigation = styled.p`
color: ${(props) => props.theme.generalTextColor};
font-size: ${isMobile ? "0.8rem;" : "1rem;"}
font-family: ${(props) => props.theme.generalTextFont};
font-weight: 400;  
transition:1s;
text-align:justify;
line-height: 1.5rem;
word-break: break-word;
word-spacing: 0.1rem;
margin: 0;
`;

const ContainerRedesFootParagraph = styled.div`
  margin: 2rem 0;
`;

const Titles = styled.h1`
  color: white;
  font-size: ${isMobile ? "1.5rem" : "1.8rem"};
  font-family: ${(props) => props.theme.generalFont};
  background-color: ${(props) => props.theme.mainTitlesColor};
  text-transform: uppercase;
  transition: 1s;
  width: 100%;
  border-radius: 0.2rem;
  margin: 0.5rem 0 2rem 0;
  padding: 0.5rem;
`;

function Item({ bioparagraph, bioimg, isreverseimg, biotitle }) {
  const ContainerBio = styled.div`
    display: flex;
    align-items: center;
    ${isreverseimg ? "flex-direction: row-reverse;" : "flex-direction:row;"}
    justify-content:center;
    width: 100%;
    gap: 1rem;
  `;

  const ContainerBioResponsive = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 1rem;
  `;

  const ImgContainer = styled.div`
    background-image: url(${bioimg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-color: none;
    width: 100%;
    height: 10rem;
    margin: 1rem 0;
    border-radius: 5px;
    filter: sepia(0.8);
  `;

  return (
    <>
      {biotitle && <Titles>{biotitle}</Titles>}
      {isMobile ? (
        <ContainerBioResponsive>
          {bioparagraph && (
            <ParagraphsNavigation>{bioparagraph}</ParagraphsNavigation>
          )}
          {bioimg && <ImgContainer img={bioimg}></ImgContainer>}
        </ContainerBioResponsive>
      ) : (
        <ContainerBio>
          {bioparagraph && (
            <ParagraphsNavigation>{bioparagraph}</ParagraphsNavigation>
          )}
          {bioimg && <ImgContainer img={bioimg}></ImgContainer>}
        </ContainerBio>
      )}
    </>
  );
}

AOS.init();


const BioNavigation = () => {
  const MainContainer = styled.div`
    margin:${isMobile ? " 0 1rem;" : " 0 10rem;"}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  return (
    <MainContent
      data-aos="fade-in"
      data-aos-offset="200"
      data-aos-delay="500"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <>
        <MainContainer>
          {BioArray.slice(1).map((e, Bio) => (
            <Item
              key={Bio}
              bioparagraph={e.BioParagraph}
              isreverseimg={e.isReverseImg}
              bioimg={e.BioImg}
              biotitle={e.BioTitle}
            />
          ))}
        </MainContainer>
      </>

      <ContainerRedesFootParagraph>
        <Redes />
      </ContainerRedesFootParagraph>
    </MainContent>
  );
};

export default BioNavigation;
