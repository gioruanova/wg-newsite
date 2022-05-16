import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

import { InternalLinks } from "./Styles";

// ------------------------------------------------------------

const ContainerButtons = styled.div`
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  p {
    text-align: center;
    color: ${(props) => props.theme.navigationLinksColor};
  }
  &:hover {
    p {
      color: ${(props) => props.theme.hooverLinks};
    }
    button {
      cursor: pointer;
      background-color: ${(props) => props.theme.colorLines};
    }
  }
`;

const ContactButtons = styled.button`
  width: auto;
  height: auto;
  margin: 0 1rem 1rem 1rem;
  padding: 0.5rem 0.8rem;
  background-color: ${(props) => props.theme.backgroundButtons};
  font-family: ${(props) => props.theme.generalTextFont};
  color: ${(props) => props.theme.textButtonsColor};
  font-size: ${isMobile ? "0.8rem;" : "1rem;"}
  border: none;
  border-radius: 0.4rem;
  text-transform: uppercase;
  transition: 400ms;
  
  &:active {
    background-color: white;
  }
  
`;

const Paragraphs = styled.p`
color: ${(props) => props.theme.generalTextColor};
font-size: ${isMobile ? "0.8rem;" : "1rem;"}
font-family: ${(props) => props.theme.generalFont};
font-weight: 400;  
transition:1s;
text-align:justify;

`;

const BotonClasesLink = () => {
  return (
    <ContainerButtons>
      <InternalLinks to="/contactnavigation">
        <div>
          {" "}
          <Paragraphs>
            Comenzá tus clases y obtene beneficios con el código
            {"   "}
            <b>
              <u>JediBluesMaster</u>
            </b>
          </Paragraphs>
        </div>
        <ContactButtons>Reserva tu clase</ContactButtons>
      </InternalLinks>
    </ContainerButtons>
  );
};

export default BotonClasesLink;
