import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { BioData } from "../../_components/Messages";
import {
  MainContent,
  Titles,
  ParagraphsNavigation,
  ContainerRedesFootParagraph,
} from "../../_components/Styles";
import Redes from "../../_components/Redes";
// ------------------------------------------------------------

function Item({ paragraph, img, isReverseImg, titles }) {
  const ContainerBio = styled.div`
    transition: 1s;
    display: flex;
    align-items: center;
    ${isReverseImg ? "flex-direction: row-reverse;" : "flex-direction:row;"}
    justify-content:center;
    width: 100%;
  `;

  const ContainerBioResponsive = styled.div`
    transition: 1s;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
  `;

  const ImgContainer = styled.div`
    transition: 1s;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-color: none;
    width: 100%;
    height: 10rem;
    margin: 1rem;
    border-radius: 5px;
    filter: grayscale(1);
  `;

  return (
    <>
      <Titles>{titles}</Titles>
      {isMobile ? (
        <ContainerBioResponsive>
          {paragraph && (
            <ParagraphsNavigation>{paragraph}</ParagraphsNavigation>
          )}
          {img && <ImgContainer img={img}></ImgContainer>}
        </ContainerBioResponsive>
      ) : (
        <ContainerBio>
          {paragraph && (
            <ParagraphsNavigation>{paragraph}</ParagraphsNavigation>
          )}
          {img && <ImgContainer img={img}></ImgContainer>}
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
    <MainContent className="animate__animated animate__fadeIn animate__slower">
      <>
        <MainContainer>
          {BioData.slice(1).map((e, Bio, isReverseImg, Img, Titles) => (
            <Item
              key={Bio}
              paragraph={e.Paragraph}
              isReverseImg={e.isReverseImg}
              img={e.Img}
              titles={e.Titles}
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
