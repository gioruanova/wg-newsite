import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

import { MusicArray } from "../../_components/DataArray";
import { MainContent } from "../../_components/Styles";
import Redes from "../../_components/Redes";
// import BandMemberArray from "../../_components/_helpers/BandMemberArray";
import BotonClasesLink from "../../_components/BotonClasesLink";
import MultimediaContent from "../../_components/_helpers/MultimediaContent";

// ------------------------------------------------------------

const ContainerRedesFootParagraph = styled.div`
  margin: 2rem 0;
`;

const Titles = styled.h1`
  color: white;
  transition: 1s;
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

const Paragraphs = styled.p`
color: ${(props) => props.theme.generalTextColor};
font-size: ${isMobile ? "0.8rem;" : "1rem;"}
font-family: ${(props) => props.theme.generalFont};
font-weight: 400;  
transition:1s;
text-align:justify;

`;

function MainMusicBio({
  paragraph,
  img,
  isReverseImg,
  titles,
  musicsubtitle1,
  musicsubtitle2,
}) {
  const ContainerBio = styled.div`
    transition: 1s;
    display: flex;
    align-items: center;
    ${isReverseImg ? "flex-direction: row-reverse;" : "flex-direction:row;"}
    justify-content:center;
    width: 100%;
    gap: 1rem;
  `;

  const ContainerBioResponsive = styled.div`
    transition: 1s;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 1rem;
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
    margin: 1rem 0;
    border-radius: 5px;
    filter: sepia(0.7);
  `;

  return (
    <>
      {titles && <Titles>{titles}</Titles>}
      {isMobile ? (
        <ContainerBioResponsive>
          {paragraph && <Paragraphs>{paragraph}</Paragraphs>}
          {img && <ImgContainer img={img}></ImgContainer>}
        </ContainerBioResponsive>
      ) : (
        <ContainerBio>
          {paragraph && <Paragraphs>{paragraph}</Paragraphs>}
          {img && <ImgContainer img={img}></ImgContainer>}
        </ContainerBio>
      )}
      {musicsubtitle1 && <Titles>{musicsubtitle1}</Titles>}
      {musicsubtitle2 && <Titles>{musicsubtitle2}</Titles>}
    </>
  );
}

const MusicaNavigation = () => {
  const MainContainer = styled.div`
    margin:${isMobile ? " 0 1rem;" : " 0 10rem;"}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  `;

  const ContainerMemberCards = styled.div`
    display: flex;
    flex-direction: ${isMobile ? "column" : "row"};
    justify-content: center;
  `;

  return (
    <MainContent className="animate__animated animate__fadeIn animate__delay-1s animate__slower">
      <>
        <MainContainer>
          {MusicArray.map((e, MusicParagraph) => (
            <MainMusicBio
              key={MusicParagraph}
              paragraph={e.MusicParagraph}
              isReverseImg={e.isReverseImg}
              img={e.MusicImg}
              titles={e.Titles}
            />
          ))}
        </MainContainer>
      </>
      <BotonClasesLink />
      <ContainerRedesFootParagraph>
        <Redes />
      </ContainerRedesFootParagraph>

      {MusicArray.map((e, ArtGalleryParagraph) => (
        <MainMusicBio
          key={ArtGalleryParagraph}
          musicsubtitle1={e.MusicSubtitle1}
        />
      ))}
      <MultimediaContent />

      {MusicArray.map((e, ArtGalleryParagraph) => (
        <MainMusicBio
          key={ArtGalleryParagraph}
          musicsubtitle2={e.MusicSubtitle2}
        />
      ))}
      <ContainerMemberCards>
        {/* <BandMemberArray /> */}
      </ContainerMemberCards>
    </MainContent>
  );
};

export default MusicaNavigation;
