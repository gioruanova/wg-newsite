import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

import { GalleryArray } from "../../_components/DataArray";
import ArtGrid from "../../_components/_helpers/ArtGrid";

import { MainContent, StudioTitle } from "../../_components/Styles";

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

const ExternalLinks = styled.a`
  color: ${(props) => props.theme.navigationLinksColor};
  font-size: 0.8rem;
  font-family: ${(props) => props.theme.generalFont};
  font-weight: 300;
  text-decoration: none;
  font-weight: 600;
  transition: 1s;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    color: ${(props) => props.theme.hooverLinks};
  }
`;

const ContainerButtons = styled.div`
  display: flex;

  flex-direction: ${isMobile ? "column" : "row"};
  justify-content: center;
  align-items: center;
  margin: ${isMobile ? "2rem 0 4rem 0" : "1rem 0"};
  p {
    text-align: center;
    margin: ${isMobile ? "" : "2rem 1rem 2rem 0;"};
  }
`;

const ContactButtons = styled.button`
  width: auto;
  height: auto;
    padding: 0.5rem 0.8rem;
  background-color: ${(props) => props.theme.backgroundButtons};
  font-family: ${(props) => props.theme.generalTextFont};
  color: ${(props) => props.theme.textButtonsColor};
  font-size: ${isMobile ? "0.8rem;" : "1rem;"}
  border: none;
  border-radius: 0.4rem;
  text-transform: uppercase;
  transition: 400ms;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colorLines};
  }
  &:active {
    background-color: white;
  }
`;

function Item({
  studiotitle,
  artgallerytitle,
  artgalleryimg,
  artgalleryparagraph,
  gallerysubtitle,
}) {
  const ContainerBio = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    div {
      width: 50%;
    }
    gap: 2rem;
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
    background-image: url(${artgalleryimg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-color: none;
    width: 100%;
    height: 25rem;
    border-radius: 5px;
    filter: sepia(0.8);
    margin: 1rem 0;
  `;

  return (
    <>
      {artgallerytitle && <Titles>{artgallerytitle}</Titles>}
      {isMobile ? (
        <ContainerBioResponsive>
          {studiotitle && <StudioTitle>{studiotitle}</StudioTitle>}
          {artgalleryparagraph && (
            <ParagraphsNavigation>{artgalleryparagraph}</ParagraphsNavigation>
          )}
          {artgalleryimg && <ImgContainer img={artgalleryimg}></ImgContainer>}
        </ContainerBioResponsive>
      ) : (
        <ContainerBio>
          <div>
            {" "}
            {studiotitle && <StudioTitle>{studiotitle}</StudioTitle>}
            {artgalleryparagraph && (
              <ParagraphsNavigation>{artgalleryparagraph}</ParagraphsNavigation>
            )}
          </div>
          {artgalleryimg && <ImgContainer img={artgalleryimg}></ImgContainer>}
        </ContainerBio>
      )}
      {gallerysubtitle && <Titles>{gallerysubtitle}</Titles>}
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
    margin-bottom: 2rem;
     
  `;

  return (
    <MainContent className="animate__animated animate__fadeIn animate__delay-1s animate__slower">
      <>
        <MainContainer>
          {GalleryArray.slice(0, 3).map((e, ArtGalleryParagraph) => (
            <Item
              key={ArtGalleryParagraph}
              artgalleryparagraph={e.ArtGalleryParagraph}
              artgalleryimg={e.ImgMain}
              artgallerytitle={e.GAlleryTitle}
              studiotitle={e.StudioTitle}
              sponsorname={e.SponsorName}
              sponsorimg={e.SponsorImg}
              sponsorurl={e.SponsorUrl}
            />
          ))}

          <ExternalLinks
            href="http://www.buenosairesfinearts.com/"
            target="_blank"
            rel="noreferrer"
            title="Buenos Aires Fine Arts"
            aria-label="Buenos Aires Fine Arts"
          >
            <div>
              <ContainerButtons>
                <ParagraphsNavigation>
                  Obras disponibles en Galeria
                </ParagraphsNavigation>

                <ContactButtons> Buenos Aires Fine Artes</ContactButtons>
              </ContainerButtons>
            </div>
          </ExternalLinks>
          {GalleryArray.slice(0, 3).map((e, ArtGalleryParagraph) => (
            <Item
              key={ArtGalleryParagraph}
              gallerysubtitle={e.GallerySubTitle}
            />
          ))}
        </MainContainer>
        <ArtGrid />
      </>
    </MainContent>
  );
};

export default BioNavigation;
