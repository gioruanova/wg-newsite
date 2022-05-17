import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

// ------------------------------------------------------------

export const ParagraphsCards = styled.p`
color: ${(props) => props.theme.generalTextColor};
font-size: ${isMobile ? "0.8rem;" : "1rem;"}
font-family: ${(props) => props.theme.generalTextFont};
font-weight: 400;  
margin: 0 1rem 1rem 1rem;
text-align:justify;
transition: 1s;
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
  margin: 3rem 0;
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

const MultimediaContent = () => {
  return (
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
  );
};

export default MultimediaContent;
