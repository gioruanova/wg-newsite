import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

import { BioArray } from "../../_components/DataArray";

import {
  MainContent,
  ParagraphsNavigation,
  ContainerRedesFootParagraph,
} from "../../_components/Styles";
import Redes from "../../_components/Redes";
// ------------------------------------------------------------

export const Titles = styled.h1`
  color: white;
  font-size: ${isMobile ? "1.5rem" : "1.8rem"};
  font-family: ${(props) => props.theme.generalFont};
  background-color: ${(props) => props.theme.mainTitlesColor};
  text-transform: uppercase;
  transition: 1s;
  width: 100%;
  border-radius: 0.2rem;
  margin: 0.5rem 0;
  padding: 0.5rem;
`;

function Item({ bioparagraph, bioimg, isreverseimg, biotitle }) {
  const ContainerBio = styled.div`
    display: flex;
    align-items: center;
    ${isreverseimg ? "flex-direction: row-reverse;" : "flex-direction:row;"}
    justify-content:center;
    width: 100%;
  `;

  const ContainerBioResponsive = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
  `;

  const ImgContainer = styled.div`
    background-image: url(${bioimg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-color: none;
    width: 100%;
    height: 10rem;
    margin: 1rem;
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

const BioNavigation = () => {
  const MainContainer = styled.div`
    margin:${isMobile ? " 0 1rem;" : " 0 10rem;"}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  return (
    <MainContent className="animate__animated animate__fadeIn animate__delay-1s animate__slower">
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
