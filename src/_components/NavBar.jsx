import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import { NavLinksTop } from "../_components/Styles";

import styled from "styled-components";
import Icons from "./Icons";

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  justify-content: center;
  ${isMobile ? "" : "gap: 2rem;"}
  align-items: ${isMobile ? "self-start" : "center"};
  width: 100%;
  background-color: white;
  height: auto;
  color: ${(props) => props.theme.navigationLinksColor};
  padding: 1rem 1rem;
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
  z-index: 9999;
  transition: 1s;
`;

const ContainerLogo = styled.div``;

const LogoTitle = styled.h2`
  margin: 0;
  text-align: ${isMobile ? "center" : "center"};
  text-transform: uppercase;
`;

const LinksContainer = styled.div`
transition: 1s;
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  align-items: self-start;
  margin-top: ${isMobile ? "1rem" : ""};
`;

const NavBar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {isMobile ? (
        <NavBarContainer
          className="animate__animated animate__fadeIn animate__delay-1s"
          onClick={() => {
            setShow(!show);
          }}
        >
          
          <div
            onClick={() => {
              setShow(!show);
            }}
          >
            {" "}
            {show ? <Icons name="burgerclosed" /> : <Icons name="burgeropen" />}
          </div>
          {show && (
            <>
              <LinksContainer>
                <NavLinksTop
                  onClick={() => {
                    setShow(!show);
                  }}
                  to="/"
                >
                  Home
                </NavLinksTop>
                <NavLinksTop
                  onClick={() => {
                    setShow(!show);
                  }}
                  to="/bionavigation"
                >
                  Bio
                </NavLinksTop>
                <NavLinksTop
                  onClick={() => {
                    setShow(!show);
                  }}
                  to="/tatuajenavigation"
                >
                  Tatuaje
                </NavLinksTop>
                <NavLinksTop
                  onClick={() => {
                    setShow(!show);
                  }}
                  to="/musicanavigation"
                >
                  Musica
                </NavLinksTop>
                <NavLinksTop
                  onClick={() => {
                    setShow(!show);
                  }}
                  to="/pinturanavigation"
                >
                  Pintura
                </NavLinksTop>
                <NavLinksTop
                  onClick={() => {
                    setShow(!show);
                  }}
                  to="/plasticaymasnavigation"
                >
                  Plastica & +
                </NavLinksTop>
                <NavLinksTop
                  onClick={() => {
                    setShow(!show);
                  }}
                  to="/contactnavigation"
                >
                  Contacto
                </NavLinksTop>
              </LinksContainer>
            </>
          )}
        </NavBarContainer>
      ) : (
        <NavBarContainer className="animate__animated animate__fadeIn animate__delay-1s">
          <ContainerLogo>
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
      )}
    </>
  );
};

export default NavBar;
