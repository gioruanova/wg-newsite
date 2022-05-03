import React from "react";
import { isMobile } from "react-device-detect";
import { NavLinksTop } from "../_components/Styles";

import styled from "styled-components";

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  justify-content: center;
  gap: 2rem;
  align-items: ${isMobile ? "start" : "center"};
  width: 100%;
  background-color: white;
  height: auto;
  color: ${(props) => props.theme.navigationLinksColor};
  padding: ${isMobile ? "1rem;" : "1rem 0"};
  // Background
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
  position: fixed;
  top: 0;
  left: 0rem;
`;

const ContainerLogo = styled.div``;

const LogoTitle = styled.h2`
  margin: 0;
  text-align: ${isMobile ? "initial" : "center"};
  text-transform: uppercase;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  align-items: baseline;
  margin-top: ${isMobile ? "1rem" : ""};
`;

const NavBar = () => {
  return (
    <NavBarContainer className="animate__animated animate__fadeIn animate__delay-1s">
      <ContainerLogo >
        <LogoTitle>Walter</LogoTitle>
        <LogoTitle>Gandini</LogoTitle>
      </ContainerLogo>

      <LinksContainer>
        <NavLinksTop to="/">Home</NavLinksTop>
        <NavLinksTop to="/bionavigation">Bio</NavLinksTop>
        <NavLinksTop to="/tatuajenavigation">Tatuaje</NavLinksTop>
        <NavLinksTop to="/musicanavigation">Musica</NavLinksTop>
        <NavLinksTop to="/pinturanavigation">Pintura</NavLinksTop>
        <NavLinksTop to="/plasticaymasnavigation">Plastica & +</NavLinksTop>
        <NavLinksTop to="/contactnavigation">Contacto</NavLinksTop>
      </LinksContainer>
    </NavBarContainer>
  );
};

export default NavBar;
