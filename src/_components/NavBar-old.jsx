import React from "react";
import { isMobile } from "react-device-detect";
import { NavLinksTop } from "../_components/Styles";

import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  justify-content: space-around;
  align-items: ${isMobile ? "flex-start" : "center"};
  gap: 1rem;
  color: ${(props) => props.theme.navigationLinksColor};
  text-transform: uppercase;
  position: fixed;
  width: 100%;
  padding: 1.5rem 1rem;
  top: 0;
  font-weight: bold;
  background: rgba(104, 104, 104, 0.26);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(17px);
  -webkit-backdrop-filter: blur(17px);
  border: 1px solid rgba(104, 104, 104, 0.31);
  /* From https://css.glass */
  background: rgba(104, 104, 104, 0.26);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(17px);
  -webkit-backdrop-filter: blur(17px);
  border-bottom: 1.8px solid ${(props) => props.theme.colorLines};
  transition: 1s;
  z-index: 9999;
`;

const LogoContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: ${isMobile ? "flex-start" : "center"};
  text-transform: uppercase;
  font-size: 1.5rem;
  color: ${(props) => props.theme.navigationLinksColor};
  text-decoration: none;
`;

const ContainerLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: ${isMobile ? "flex-start" : "center"};
  gap: 2rem;
  flex-direction: ${isMobile ? "column" : "row"};
`;

const NavbarLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${(props) => props.theme.sizeNavigationLinks};
`;

const NavBar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <div>Walter</div>
        <div>Gandini</div>
      </LogoContainer>
      <ContainerLinks>
        <>
          <NavLinksTop to="/">Home</NavLinksTop>
          <NavLinksTop to="/bionavigation">Bio</NavLinksTop>
          <NavLinksTop to="/tatuajenavigation">Tatuaje</NavLinksTop>
          <NavLinksTop to="/musicanavigation">Musica</NavLinksTop>
          <NavLinksTop to="/pinturanavigation">Pintura</NavLinksTop>
          <NavLinksTop to="/plasticaymasnavigation">Plastica & +</NavLinksTop>
          <NavLinksTop to="/contactnavigation">Contacto</NavLinksTop>
        </>
      </ContainerLinks>
      <NavbarLeftContainer>
        <div>ES | EN</div>
      </NavbarLeftContainer>
    </NavbarContainer>
  );
};

export default NavBar;
