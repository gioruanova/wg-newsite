import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

import AOS from "aos";
import "aos/dist/aos.css";

import { InternalLinks } from "../_components/Styles";

import { ArtArray } from "../_components/DataArray";

const Container = styled.div`
  display: flex;
  flex-direction: ${isMobile ? "column" : "row-reverse"};
  gap: 1rem;
  p {
    width: ${isMobile ? "100%" : "85%"};
  }
  margin: 2rem 0 2rem 0;
`;

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 400ms;

  &:hover {
    cursor: pointer;

    div {
      filter: none;
      box-shadow: rgb(57 57 57 / 49%) 13px 12px 9px,
        rgb(48 48 48 / 93%) 2px 2px 9px;
    }
    h1 {
      background-color: ${(props) => props.theme.generalBackground};
      color: ${(props) => props.theme.navigationLinksColor};
      ${(props) => props.theme.hoverBox};
    }
  }
`;

const Titles = styled.h1`
  color: white;
  font-size: ${isMobile ? "1.5rem" : "1.8rem"};
  font-family: ${(props) => props.theme.generalFont};
  background-color: ${(props) => props.theme.mainTitlesColor};
  text-transform: uppercase;
  transition: 400ms;
  width: ${isMobile ? "100%" : "85%"};
  border-radius: 0.2rem;
  margin: 0.5rem 0;
  padding: 0.5rem;
`;

const Paragraphs = styled.p`
  color: ${(props) => props.theme.generalTextColor};
  font-size: ${isMobile ? "0.8rem;" : "1rem;"}
  font-family: ${(props) => props.theme.generalTextFont};
  margin: 0 0 2rem 0;
  font-weight: 400;
    transition: 400ms;
    line-height: 1.5rem;
    word-break: break-word;
    word-spacing: 0.1rem;
    text-align:justify;
`;

AOS.init();
function Item({ arttitle, artimg, artparagraph, urlnav, navigation }) {
  const ImgContainer = styled.div`
    transition: 400ms;
    background-image: url(${artimg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: ${isMobile ? "100%" : "85%"};
    height: 10rem;
    border-radius: 0.2rem;
    overflow: hidden;
    filter: sepia(0.9);
    margin: 0.5rem 0;
  `;

  return (
    <InternalLinks to={urlnav}>
      <ContainerCard>
        <Titles>{arttitle}</Titles>
        <ImgContainer img={artimg} />
        <Paragraphs>{artparagraph}</Paragraphs>
        {navigation}
      </ContainerCard>
    </InternalLinks>
  );
}

const ArtSection = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <>
        <Container>
          {ArtArray.map((e, Bio) => (
            <Item
              key={Bio}
              arttitle={e.ArtTitle}
              artimg={e.ArtImg}
              artparagraph={e.ArtParagraph}
              urlnav={e.UrlNav}
              navigation={e.Navigation}
            />
          ))}
        </Container>
      </>
    </div>
  );
};

export default ArtSection;

//------------------------------------------------------------------------------------------------------------------------------------------------
