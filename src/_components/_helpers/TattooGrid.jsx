import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { TatuajeSamples } from "../../_components/Messages";
import {} from "../../_components/Styles";

// ------------------------------------------------------------

function Item({ img }) {
  const ImgContainer = styled.div`
    transition: 1s;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    border-color: none;
    width: 100%;
    height: 10rem;
    border-radius: 5px;
    cursor: pointer;
  `;

  return <>{img && <ImgContainer img={img}></ImgContainer>}</>;
}

const TattooGrid = () => {
  const ContainerTattoo = styled.div`
    display: grid;
    gap: 2rem;
    ${isMobile
      ? "grid-template-columns: 1fr 1fr;"
      : "grid-template-columns: 1fr 1fr 1fr 1fr 1fr;"}
  `;

  return (
    <>
      <ContainerTattoo>
        {TatuajeSamples.map((e, TatooImg) => (
          <Item key={TatooImg} img={e.TatooImg} />
        ))}
      </ContainerTattoo>
    </>
  );
};

export default TattooGrid;
