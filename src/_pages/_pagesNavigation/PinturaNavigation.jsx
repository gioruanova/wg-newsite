import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { PinturaData } from "../../_components/Messages";
import {
  MainContent,
  Titles,
  ParagraphsNavigation,
  ContainerRedesFootParagraph,
  Separator,ExternalLinks
} from "../../_components/Styles";
import PinturaGrid from "../../_components/_helpers/PinturaGrid";

// ------------------------------------------------------------

const ContainerButtons = styled.div`
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  justify-content: center;
  align-items: center;
`;

const ContactButtons = styled.button`
  width: auto;
  height: auto;
  margin: 1rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.backgroundButtons};
  font-family: ${(props) => props.theme.generalTextFont};
  color: ${(props) => props.theme.textButtonsColor};
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

const Paragraphs = styled.p`
color: ${(props) => props.theme.generalTextColor};
font-size: ${isMobile ? "0.8rem;" : "1rem;"}
font-family: ${(props) => props.theme.generalTextFont};
font-weight: 400;  
transition:1s;
text-align:justify;
`;

function Item({
  paragraph,
  img,
  isReverseImg,
  titles,
  buyoption,
  urlbuy,
  sellername,
}) {
  const ContainerBio = styled.div`
    transition: 1s;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
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
    width: 19rem;
    height: 19rem;
    margin: 1rem;
    border-radius: 5px;
  `;

  return (
    <>
      <Titles>{titles}</Titles>
      {isMobile ? (
        <ContainerBioResponsive>
          <> {img && <ImgContainer img={img}></ImgContainer>}</>
          <> {paragraph && <Paragraphs>{paragraph}</Paragraphs>}</>
          {buyoption && (
            <ExternalLinks
              href={urlbuy}
              target="_blank"
              rel="noreferrer"
              title={sellername}
            >
              <ContainerButtons>
                <Paragraphs>Obras dispnibles en</Paragraphs>
                <ContactButtons>Buenos Aires Fine Arts</ContactButtons>
              </ContainerButtons>
            </ExternalLinks>
          )}
        </ContainerBioResponsive>
      ) : (
        <ContainerBio>
          <>
            <> {img && <ImgContainer img={img}></ImgContainer>}</>
            {paragraph && (
              <ParagraphsNavigation>{paragraph}</ParagraphsNavigation>
            )}
          </>
          {buyoption && (
            <ExternalLinks
              href={urlbuy}
              target="_blank"
              rel="noreferrer"
              title={sellername}
            >
              <ContainerButtons>
                <Paragraphs>Obras dispnibles en</Paragraphs>
                <ContactButtons>Buenos Aires Fine Arts</ContactButtons>
              </ContainerButtons>
            </ExternalLinks>
          )}
        </ContainerBio>
      )}
    </>
  );
}

const PinturaNavigation = () => {
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
          {PinturaData.map((e, TattoDescp) => (
            <Item
              key={TattoDescp}
              paragraph={e.Paragraph}
              img={e.Img}
              titles={e.Titles}
              buyoption={e.ExternalShop}
              urlbuy={e.UrlBuy}
              sellername={e.SellerName}
            />
          ))}
        </MainContainer>
      </>
      
      <ContainerRedesFootParagraph>
        <Separator />
        <Titles>Trabajos</Titles>
        <PinturaGrid />
      </ContainerRedesFootParagraph>
    </MainContent>
  );
};

export default PinturaNavigation;
