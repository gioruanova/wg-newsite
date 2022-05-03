import React from "react";
import styled from "styled-components";

const Background = styled.div`
  background-color: #1b1b1b;
  height: 100vh;
  position: fixed;
  overflow-y: none;
  width: 100%;
  text-align: center;
  scroll-behavior: smooth;
  transition: 1s;
`;

const LoaderComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: auto;
  justify-content: center;
  align-content: flex-start;
`;

export const Titles = styled.h1`
  color: White;
  font-size: 3rem;
  font-family: ${(props) => props.theme.generalFont};
  margin: 0;
  text-transform: uppercase;
`;

export const SubTitles = styled(Titles)`
  color: White;
  font-size: 1rem;
  font-family: ${(props) => props.theme.generalFont};
  margin: 0;
  text-transform: uppercase;
`;

export default function LoaderInitial() {
  return (
    <div>
      <Background className="animate__animated animate__fadeIn animate__delay-0.8s">
        <LoaderComponent>
          <Titles>Walter Gandini</Titles>
          <SubTitles>Musica - Tatuaje - Pintura - Plastica</SubTitles>
        </LoaderComponent>
      </Background>
    </div>
  );
}
