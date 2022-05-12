import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { GalleryArray } from "../DataArray";


// ------------------------------------------------------------

function Item({ galleryartimg }) {
  const ImgContainer = styled.div`
    transition: 1s;
    background-image: url(${galleryartimg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    border-color: none;
    width: 100%;
    height: 10rem;
    border-radius: 5px;
    cursor: pointer;
  `;

  return (
    <>{galleryartimg && <ImgContainer galleryartimg={galleryartimg}></ImgContainer>}</>
  );
}

const ArtGrid = () => {
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
        {GalleryArray.map((e, GalleryImg) => (
          <Item key={GalleryImg} galleryartimg={e.GalleryImg} />
        ))}
      </ContainerTattoo>
    </>
  );
};

export default ArtGrid;
