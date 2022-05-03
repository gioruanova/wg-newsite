import { isMobile } from "react-device-detect";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Icons from "../_components/Icons";

export const BackgroundComponent = styled.div`
  background-color: ${(props) => props.theme.generalBackground};
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  overflow-x: hidden;
  width: 100%;
  position: relative;
  transition: 1s;
  align-items: center;
  text-align: center;
  align-content: center;
  overflow-y: hidden;
  scroll-behavior: smooth;
`;

export const MainContent = styled.div`
  width: auto;
  transition: 1s;
  align-items: center;
  text-align: center;
  align-content: center;
  margin: ${isMobile ? "8rem 3rem 5rem 3rem;" : "10rem 20rem 7rem 20rem;"};
`;

export const MainContentHome = styled(MainContent)`
  margin: ${isMobile ? "0rem 3rem 0 3rem;" : "0 20rem 0rem 20rem;"};
`;

export const Content = styled.div`
  width: auto;
  transition: 1s;
  align-items: center;
  text-align: center;
  align-content: center;
  padding: ${isMobile ? "4rem 0 4rem 0;" : "5rem 0 4rem 0;"};
`;

export const Separator = styled.hr`
  height: 2px;
  background-color: ${(props) => props.theme.colorLines};
  border: none;
  transition: 1s;
`;

export const Titles = styled.h1`
  color: ${(props) => props.theme.mainTitlesColor};
  font-size: ${(props) => props.theme.sizeMaintTitles};
  font-family: ${(props) => props.theme.generalFont};
  margin: 0 0 2rem 0;
  text-transform: uppercase;
  transition: 1s;
`;

export const SubTitles = styled(Titles)`
  font-size: ${(props) => props.theme.sizeSubtitles};
  text-transform: none;
`;

export const Paragraphs = styled.p`
  color: ${(props) => props.theme.generalTextColor};
  font-size: ${isMobile ? "0.8rem;" : "1rem;"}
  font-family: ${(props) => props.theme.generalFont};
  margin: 0;
  font-weight: 400;
  margin: 0 0 2rem 0;
  transition: 1s;
`;

export const ExternalLinks = styled.a`
  color: ${(props) => props.theme.navigationLinksColor};
  font-size: 0.8rem;
  font-family: ${(props) => props.theme.generalFont};
  margin: 0;
  font-weight: 300;
  margin: 0 0 5rem 0;
  text-decoration: none;
  font-weight: 600;
  transition: 1s;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    color: ${(props) => props.theme.hooverLinks};
  }
`;

export const InternalLinks = styled(Link)`
  color: ${(props) => props.theme.navigationLinksColor};
  font-size: ${(props) => props.theme.sizeGeneralText};
  font-family: ${(props) => props.theme.generalFont};
  margin: 0;
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

export const StudioTitle = styled.h2`
  color: ${(props) => props.theme.tattooStudioTitleColor};
  font-size: ${isMobile ? "2.2rem" : "3rem"};
  font-family: ${(props) => props.theme.tattooStudioTitle};
  font-weight: 500;
  margin: 2rem 0;
  transition: 1s;
`;

export const NavLinksTop = styled(Link)`
  cursor: pointer;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.sizeNavigationLinks};
  color: ${(props) => props.theme.navigationLinksColor};
  margin: 0;
  padding: ${isMobile ? "0.5rem 0 " : "0 1rem"};
  align-items: end;
  transform: translateX(-0.75em);
  font-weight: bold;
  transition: 1s;
  &::before {
    content: ">";
    display: inline-block;
    width: 0.75em;

    opacity: 0;
    transition: opacity 1s;
  }
  &:hover {
    transform: none;
    color: ${(props) => props.theme.hooverLinks};
  }
  &:hover::before {
    opacity: 1;
  }
  text-decoration: none;
`;

export const NavLinksFooter = styled(NavLinksTop)`
  ${isMobile ? "" : "padding: 0 0 0 2rem;"}
  ${isMobile ? "text-align: center;" : "text-align: initial;"}
`;

// Incons}
const ContaininerRedes = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top:${isMobile ? " 15rem;" : "22rem;"}
  left: 0.2rem;
   border-radius: 15px;
   transition: 200ms;
  background-color: ${(props) => props.theme.backgroundIcons};
  border: 3px outset ${(props) => props.theme.strokeIcons};
  align-items: center;
  opacity: 50%;
  transition: 1s;
  &:hover {
    opacity: 100%;
  }
`;

const ContaininerRightPanel = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: ${isMobile ? " 30rem;" : "50rem;"}
  right: 0.4rem;
  z-index: 9999;
  border-radius: 15px;
  transition: 1s;
  background-color: ${(props) => props.theme.backgroundIcons};
  border: 3px outset ${(props) => props.theme.strokeIcons};
  align-items: center;
  opacity: 50%;
  &:hover {
    opacity: 100%;
  }
`;

export const Redescontainer = () => {
  return (
    <ContaininerRedes>
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
    </ContaininerRedes>
  );
};

export const RightPanelContainer = () => {
  return (
    <ContaininerRightPanel>
      <InternalLinks to="/">
        <Icons name="home" />
      </InternalLinks>
      <a href="#TopContent" rel="noreferrer">
        <Icons name="top" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5491157001186&text=Hola%20Walter,%20te%20contactaba%20para%20una%20consulta"
        rel="noreferrer"
        target="_blank"
        title="Pedi tu Turno"
        aria-label="Pedi tu Turno"
      >
        <Icons name="whatsapp" />
      </a>
    </ContaininerRightPanel>
  );
};

export const ContaininerTheme = styled.div`
  position: fixed;
  top: 2rem;
  right: 1.5rem;
  z-index: 9999;
`;
