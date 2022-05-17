import React from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import {
  ExternalLinks,
  NavLinksFooter,
  ContainerRedesFootParagraph,
  LogoNav,
} from "./Styles";
import Redes from "../_components/Redes";

const FooterContainer = styled.div`
  transition: 1s;
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: ${(props) => props.theme.navigationLinksColor};
  top: 0;
  width: auto;

  flex-wrap: wrap;
  font-weight: bold;

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(104, 104, 104, 0.31);
  background: ${(props) => props.theme.navbarBackground};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-top: 2px solid ${(props) => props.theme.colorLines};
  padding: ${isMobile ? "3rem 2rem;" : "3rem 20rem;"};
  padding: ${isMobile ? "" : "2rem 15rem 2rem 15rem;"};
`;

const FooterCopyright = styled.div`
  display: flex;
  flex-direction: column;
  text-align: ${isMobile ? "center" : "end"};
  font-size: ${isMobile ? "0.7rem;" : "0.8rem;"}
  padding-left: ${isMobile ? "" : "10rem"};
  padding-right: ${isMobile ? "" : "0.7rem;"}
  font-weight: 300;
`;

const ContainerLinks = styled.div`
  display: grid;
  grid-template-columns: ${isMobile ? "1fr" : "repeat(1, 1fr 1fr);"}
  text-align: ${isMobile ? "center" : "initial"};
  gap: 1rem;
  transition: 1s;
  
`;

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${isMobile ? "center" : "end"};
`;

const TitleLogo1 = styled.h1`
  transition: 1s;
  color: white;
  font-size: 3.5rem;
  margin: 0;
  font-weight: 100;
  font-family: "Updock", cursive;
  color: ${(props) => props.theme.mainTitlesColor};
`;
const TitleLogo2 = styled.h1`
  transition: 1s;
  color: #ad9a72;
  font-size: 3.5rem;
  margin: 0;
  font-weight: 400;
  font-family: "Updock", cursive;
  color: ${(props) => props.theme.mainTitlesColor};
`;
const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Footer = () => {
  return (
    <>
      <div>
        <FooterContainer>
          <LogoNav to="/">
            <TitleDiv>
              <TitleDiv>
                <TitleLogo1>Walter</TitleLogo1>
                <TitleLogo2>
                  <b>Gandini</b>
                </TitleLogo2>
              </TitleDiv>
            </TitleDiv>
          </LogoNav>

          <ContainerLinks>
            <>
              <NavLinksFooter to="/biographysite">Bio</NavLinksFooter>
              <NavLinksFooter to="/musicsite">Musica</NavLinksFooter>
              <NavLinksFooter to="/artsite">Tatuaje & +</NavLinksFooter>
              {/* <NavLinksFooter to="/">E-Shop</NavLinksFooter> */}
              <NavLinksFooter to="/contactsite">Contacto</NavLinksFooter>
            </>
          </ContainerLinks>

          <DivContainer>
            <div>
              <ContainerRedesFootParagraph>
                <Redes />
              </ContainerRedesFootParagraph>
            </div>
            <div>
              <FooterCopyright>
                <div>
                  {" "}
                  Todos los derechos reservados 2021 -{" "}
                  {new Date().getFullYear()}
                </div>
                <div>
                  Diseño y Desarrollo por{" "}
                  <ExternalLinks
                    href="https://www.giorgioruanova.com/"
                    target="blank"
                    rel="noreferrer"
                    title="Giorgio Ruanova Development"
                    aria-label="Giorgio Ruanova Development"
                  >
                    Giorgio Ruanova
                  </ExternalLinks>
                </div>
              </FooterCopyright>
            </div>
          </DivContainer>
        </FooterContainer>
      </div>
    </>
  );
};

export default Footer;
