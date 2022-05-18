import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

import { GalleryArray } from "../DataArray";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

// ------------------------------------------------------------

const ArtGrid = () => {
  const ContainerTattoo = styled.div`
    margin: ${isMobile ? "" : "0 10rem"};
  `;

  const ImageGrid = styled(ImageList)`
    border-radius: 0.2rem;
    transistion: 1s;
  `;

  const ImageSelector = styled(ImageListItem)`
  transition: 900ms;
    border-radius: 0.2rem;
    filter: ${isMobile ? "" : "sepia(0.9);"}
    &:hover {
        cursor:pointer;
        filter: none;
        border: 2px solid ${(props) => props.theme.colorLines};

      }
  `;
  

  return (
    <ContainerTattoo>
      <ImageGrid variant="masonry" cols={4} gap={15}>
        {GalleryArray.sort(() => Math.random() - 0.5).map((GalleryArray) => (
          <ImageSelector key={GalleryArray.GalleryImg}>
            <img
              src={`${GalleryArray.GalleryImg}?w=248&fit=crop&auto=format`}
              srcSet={`${GalleryArray.GalleryImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={GalleryArray.GalleryImg}
              loading="lazy"
            />
          </ImageSelector>
        ))}
      </ImageGrid>
    </ContainerTattoo>
  );
};

export default ArtGrid;
