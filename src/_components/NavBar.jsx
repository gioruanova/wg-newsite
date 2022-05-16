import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import { NavLinksTop, LogoNav } from "./Styles";

import styled from "styled-components";
import Icons from "./Icons";
import Redes from "../_components/Redes";

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  justify-content: ${isMobile ? "flex-start" : "space-around"};
  ${isMobile ? "" : "gap: 2rem;"}
  align-items: ${isMobile ? "self-start" : "center"};
  width: 100%;
  height: auto;
  color: ${(props) => props.theme.navigationLinksColor};

  // Background
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-bottom: 2px solid ${(props) => props.theme.colorLines};
  /* From https://css.glass */
  background: ${(props) => props.theme.navbarBackground};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0rem;
  z-index: 9999;
  transition: 1s;
  ${isMobile ? "padding: 1rem" : "padding: 1rem 15rem 1rem 15rem;"}
`;

const RedesMobile = styled.div`
  margin-top: 1rem;
`;

const ContainerLogo = styled.div``;

const LogoTitle = styled.h2`
  margin: 0;
  text-align: ${isMobile ? "center" : "end"};
  font-family: ${(props) => props.theme.tattooStudioTitle};
  letter-spacing: 5px;
  font-size: 2.5rem;
  font-weight: 500;
`;

const LinksContainer = styled.div`
  transition: 1s;
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  align-items: self-start;
  margin: ${isMobile ? "2rem 0" : ""};
  height: 100%;
  padding-bottom: ${isMobile ? "100rem" : ""};
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
                  to="/biographysite"
                >
                  Bio
                </NavLinksTop>
                <NavLinksTop
                  onClick={() => {
                    setShow(!show);
                  }}
                  to="/musicsite"
                >
                  Musica
                </NavLinksTop>
                <NavLinksTop
                  onClick={() => {
                    setShow(!show);
                  }}
                  to="/artsite"
                >
                  Tatuaje & +
                </NavLinksTop>

                {/* <NavLinksTop
                  onClick={() => {
                    setShow(!show);
                  }}
                  to="/eshopsite"
                >
                  E-Shop
                </NavLinksTop> */}
                <NavLinksTop
                  onClick={() => {
                    setShow(!show);
                  }}
                  to="/contactsite"
                >
                  Contacto
                </NavLinksTop>
                <RedesMobile>
                  <Redes />
                </RedesMobile>
              </LinksContainer>
            </>
          )}
        </NavBarContainer>
      ) : (
        <NavBarContainer className="animate__animated animate__fadeIn animate__delay-1s">
          <ContainerLogo>
            <LogoNav to="/">
              <LogoTitle>
                {" "}
                <div>Walter</div>
                <div>
                  <b>Gandini</b>
                </div>
              </LogoTitle>
            </LogoNav>
          </ContainerLogo>
          <LinksContainer>
            <NavLinksTop to="/biographysite">Bio</NavLinksTop>
            <NavLinksTop to="/musicsite">Musica</NavLinksTop>
            <NavLinksTop to="/artsite">Tatuaje & +</NavLinksTop>

            {/* <NavLinksTop to="/eshopsite">E-Shop</NavLinksTop> */}
            <NavLinksTop to="/contactsite">Contacto</NavLinksTop>
          </LinksContainer>
          <Redes />
        </NavBarContainer>
      )}
    </>
  );
};

export default NavBar;
