import React from "react";
import { Content, Titles, InternalLinks } from "../_components/Styles";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import styled from "styled-components";
import { isMobile } from "react-device-detect";

const GridEventos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin-bottom: 2rem;
`;
const EventoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  border: 2px solid ${(props) => props.theme.mainTitlesColor};
  border-radius: 10px;
  padding: 1rem;
`;

const MainTitleEvent = styled.div`
  color: ${(props) => props.theme.mainTitlesColor};
  text-transform: uppercase;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  h1,
  h2 {
    font-size: ${isMobile ? "1.2rem;" : "1.5rem;"}
    margin: 0;
    padding-left: 1rem;
  }
`;
const LocationEvent = styled.div`
  color: ${(props) => props.theme.generalTextColor};

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  h2 {
    margin: 0;
    font-weight: 400;
    font-size: ${isMobile ? "1rem;" : "1.2rem;"};
  }
  h3 {
    margin: 0;
    font-weight: 400;
  }
`;
const DetailEvent = styled(LocationEvent)`
  gap: 0;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0;
    font-weight: 400;
  }
  h3 {
    margin: 0;
    font-weight: 400;
  }
`;

AOS.init();

const ProximosEventos = () => {
  return (
    <Content
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <Titles>Proximos Eventos</Titles>
      <GridEventos>
        <EventoContainer>
          <MainTitleEvent>
            <h1>08/04</h1>

            <h2>Nombre evento</h2>
          </MainTitleEvent>
          <LocationEvent>
            <h2>Linea 4 evento / Direccion</h2>

            <h2>Hora</h2>
          </LocationEvent>
          <DetailEvent>
            <h3>Linea 1 evento</h3>
            <h3>Linea 2 evento</h3>
          </DetailEvent>
        </EventoContainer>
        <EventoContainer>
          <MainTitleEvent>
            <h1>08/04</h1>

            <h2>Nombre evento</h2>
          </MainTitleEvent>
          <LocationEvent>
            <h2>Linea 4 evento / Direccion</h2>

            <h2>Hora</h2>
          </LocationEvent>
          <DetailEvent>
            <h3>Linea 1 evento</h3>
            <h3>Linea 2 evento</h3>
          </DetailEvent>
        </EventoContainer>
        <EventoContainer>
          <MainTitleEvent>
            <h1>08/04</h1>

            <h2>Nombre evento</h2>
          </MainTitleEvent>
          <LocationEvent>
            <h2>Linea 4 evento / Direccion</h2>

            <h2>Hora</h2>
          </LocationEvent>
          <DetailEvent>
            <h3>Linea 1 evento</h3>
            <h3>Linea 2 evento</h3>
          </DetailEvent>
        </EventoContainer>
      </GridEventos>
      <div
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <InternalLinks to="/#"> Ver Mas{" >"} </InternalLinks>
      </div>
    </Content>
  );
};

export default ProximosEventos;
