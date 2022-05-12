import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { GalleryArray } from "../../_components/DataArray";
import {
  MainContent,
  Titles,
  ContainerRedesFootParagraph,
  Separator,
} from "../../_components/Styles";

import ArtGrid from "../../_components/_helpers/ArtGrid";

// ------------------------------------------------------------

const Paragraphs = styled.p`
color: ${(props) => props.theme.generalTextColor};
font-size: ${isMobile ? "0.8rem;" : "1rem;"}
font-family: ${(props) => props.theme.generalTextFont};
font-weight: 400;  
transition:1s;
text-align:justify;
`;

function Item({
  artgalleryparagraph,
  artgalleryimg,

  artgallerytitles,
}) {
  const ImgContainer = styled.div`
    transition: 1s;
    background-image: url(${artgalleryimg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-color: none;
    width: 100%;
    height: 19rem;
    margin: 1rem;
    border-radius: 5px;
  `;

  return (
    <>
      <Titles>{artgallerytitles}</Titles>
      <Paragraphs>{artgalleryparagraph}</Paragraphs>
      <ImgContainer src={artgalleryimg} />
    </>
  );
}

const ArtNavigation = () => {
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
          {GalleryArray.slice(0, 1).map((e, TattoDescp) => (
            <Item
              key={TattoDescp}
              artgallerytitles={e.GAlleryTitle}
              artgalleryparagraph={e.ArtGalleryParagraph}
              artgalleryimg={e.ImgMain}
            />
          ))}
        </MainContainer>
      </>

      <ContainerRedesFootParagraph>
        <Separator />

        <ArtGrid />
      </ContainerRedesFootParagraph>
    </MainContent>
  );
};

export default ArtNavigation;
