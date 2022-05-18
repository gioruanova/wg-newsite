import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

import EventosList from "../_components/_helpers/EventosList";
import Box from "../_components/Box";
import { EventsArray } from "../_components/DataArray";

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
  margin: 0.5rem 0;
  padding: 0.5rem;
`;

function Item({ title }) {
  return <>{title && <Titles>{title}</Titles>}</>;
}

const ProximosEventos = () => {
  return (
    <>
      {isMobile ? (
        <div
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          {EventsArray.map((e, Eventos) => (
            <Item key={Eventos} title={e.Title} />
          ))}
          <Box content={EventosList} button />
        </div>
      ) : (
        <div
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="2500"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          {EventsArray.map((e, Eventos) => (
            <Item key={Eventos} title={e.Title} />
          ))}
          <Box content={EventosList} button />
        </div>
      )}
    </>
  );
};

export default ProximosEventos;
