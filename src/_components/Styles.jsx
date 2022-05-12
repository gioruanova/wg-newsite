import { isMobile } from "react-device-detect";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Icons from "../_components/Icons";

// -----------------LAYOUTS-----------------
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
  margin: ${isMobile ? "6rem 2rem 5rem 2rem;" : "10rem 20rem 7rem 20rem;"};
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
  padding: ${isMobile ? "4rem 0 4rem 0;" : "4rem 0 4rem 0;"};
`;

export const Separator = styled.hr`
  height: 2px;
  background-color: ${(props) => props.theme.colorLines};
  border: none;
  transition: 1s;
`;

// -----------------TITLES AND TEXT-----------------

export const Titles = styled.h1`
  color: ${(props) => props.theme.mainTitlesColor};
  font-size: ${(props) => props.theme.sizeMaintTitles};
  font-family: ${(props) => props.theme.generalFont};
  margin: ${isMobile ? "0 0 4rem 0;" : "0 0 2rem 0;"}
  text-transform: uppercase;
  transition: 1s;
`;

export const SubTitles = styled(Titles)`
  font-size: ${(props) => props.theme.sizeSubtitles};
  text-transform: none;
`;

export const StudioTitle = styled.h2`
  color: ${(props) => props.theme.tattooStudioTitleColor};
  font-size: ${isMobile ? "2.2rem" : "3rem"};
  font-family: ${(props) => props.theme.tattooStudioTitle};
  font-weight: 500;
  margin: 0 0 1rem 0;
  text-align: center;
  transition: 1s;
`;

export const Paragraphs = styled.p`
  color: ${(props) => props.theme.generalTextColor};
  font-size: ${isMobile ? "0.8rem;" : "1rem;"}
  font-family: ${(props) => props.theme.generalTextFont};
  margin: 0;
  font-weight: 400;
    transition: 1s;
    line-height: 1.5rem;
    word-break: break-word;
    word-spacing: 0.1rem;
    text-align:justify;
`;

export const ParagraphsNavigation = styled.p`
color: ${(props) => props.theme.generalTextColor};
font-size: ${isMobile ? "0.8rem;" : "1rem;"}
font-family: ${(props) => props.theme.generalTextFont};
font-weight: 400;  
margin: ${isMobile ? "1rem  0;" : "1rem 1rem;"};
transition:1s;
text-align:justify;
line-height: 1.5rem;
word-break: break-word;
word-spacing: 0.1rem;
`;

export const TitleContainerBox = styled.div`
  justify-content: center;
  text-align: ${isMobile ? "center" : "start"};
  transform: ${isMobile ? "" : "rotate(-90deg);"}
  line-height: 2.5rem;
  ${isMobile ? "" : "letter-spacing: 1.2rem;"}
  
  h1 {
    color: ${(props) => props.theme.mainTitlesColor};
    font-family: ${(props) => props.theme.generalTextFont};
    font-size: ${isMobile ? "2rem" : "2.5rem;"}
    font-family: ${(props) => props.theme.generalFont};
    margin: ${isMobile ? "0 0 4rem 0;" : "0 0 2rem 0;"}
    text-transform: uppercase;
    transition: 1s;
    
  }
`;

// -------------------------LINKS-------------------------
export const ExternalLinks = styled.a`
  color: ${(props) => props.theme.navigationLinksColor};
  font-size: 0.8rem;
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

// -------------------------NAVIGATION-------------------------
export const NavLinksTop = styled(Link)`
  cursor: pointer;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.sizeNavigationLinks};
  font-family: ${(props) => props.theme.navLinksFonts};
  color: ${(props) => props.theme.navigationLinksColor};
  margin: 0;
  padding: ${isMobile ? "0.4rem 0.5rem " : "0 1rem"};
  align-items: end;
  text-decoration:none;
  font-weight: bold;
  transition: 400ms;
  
 
  &:hover {
    color: ${(props) => props.theme.hooverLinks};
 `;

export const NavLinksFooter = styled(NavLinksTop)`
padding:${isMobile ? "3rem 0.5rem " : "0 0 0 2rem;"}
${isMobile ? "text-align: center;" : "text-align: initial;"}
font-size: 0.8rem;
`;

export const LogoNav = styled(Link)`
  cursor: pointer;
  font-size: ${(props) => props.theme.sizeNavigationLinks};
  font-family: ${(props) => props.theme.navLinksFonts};
  color: ${(props) => props.theme.navigationLinksColor};
  margin: 0;
  transition: 400ms;
  text-decoration:none;
  &:hover {
    color: ${(props) => props.theme.hooverLinks};
 `;

export const ProviNav = styled.a`
  cursor: pointer;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.sizeNavigationLinks};
  font-family: ${(props) => props.theme.navLinksFonts};
  color: ${(props) => props.theme.navigationLinksColor};
  margin: 0;
  padding: ${isMobile ? "0.5rem 0.5rem " : "0 1rem"};
  align-items: end;
  text-decoration:none;
  font-weight: bold;
  transition: 400ms;
    &:hover {
    color: ${(props) => props.theme.hooverLinks};
 `;

export const ProviNavFoot = styled(ProviNav)`
  ${isMobile ? "" : "padding: 0 0 0 2rem;"}
  ${isMobile ? "text-align: center;" : "text-align: initial;"}
    font-size: 0.8rem;
`;

// ------------------------CONTAINERS AND ICONS------------------------------
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
  right: 0rem;
  border-radius: 15px;
  transition: 1s;
  align-items: center;
  opacity: 50%;
  &:hover {
    opacity: 100%;
  }
`;

export const Redescontainer = () => {
  return (
    <ContaininerRedes className="animate__animated animate__fadeIn animate__delay-1s">
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
    <ContaininerRightPanel className="animate__animated animate__fadeIn animate__delay-1s">
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
  top: ${isMobile ? "1.3rem" : "3.3rem"};
  right: 1.5rem;
  z-index: 9999;
`;

export const ContaininerTheme2 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContainerRedesFootParagraph = styled.div``;
