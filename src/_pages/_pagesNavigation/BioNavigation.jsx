import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { MainContent, Titles } from "../../_components/Styles";
import { BioData } from "../../_components/Messages";
import BioImg from "../../_images/BioImg.jpeg";
import BioImg2 from "../../_images/BioImg2.jpeg";
import MusicSection from "../../_images/MusicSection.jpg";
import Icons from "../../_components/Icons";

const ImgContainer = styled.img`
  border-radius: 10px;
  width: ${isMobile ? "90%" : "15%"};
  height: ${isMobile ? "90%" : "15%"};
  margin: 1rem;
`;

const ContainerBio = styled.div`
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  align-items: center;
`;

const ContainerBioRedes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

export const Paragraphs = styled.p`
  color: ${(props) => props.theme.generalTextColor};
  font-size: ${isMobile ? "0.8rem;" : "1rem;"}
  font-family: ${(props) => props.theme.generalFont};
  margin: 0;
  font-weight: 400;
  margin: 0.8rem 0 0.8rem 0;
  transition: 1s;
  text-align:justify;
`;

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

const BioNavigation = () => {
  return (
    <MainContent className="animate__animated animate__fadeIn animate__slower">
      <Titles>Walter Gandini</Titles>
      <ContainerBio>
        <ImgContainer src={BioImg} />
        <div>
          {BioData.slice(1, 3).map((e, Bio) => (
            <Item key={Bio} Paragraph={e.Paragraph} />
          ))}
        </div>
      </ContainerBio>
      <ContainerBio>
        <div>
          {BioData.slice(3, 5).map((e, Bio) => (
            <Item key={Bio} Paragraph={e.Paragraph} />
          ))}
        </div>
        <ImgContainer src={BioImg2} />
      </ContainerBio>

      <>
        <div>
          {BioData.slice(5, 6).map((e, Bio) => (
            <Item key={Bio} Paragraph={e.Paragraph} />
          ))}
        </div>
        <ImgContainer src={MusicSection} />
      </>
      <ContainerBio>
        <div>
          {BioData.slice(6, 7).map((e, Bio) => (
            <Item key={Bio} Paragraph={e.Paragraph} />
          ))}
        </div>
      </ContainerBio>
      <ContainerBioRedes>
        {" "}
        <a
          href="https://www.patreon.com/bePatron?u=38804295"
          rel="noreferrer"
          target="_blank"
          title="Patreon"
          aria-label="Patreon"
        >
          <Icons name="patreon" />
        </a>
        <a
          href="https://open.spotify.com/artist/6AxS0nhTn6xwtTIBjUkeyh?si=msTwOLnETJOyEof6nsaxrg&nd=1"
          rel="noreferrer"
          target="_blank"
          title="Spotify"
          aria-label="Spotify"
        >
          <Icons name="spotify" />
        </a>
        <a
          href="https://www.instagram.com/waltergandini/"
          rel="noreferrer"
          target="_blank"
          title="Instagram"
          aria-label="Instagram"
        >
          <Icons name="instagram" />
        </a>
        <a
          href="https://www.youtube.com/c/WalterGandini"
          rel="noreferrer"
          target="_blank"
          title="YouTube"
          aria-label="YouTube"
        >
          <Icons name="youtube" />
        </a>
        <a
          href="https://www.facebook.com/walter.gandini"
          rel="noreferrer"
          target="_blank"
          title="Facebook"
          aria-label="Facebook"
        >
          <Icons name="facebook" />
        </a>
      </ContainerBioRedes>
    </MainContent>
  );
};

export default BioNavigation;
