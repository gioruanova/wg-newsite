import React from "react";
import { Content, Titles } from "../_components/Styles";

import styled from "styled-components";
import { isMobile } from "react-device-detect";

import { Eventos } from "../_components/Messages";

const GridEventos = styled.div`
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin-bottom: 2rem;
  align-items: center;
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
  transition: 400ms;
  width: ${isMobile ? "80%" : "30%"};
  height: 15rem;
`;

const MainTitleEvent = styled.div`
  color: ${(props) => props.theme.mainTitlesColor};
  text-transform: uppercase;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  transition: 400ms;

  h1,
  h2 {
    font-size: ${isMobile ? "1.2rem;" : "1.5rem;"}
    margin: 0;
    
  }
`;
const LocationEvent = styled.div`
  color: ${(props) => props.theme.generalTextColor};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: 400ms;
   h2 {
    transition: 400ms;
    font-size: ${isMobile ? "1.2rem;" : "1.2rem;"}
    margin: 0;
    color:${(props) => props.theme.mainTitlesColor};
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
  transition: 400ms;
  h2 {
    margin: 0;
    font-weight: 400;
  }
  h3 {
    margin: 0;
    font-weight: 400;
  }
`;

function Item({
  EventDate,
  EventName,
  EventLocation,
  EventTime,
  EventContent1,
  EventContent2,
  EventContent3,
}) {
  return (
    <>
      <EventoContainer>
        <MainTitleEvent>
          <h1>{EventDate}</h1>
        </MainTitleEvent>
        <LocationEvent>
          <h2>{EventName}</h2>

          <h2>{EventLocation}</h2>
        </LocationEvent>
        <DetailEvent>
          <h2>{EventTime}</h2>
          <h3>{EventContent1}</h3>
          <h3>{EventContent2}</h3>
          <h3>{EventContent3}</h3>
        </DetailEvent>
      </EventoContainer>
    </>
  );
}

const ProximosEventos = () => {
  return (
    <Content className="animate__animated animate__fadeIn animate__delay-0.5s">
      <Titles>Proximos Eventos</Titles>
      <GridEventos>
        {Eventos.map((e, Eventos) => (
          <Item
            key={Eventos}
            EventDate={e.EventDate}
            EventName={e.EventName}
            EventLocation={e.EventLocation}
            EventTime={e.EventTime}
            EventContent1={e.EventContent1}
            EventContent2={e.EventContent2}
            EventContent3={e.EventContent3}
          />
        ))}
      </GridEventos>
      {/* <div>
        <InternalLinks to="/#"> Ver Mas{" >"} </InternalLinks>
      </div> */}
    </Content>
  );
};

export default ProximosEventos;

