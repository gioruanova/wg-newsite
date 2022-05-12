import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import AOS from "aos";
import "aos/dist/aos.css";

import { InternalLinks, Paragraphs } from "../_components/Styles";
import { BioArray } from "../_components/DataArray";

const Container = styled.div`
  margin-bottom: 2rem;
`;

const BioContainer = styled.div`
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  align-items: center;
  gap: 1rem;
  p {
    width: ${isMobile ? "100%" : "50%"};
  }
  div {
    width: ${isMobile ? "100%" : "30%"};
  }
  justify-content: center;
  margin: 1rem 0 2rem 0;
`;

const Titles = styled.h1`
  color: white;
  font-size: ${isMobile ? "1.5rem" : "1.8rem"};
  font-family: ${(props) => props.theme.generalFont};
  background-color: ${(props) => props.theme.mainTitlesColor};
  text-transform: uppercase;
  transition: 1s;
  width: 100%;
  border-radius: 0.2rem;
`;

export const StudioTitle = styled.h2`
  color: ${(props) => props.theme.tattooStudioTitleColor};
  font-size: ${isMobile ? "2.2rem" : "3rem"};
  font-family: ${(props) => props.theme.tattooStudioTitle};
  font-weight: 500;
  margin: 0 0 1rem 0;
  text-align: center;
  transition: 1s;
`;

AOS.init();
function Item({ titles, bioimg, bioparagraph, nombre }) {
  const ImgContainer = styled.div`
    transition: 1s;
    background-image: url(${bioimg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 30rem;
    border-radius: 0.2rem;
    overflow: hidden;
    filter: sepia(0.9);
  `;

  return (
    <Container>
      <Titles>{titles}</Titles>

      <BioContainer>
        <ImgContainer img={bioimg}></ImgContainer>

        <Paragraphs>{bioparagraph}</Paragraphs>
      </BioContainer>
      <InternalLinks to="/bionavigation"> Ver Mas{" >"} </InternalLinks>
    </Container>
  );
}

const Bio = () => {
  return (
    <div
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <>
        <div>
          {BioArray.slice(0, 1).map((e, Bio) => (
            <Item
              key={Bio}
              titles={e.BioTitle}
              bioimg={e.BioImg}
              bioparagraph={e.BioParagraph}
              isreverseimg={e.isReverseImg}
              nombre={e.Nombre}
            />
          ))}
        </div>
      </>
    </div>
  );
};

export default Bio;

//------------------------------------------------------------------------------------------------------------------------------------------------
