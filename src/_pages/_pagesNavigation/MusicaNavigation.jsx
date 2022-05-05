import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import {
  MainContent,
  Titles,
  NavLinksTop,
  ExternalLinks,
  Separator,
} from "../../_components/Styles";
import { MusicData } from "../../_components/Messages";
import MusicSection from "../../_images/MusicSection.jpg";

const PictureContainer = styled.img`
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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;
const Buttons = styled.button`
  margin: 1rem;
  color: ${(props) => props.theme.textButtonsColor};
  background-color: ${(props) => props.theme.backgroundButtons};
  font-family: ${(props) => props.theme.generalFont};
  text-transform: uppercase;
  border: none;
  width: 10rem;
  height: 2rem;
  transition: 400ms;
  &:hover {
    cursor: pointer;
    border: 3px inset #a58959;
    height: 2rem;
  }
`;

const Paragraphs = styled.p`
  color: ${(props) => props.theme.generalTextColor};
  font-size: ${isMobile ? "0.8rem;" : "1rem;"}
  font-family: ${(props) => props.theme.generalFont};
  margin: 0;
  font-weight: 400;
  margin: 0.5rem 0 0.5rem 0;
  transition: 1s;
  text-align:justify;
`;

export const TitlesMusicos = styled.h1`
  color: ${(props) => props.theme.mainTitlesColor};
  font-size: 1rem;
  font-family: ${(props) => props.theme.generalFont};
  margin: 0.5rem 0 0 0;
  text-transform: uppercase;
  transition: 1s;
`;

const ContainerMusicosCards = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  gap: 2rem;
  justify-content: center;
`;

const MediaContaienr = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  gap: 2rem;
  justify-content: space-evenly;
  align-items: center;
`;

const SpotifyFrameMediaContaienr = styled.div`
  display: flex;
  flex-direction: column;
`;

const YoutubeFrameMediaContaienr = styled(SpotifyFrameMediaContaienr)`
  display: flex;
  flex-direction: row;
  flex-direction: ${isMobile ? "column" : "row"};
`;
const MusicosCards = styled.div`
  width: 98%;
  gap: 2rem;
  border: 2px solid ${(props) => props.theme.colorLines};
  border-radius: 5px;
`;

const MusicosCardsPicture = styled.img`
  width: 100%;
  border-radius: 5px 5px 0 0;
`;

const MusicosCardsText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

const YoutubePlayer = styled.iframe`
  margin-top: 1rem;
  border-radius: 1rem 0 1rem 0;
  margin: 1rem;
  transition: 0.5s;
  border: none;
`;

const Spoty = styled.iframe`
  border-radius: 1rem 0 1rem 0;
  margin: 1rem 1rem;
  transition: 0.5s;
  width: 15rem;
  border: none;
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
    <MainContent className="animate__animated animate__fadeInLeft animate__slow">
      <Titles>Walter Gandini</Titles>
      <ContainerBio>
        <PictureContainer src={MusicSection} />
        <div>
          {MusicData.slice(0, 1).map((e, Bio) => (
            <Item key={Bio} Paragraph={e.Paragraph} />
          ))}
        </div>
      </ContainerBio>
      <ContainerBio>
        <div>
          {MusicData.slice(1, 3).map((e, Bio) => (
            <Item key={Bio} Paragraph={e.Paragraph} />
          ))}
        </div>
        <PictureContainer src={MusicSection} />
      </ContainerBio>

      <>
        <div>
          {MusicData.slice(3, 4).map((e, Bio) => (
            <Item key={Bio} Paragraph={e.Paragraph} />
          ))}
        </div>
        <PictureContainer src={MusicSection} />
      </>
      <ContainerBio>
        <div>
          {MusicData.slice(4, 5).map((e, Bio) => (
            <Item key={Bio} Paragraph={e.Paragraph} />
          ))}
        </div>
      </ContainerBio>

      {/* ------------BOTONES------------ */}
      <ButtonContainer>
        <NavLinksTop
          to="/contactnavigation"
          title="Contacate y reserva tu clase"
          aria-label="Contacate y reserva tu clase"
        >
          <Buttons>Reservar clase</Buttons>
        </NavLinksTop>

        <ExternalLinks
          href="https://www.youtube.com/c/WalterGandini"
          rel="noreferrer"
          target="_blank"
          title="YouTube Channel"
          aria-label="YouTube Channel"
        >
          <Buttons>Youtube</Buttons>
        </ExternalLinks>

        <ExternalLinks
          href="https://open.spotify.com/artist/6AxS0nhTn6xwtTIBjUkeyh?si=msTwOLnETJOyEof6nsaxrg&nd=1"
          rel="noreferrer"
          target="_blank"
          title="Spotify"
          aria-label="Spotify"
        >
          <Buttons>Spotify</Buttons>
        </ExternalLinks>
      </ButtonContainer>
      {/* ------------BOTONES------------ */}
      <Separator />

      <MediaContaienr>
        <SpotifyFrameMediaContaienr>
          <Titles>Trabajos</Titles>
          <Spoty
            src="https://open.spotify.com/embed/album/51ph64ekAVHPHXSoEzikNq"
            width="300"
            height="80"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title="Lucky"
          ></Spoty>

          <Spoty
            src="https://open.spotify.com/embed/album/5qfTNvCIzd7a0fGo7Cnhrr"
            width="300"
            height="80"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title="Phonke"
          ></Spoty>

          <Spoty
            id="Clases"
            src="https://open.spotify.com/embed/album/6g7cHeNcuaDCXE2bZI8NsH"
            width="300"
            height="80"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title="Princess Lula"
          ></Spoty>
        </SpotifyFrameMediaContaienr>
        <YoutubeFrameMediaContaienr>
          <YoutubePlayer
            width="240"
            height="150"
            src="https://www.youtube.com/embed/PGiMwP9ZMIs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="1"
          ></YoutubePlayer>

          <YoutubePlayer
            width="240"
            height="150"
            src="https://www.youtube.com/embed/videoseries?list=PLH7ws52_WwFfXTqrXvKEfz0H_2RdtghDw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="1"
          ></YoutubePlayer>
        </YoutubeFrameMediaContaienr>
      </MediaContaienr>
      <Titles>Trabajan con Walter</Titles>
      <ContainerMusicosCards>
        <MusicosCards>
          <MusicosCardsPicture src={MusicSection} />
          <TitlesMusicos>Musico 1</TitlesMusicos>
          <MusicosCardsText>
            {" "}
            {MusicData.slice(5, 6).map((e, Bio) => (
              <Item key={Bio} Paragraph={e.Paragraph} />
            ))}
          </MusicosCardsText>
        </MusicosCards>
        <MusicosCards>
          <MusicosCardsPicture src={MusicSection} />
          <TitlesMusicos>Musico 2</TitlesMusicos>
          <MusicosCardsText>
            {" "}
            {MusicData.slice(6, 7).map((e, Bio) => (
              <Item key={Bio} Paragraph={e.Paragraph} />
            ))}
          </MusicosCardsText>
        </MusicosCards>
        <MusicosCards>
          <MusicosCardsPicture src={MusicSection} />
          <TitlesMusicos>Musico 3</TitlesMusicos>
          <MusicosCardsText>
            {" "}
            {MusicData.slice(7, 8).map((e, Bio) => (
              <Item key={Bio} Paragraph={e.Paragraph} />
            ))}
          </MusicosCardsText>
        </MusicosCards>
      </ContainerMusicosCards>
    </MainContent>
  );
};

export default BioNavigation;
