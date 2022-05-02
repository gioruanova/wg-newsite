import { isMobile } from "react-device-detect";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackgroundComponent = styled.div`
  background-color: ${(props) => props.theme.generalBackground};
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  position: relative;
  transition: 0.5s;
  align-items: center;
  text-align: center;
  align-content: center;
`;

export const MainContent = styled.div`
  width: auto;
  transition: 0.5s;
  align-items: center;
  text-align: center;
  align-content: center;
  margin: ${isMobile ? "8rem 3rem 5rem 3rem;" : "10rem 20rem 7rem 20rem;"};
`;

export const MainContentHome = styled(MainContent)`
  margin: ${isMobile ? "0rem 3rem 5rem 3rem;" : "0 20rem 0rem 20rem;"};
`;

export const Content = styled.div`
  width: auto;
  transition: 0.5s;
  align-items: center;
  text-align: center;
  align-content: center;
  padding: ${isMobile ? "4rem 0 4rem 0;" : "5rem 0 4rem 0;"};
`;

export const Separator = styled.hr`
  height: 2px;
  background-color: ${(props) => props.theme.colorLines};
  border: none;
`;

export const Titles = styled.h1`
  color: ${(props) => props.theme.mainTitlesColor};
  font-size: ${(props) => props.theme.sizeMaintTitles};
  font-family: ${(props) => props.theme.generalFont};
  margin: 0 0 2rem 0;
  text-transform: uppercase;
`;

export const SubTitles = styled(Titles)`
  font-size: ${(props) => props.theme.sizeSubtitles};
  text-transform: none;
`;

export const Paragraphs = styled.p`
  color: ${(props) => props.theme.generalTextColor};
  font-size: ${(props) => props.theme.sizeGeneralText};
  font-family: ${(props) => props.theme.generalFont};
  margin: 0;
  font-weight: 400;
  margin: 0 0 2rem 0;
`;

export const ExternalLinks = styled.a`
  color: ${(props) => props.theme.navigationLinksColor};
  font-size: ${(props) => props.theme.sizeGeneralText};
  font-family: ${(props) => props.theme.generalFont};
  margin: 0;
  font-weight: 300;
  margin: 0 0 5rem 0;
  text-decoration: none;
  font-weight: 600;
  transition: 200ms;
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
  transition: 200ms;
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
`;

export const NavLinksTop = styled(Link)`
cursor:pointer;
text-transform:uppercase;
font-size: ${(props) => props.theme.sizeNavigationLinks};
color: ${(props) => props.theme.navigationLinksColor};
margin: 0;
align-items: end;
transform:translateX(-0.75em);
  transition 200ms;
  &::before{
    content:'>';
    display:inline-block;
    width:0.75em;
    
    opacity:0;
    transition:opacity 200ms;
  }
  &:hover{
    transform:none;
    color: ${(props) => props.theme.hooverLinks};
  }
  &:hover::before{
    opacity:1;
  }
  text-decoration: none;
`;

export const NavLinksFooter = styled(NavLinksTop)`
  ${isMobile ? "" : "padding: 0 0 0 2rem;"}
  ${isMobile ? "text-align: initial;" : ""}
`;
