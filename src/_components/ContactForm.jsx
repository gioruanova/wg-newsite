import React from "react";
import styled from "styled-components";
import { Titles } from "../_components/Styles";
import { isMobile } from "react-device-detect";
import AOS from "aos";
import "aos/dist/aos.css";

export const Paragraphs = styled.p`
  color: ${(props) => props.theme.generalTextColor};
  font-size: ${isMobile ? "0.8rem;" : "1rem;"}
  font-family: ${(props) => props.theme.generalTextFont};
  margin: 0 0 0;
  font-weight: 400;
    transition: 1s;
    line-height: 1.5rem;
    word-break: break-word;
    word-spacing: 0.1rem;
    text-align:justify;
    padding:0;
`;

export const MainContent = styled.div`
  width: auto;
  transition: 1s;
  align-items: center;
  text-align: center;
  align-content: center;
  margin: ${isMobile ? "0 2rem 0 2rem;" : "0 20rem 0 20rem;"};
`;

AOS.init();

const ContactForm = () => {
  return (
    <MainContent>
      <Titles>Contacto</Titles>
      <Paragraphs>
        Realiza tu consulta cotización, reserva de turnos, compra de obras,
        clases de música, y suscribite al newsletter para participar de sorteos
        y recibir novedades sobre exposiciones, eventos y más.
      </Paragraphs>
      <div>
        <h1>Form Conntacto</h1>
      </div>
    </MainContent>
  );
};

export default ContactForm;
