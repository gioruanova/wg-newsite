import React from "react";
import EventosList from "../_components/_helpers/EventosList";
import Box from "../_components/Box";
import styled from "styled-components";

import { EventsArray } from "../_components/DataArray";

export const Titles = styled.h1`
  color: white;
  font-size: ${(props) => props.theme.sizeMaintTitles};
  font-family: ${(props) => props.theme.generalFont};
  background-color: ${(props) => props.theme.mainTitlesColor};
  text-transform: uppercase;
  transition: 1s;
  width: 100%;
  border-radius: 0.2rem;
`;

function Item({ title }) {
  return (
    <>
      <Titles>{title}</Titles>
    </>
  );
}

const ProximosEventos = () => {
  return (
    <>
      {EventsArray.map((e, Eventos) => (
        <Item key={Eventos} title={e.Title} />
      ))}
      <Box content={EventosList} button />
    </>
  );
};

export default ProximosEventos;
