import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

import { EventsArray } from "../DataArray";

// ------------------------------------------------------------
export const Titles = styled.h1`
  color: white;
  font-size: ${isMobile ? "1.5rem" : "1.8rem"};
  font-family: ${(props) => props.theme.generalFont};
  background-color: ${(props) => props.theme.mainTitlesColor};
  text-transform: uppercase;
  transition: 1s;
  width: 100%;
  border-radius: 0.2rem;
`;

const GridEventos = styled.div`
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  align-items: center;
  margin: 3rem 0 2rem 0;
`;
const EventoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 2px solid ${(props) => props.theme.mainTitlesColor};
  border-radius: 0.2rem;
  padding: 1rem;
  transition: 400ms;
  width: ${isMobile ? "100%" : "30%"};
  height: 20rem;
`;

const EventNameData = styled.h1`
  font-size: 1.5rem;
  color: ${(props) => props.theme.mainTitlesColor};
  text-transform: uppercase;
  font-family: ${(props) => props.theme.generalTextFont};
  padding-bottom: 10px;
  border-bottom: 2px solid ${(props) => props.theme.colorLines};
`;

const EventLocationData = styled.h1`
  font-size: 1rem;
  color: ${(props) => props.theme.generalTextColor};
  font-family: ${(props) => props.theme.generalTextFont};
  text-transform: initial;
`;

const EventContentData = styled.h2`
  font-size: 1rem;
  color: ${(props) => props.theme.mainTitlesColor};
  font-family: ${(props) => props.theme.generalTextFont};
  margin: 0;
`;
const EventCodeData = styled.h2`
  font-size: 0.8rem;
  color: ${(props) => props.theme.generalTextColor};
  font-family: ${(props) => props.theme.generalTextFont};
  text-transform: uppercase;
`;

const EventCodeResultData = styled.h2`
  font-size: 0.9rem;
  color: ${(props) => props.theme.mainTitlesColor};
  font-family: ${(props) => props.theme.generalTextFont};
  text-transform: uppercase;
  font-weight: 500;
  padding-left: ${isMobile ? "" : "5px"};
`;

const ContainerPromo = styled.div`
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  justify-content: center;
  align-items: center;
  ${isMobile ? "" : "gap: 5px;"}
  margin-top: 1rem;
`;

function Item({
  eventdate,
  eventname,
  eventlocation,
  eventtime,
  eventcontent1,
  eventcontent2,
  eventcontent3,
  promocodeavailable,
  promocode,
}) {
  return (
    <>
      <EventoContainer>
        {eventname && (
          <EventNameData>
            <b>{eventname}</b>
          </EventNameData>
        )}
        {eventlocation && (
          <EventLocationData>{eventlocation}</EventLocationData>
        )}

        <ContainerPromo>
          {eventdate && <EventLocationData>{eventdate}</EventLocationData>}
          {eventtime && <EventLocationData> - </EventLocationData>}
          {eventtime && <EventLocationData>{eventtime}</EventLocationData>}
        </ContainerPromo>

        {eventcontent1 && <EventContentData>{eventcontent1}</EventContentData>}
        {eventcontent2 && <EventContentData>{eventcontent2}</EventContentData>}
        {eventcontent3 && <EventContentData>{eventcontent3}</EventContentData>}

        <ContainerPromo>
          {" "}
          <div>
            {promocodeavailable && (
              <EventCodeData>Codigo Promocional : </EventCodeData>
            )}
          </div>
          <div>
            {promocodeavailable && (
              <EventCodeResultData>
                <b>{promocode}</b>
              </EventCodeResultData>
            )}
          </div>
        </ContainerPromo>
      </EventoContainer>
    </>
  );
}

const ProximosEventos = ({ show }) => {
  return (
    <div className="animate__animated animate__fadeIn animate__delay-1s">
      {(show && (
        <GridEventos>
          {EventsArray.map((e, Eventos) => (
            <Item
              key={Eventos}
              eventdate={e.EventDate}
              eventname={e.EventName}
              eventlocation={e.EventLocation}
              eventtime={e.EventTime}
              eventcontent1={e.EventContent1}
              eventcontent2={e.EventContent2}
              eventcontent3={e.EventContent3}
              promocodeavailable={e.PromoCodeAvailable}
              promocode={e.PromoCode}
            />
          ))}
        </GridEventos>
      )) || (
        <GridEventos>
          {isMobile ? (
            <>
              {EventsArray.slice(0, 1).map((e, Eventos) => (
                <Item
                  key={Eventos}
                  eventdate={e.EventDate}
                  eventname={e.EventName}
                  eventlocation={e.EventLocation}
                  eventtime={e.EventTime}
                  eventcontent1={e.EventContent1}
                  eventcontent2={e.EventContent2}
                  eventcontent3={e.EventContent3}
                  promocodeavailable={e.PromoCodeAvailable}
                  promocode={e.PromoCode}
                />
              ))}
            </>
          ) : (
            <>
              {EventsArray.slice(0, 2).map((e, Eventos) => (
                <Item
                  key={Eventos}
                  eventdate={e.EventDate}
                  eventname={e.EventName}
                  eventlocation={e.EventLocation}
                  eventtime={e.EventTime}
                  eventcontent1={e.EventContent1}
                  eventcontent2={e.EventContent2}
                  eventcontent3={e.EventContent3}
                  promocodeavailable={e.PromoCodeAvailable}
                  promocode={e.PromoCode}
                />
              ))}
            </>
          )}
        </GridEventos>
      )}
    </div>
  );
};

export default ProximosEventos;
