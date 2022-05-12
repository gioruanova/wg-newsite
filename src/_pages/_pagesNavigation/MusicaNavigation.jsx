import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { MusicData } from "../../_components/Messages";
import {
  MainContent,
  ContainerRedesFootParagraph,
  InternalLinks,
} from "../../_components/Styles";
import Redes from "../../_components/Redes";

// ------------------------------------------------------------

export const Titles = styled.h1`
  color: white;
  font-size: ${(props) => props.theme.sizeMaintTitles};
  font-family: ${(props) => props.theme.generalFont};
  background-color: ${(props) => props.theme.mainTitlesColor};
  text-transform: uppercase;
  transition: 1s;
  width: 100%;
  border-radius: 0.2rem;
`;

const ContainerButtons = styled.div`
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  p {
    text-align: center;
  }
`;

const ContactButtons = styled.button`
  width: auto;
  height: auto;
  margin: 0 1rem 1rem 1rem;
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

const ExternalLinks = styled.a`
  color: ${(props) => props.theme.textButtonsColor};
  text-decoration: none;
  font-family: ${(props) => props.theme.generalTextFont};
`;

export const ParagraphsCards = styled.p`
color: ${(props) => props.theme.generalTextColor};
font-size: ${isMobile ? "0.8rem;" : "1rem;"}
font-family: ${(props) => props.theme.generalTextFont};
font-weight: 400;  
margin: 0 1rem 1rem 1rem;
transition:1s;
text-align:justify;
`;

export const Paragraphs = styled.p`
color: ${(props) => props.theme.generalTextColor};
font-size: ${isMobile ? "0.8rem;" : "1rem;"}
font-family: ${(props) => props.theme.generalFont};
font-weight: 400;  
transition:1s;
text-align:justify;
`;

const ContainerMultimedia = styled.div`
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
`;
const MultimediaSpotify = styled.div`
  flex-direction: column;
  display: flex;
  gap: ${isMobile ? "" : "5rem"};
`;

const SpotifyFrame = styled.iframe`
  border-radius: 1rem 0 1rem 0;
  border: none;
  margin: 1rem 1rem;
  transition: 0.5s;
  width: 15rem;
  &:hover {
    box-shadow: rgb(57 57 57 / 49%) 13px 12px 9px,
      rgb(48 48 48 / 93%) 2px 2px 9px;
    cursor: pointer;
  }
`;
const MultimediaYouTube = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const YoutubeFrame = styled.iframe`
  margin-top: 0 !important;
  border: none;
  border-radius: 1rem 0 1rem 0;
  margin: 1rem;
  transition: 0.5s;

  &:hover {
    box-shadow: rgb(57 57 57 / 49%) 13px 12px 9px,
      rgb(48 48 48 / 93%) 2px 2px 9px;
  }
`;

function MainMusicBio({ paragraph, img, isReverseImg, titles }) {
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
    </>
  );
}

function BandMembers({ name, paragraphmember, memberimg, instagram, hash }) {
  const MemberCards = styled.div`
    display: flex;
    flex-direction: column;
    width: ${isMobile ? "auto" : "20rem"};
    border: 2px solid ${(props) => props.theme.colorLines};
    border-radius: 0.5rem;
    margin: 1rem;
    height: 100%;
    filter: grayscale(1);
    transition: 400ms;
    h2 {
      transition: 40ms;
      visibility: hidden;
    }
    &:hover {
      box-shadow: rgb(57 57 57 / 49%) 13px 12px 9px,
        rgb(48 48 48 / 93%) 2px 2px 9px;
      filter: none;
      h2 {
        visibility: inherit;
      }
    }
  `;

  const ImgContainer = styled.div`
    transition: 400ms;
    background-image: url(${memberimg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-color: none;
    width: 100%;
    height: 15rem;
    border-radius: 5px 5px 0 0;
  `;

  const HashContainer = styled.h2`
  transition: 400ms;
    margin: 0;
    color: ${(props) => props.theme.textButtonsColor};
    font-size: ${isMobile ? "0.8rem;" : "1rem;"}
    font-family: ${(props) => props.theme.generalFont};
    text-align: initial;
    padding-left: 0.5rem;
    background-color: ${(props) => props.theme.colorLines};
    
  `;

  return (
    <>
      <>
        <ExternalLinks
          href={instagram}
          rel="noreferrer"
          target="_blank"
          title="Instagram"
          aria-label="Instagram"
        >
          <MemberCards>
            {ImgContainer && (
              <ImgContainer img={memberimg}>
                <HashContainer>{hash}</HashContainer>
              </ImgContainer>
            )}
            {name && <Titles>{name}</Titles>}
            {paragraphmember && (
              <ParagraphsCards>{paragraphmember}</ParagraphsCards>
            )}
          </MemberCards>
        </ExternalLinks>
      </>
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
    <MainContent className="animate__animated animate__fadeIn animate__slower">
      <>
        <MainContainer>
          {MusicData.slice(1).map((e, MusicParagraph) => (
            <MainMusicBio
              key={MusicParagraph}
              paragraph={e.Paragraph}
              isReverseImg={e.isReverseImg}
              img={e.Img}
              titles={e.Titles}
            />
          ))}
        </MainContainer>
      </>
      <ContainerButtons>
        <InternalLinks to="/contactnavigation">
          <div>
            {" "}
            <Paragraphs>
              Comenza tus clases y obtene importantes beneficios con el código
              {"   "}
              <b>JediBluesMaster</b>
            </Paragraphs>
          </div>
          <ContactButtons>Reserva tu clase</ContactButtons>
        </InternalLinks>
      </ContainerButtons>
      <ContainerRedesFootParagraph>
        <Redes />
      </ContainerRedesFootParagraph>

      <Titles>Trabajos</Titles>
      <ContainerMultimedia>
        <MultimediaYouTube>
          <div>
            {" "}
            <YoutubeFrame
              width="240"
              height="150"
              src="https://www.youtube.com/embed/jSslwVYbfSE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="1"
            />
          </div>
          <div>
            <YoutubeFrame
              width="240"
              height="150"
              src="https://www.youtube.com/embed/PGiMwP9ZMIs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="1"
            />
          </div>
          <div>
            {" "}
            <YoutubeFrame
              width="240"
              height="150"
              src="https://www.youtube.com/embed/videoseries?list=PLH7ws52_WwFfXTqrXvKEfz0H_2RdtghDw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="1"
            />
          </div>
        </MultimediaYouTube>

        <MultimediaSpotify>
          <div>
            {" "}
            <SpotifyFrame
              src="https://open.spotify.com/embed/album/51ph64ekAVHPHXSoEzikNq"
              width="300"
              height="80"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="Lucky"
            />
          </div>
          <div>
            {" "}
            <SpotifyFrame
              src="https://open.spotify.com/embed/album/5qfTNvCIzd7a0fGo7Cnhrr"
              width="300"
              height="80"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="Phonke"
            />
          </div>
          <div>
            <SpotifyFrame
              id="Clases"
              src="https://open.spotify.com/embed/album/6g7cHeNcuaDCXE2bZI8NsH"
              width="300"
              height="80"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="Princess Lula"
            />
          </div>
        </MultimediaSpotify>
      </ContainerMultimedia>

      <Titles>Musicos principales</Titles>
      <ContainerMemberCards>
        {MusicData.slice(6).map((e, Name) => (
          <BandMembers
            key={Name}
            paragraphmember={e.ParagraphMember}
            name={e.Name}
            memberimg={e.MemberImg}
            instagram={e.Instagram}
            hash={e.Hash}
          />
        ))}
      </ContainerMemberCards>
    </MainContent>
  );
};

export default MusicaNavigation;
