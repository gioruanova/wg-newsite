import React from "react";
import Icons from "./Icons";
import styled from "styled-components";

const ContainerBioRedes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
`;
const Redes = () => {
  return (
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
  );
};

export default Redes;
