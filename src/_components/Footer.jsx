import React from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import { ExternalLinks, NavLinksFooter } from "./Styles";

const FooterContainer = styled.div`
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: ${(props) => props.theme.navigationLinksColor};
  top: 0;
  width: auto;
  padding: 1.5rem 0;
  border-top: 2px solid red;
  flex-wrap: wrap;
  font-weight: bold;
  background: rgba(104, 104, 104, 0.26);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(104, 104, 104, 0.31);
  /* From https://css.glass */
  background: rgba(104, 104, 104, 0.26);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-top: 1.8px solid ${(props) => props.theme.colorLines};
  padding: 4rem 0;
`;

const LogoContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: ${isMobile ? "initial" : "end"};
  text-transform: uppercase;
  ${isMobile ? "transform: rotate(-90deg);" : ""}
  font-size: 3rem;
`;

const FooterCopyright = styled.div`
  display: flex;
  flex-direction: column;
  text-align: ${isMobile ? "center" : "end"};
  font-size: ${(props) => props.theme.sizeGeneralText};
  padding-left: ${isMobile ? "" : "10rem"};
  font-weight: 500;
`;

const ContainerLinks = styled.div`
  display: grid;
  grid-template-columns: ${isMobile ? "1fr" : "repeat(1, 1fr 1fr);"}
  text-align: ${isMobile ? "center" : "initial"};
  gap: 1rem;
  transition: 0.5s;
  
  
  
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <LogoContainer>
          <div>Walter</div>
          <div>Gandini</div>
        </LogoContainer>
        <ContainerLinks>
          <>
            <NavLinksFooter to="/">Home</NavLinksFooter>
            <NavLinksFooter to="/bionavigation">Bio</NavLinksFooter>
            <NavLinksFooter to="/tatuajenavigation">Tatuaje</NavLinksFooter>
            <NavLinksFooter to="/musicanavigation">Musica</NavLinksFooter>
            <NavLinksFooter to="/pinturanavigation">Pintura</NavLinksFooter>
            <NavLinksFooter to="/plasticaymasnavigation">
              Plastica & +
            </NavLinksFooter>
            <NavLinksFooter to="/contactnavigation">Contacto</NavLinksFooter>
          </>
        </ContainerLinks>
        <FooterCopyright>
          <div>Walter Gandini © </div>
          <div> All Rights Reserved 2021 - {new Date().getFullYear()}</div>
          <div>
            Designed and Developed by{" "}
            <ExternalLinks
              href="https://www.giorgioruanova.com/"
              target="blank"
            >
              Giorgio Ruanova
            </ExternalLinks>
          </div>
        </FooterCopyright>
      </FooterContainer>
    </>
  );
};

export default Footer;
