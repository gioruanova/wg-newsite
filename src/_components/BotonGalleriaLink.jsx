import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

// ------------------------------------------------------------

const ParagraphsNavigation = styled.p`
color: ${(props) => props.theme.generalTextColor};
font-size: ${isMobile ? "0.8rem;" : "1rem;"}
font-family: ${(props) => props.theme.generalTextFont};
font-weight: 400;  
transition:1s;
text-align:justify;
line-height: 1.5rem;
word-break: break-word;
word-spacing: 0.1rem;
`;

const ExternalLinks = styled.a`
  color: ${(props) => props.theme.navigationLinksColor};
  font-size: 0.8rem;
  font-family: ${(props) => props.theme.generalFont};
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

const ContainerButtons = styled.div`
  display: flex;

  flex-direction: ${isMobile ? "column" : "row"};
  justify-content: center;
  align-items: center;
  margin: ${isMobile ? "2rem 0 4rem 0" : "1rem 0"};
  p {
    text-align: center;
    margin: ${isMobile ? "" : "2rem 1rem 2rem 0;"};
  }
`;

const ContactButtons = styled.button`
  width: auto;
  height: auto;
    padding: 0.5rem 0.8rem;
  background-color: ${(props) => props.theme.backgroundButtons};
  font-family: ${(props) => props.theme.generalTextFont};
  color: ${(props) => props.theme.textButtonsColor};
  font-size: ${isMobile ? "0.8rem;" : "1rem;"}
  border: none;
  border-radius: 0.4rem;
  text-transform: uppercase;
  transition: 400ms;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colorLines};
  }
  &:active {
    background-color: white;
  }
`;

const BotonGalleriaLink = () => {
  return (
    <>
      <ExternalLinks
        href="http://www.buenosairesfinearts.com/"
        target="_blank"
        rel="noreferrer"
        title="Buenos Aires Fine Arts"
        aria-label="Buenos Aires Fine Arts"
      >
        <div>
          <ContainerButtons>
            <ParagraphsNavigation>
              Obras disponibles en Galeria
            </ParagraphsNavigation>

            <ContactButtons> Buenos Aires Fine Artes</ContactButtons>
          </ContainerButtons>
        </div>
      </ExternalLinks>
    </>
  );
};

export default BotonGalleriaLink;
