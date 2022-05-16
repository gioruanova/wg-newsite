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
  padding: 1.5rem 0;
  flex-wrap: wrap;
  font-weight: bold;
  background: ${(props) => props.theme.navbarBackground};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(104, 104, 104, 0.31);
  background: rgba(104, 104, 104, 0.26);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-top: 1px solid ${(props) => props.theme.colorLines};
  padding: ${isMobile ? "3rem 2rem;" : "3rem 20rem;"};
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${isMobile ? "initial" : "end"};
  line-height: 4rem;
  text-decoration: none;
`;

const LogoTitle = styled.h2`
  margin: 0;
  text-align: ${isMobile ? "center" : "end"};
  font-family: ${(props) => props.theme.tattooStudioTitle};
  letter-spacing: 5px;
  font-size: 3.5rem;
  font-weight: 500;
  text-decoration: none;
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

const Footer = () => {
  return (
    <>
      <div>
        <FooterContainer>
          <LogoContainer>
            <LogoNav to="/">
              <LogoTitle>
                {" "}
                <div>Walter</div>
                <div>
                  <b>Gandini</b>
                </div>
              </LogoTitle>
            </LogoNav>
          </LogoContainer>

          <ContainerLinks>
            <>
              <NavLinksFooter to="/bionavigation">Bio</NavLinksFooter>
              <NavLinksFooter to="/musicanavigation">Musica</NavLinksFooter>
              <NavLinksFooter to="/artnavigation">Tatuaje & +</NavLinksFooter>
              {/* <NavLinksFooter to="/">E-Shop</NavLinksFooter> */}
              <NavLinksFooter to="/contactnavigation">Contacto</NavLinksFooter>
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
