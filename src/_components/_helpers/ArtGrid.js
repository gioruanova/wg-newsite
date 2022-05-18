import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { GalleryGrid } from "../DataArray"
import styled from "styled-components";


const ContainerImgs = styled.div`
display:flex;
justify-content: center;
padding: 5rem;
`


function ArtGrid() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };


  return (
    <div>
      <Gallery photos={GalleryGrid} onClick={openLightbox} margin={2} />
      <ContainerImgs>
        <ModalGateway className="artgallery">
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox} >
              <Carousel
                currentIndex={currentImage}
                views={GalleryGrid.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title

                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </ContainerImgs>
    </div>
  );
}
export default ArtGrid;