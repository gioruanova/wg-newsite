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
    width: ${isMobile ? "100%" : "100%"};
  }
  div {
    width: ${isMobile ? "100%" : "100%"};
  }
  justify-content: center;
  margin: ${isMobile ? "0.5rem 0 0.5rem 0;" : "3rem 3rem 0 3rem;"};
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
  margin: 0.5rem 0;
  padding: 0.5rem;
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
function Item({ titles, bioimg, bioparagraph, urlnav, urlnavigation }) {
  const ImgContainer = styled.div`
    transition: 1s;
    background-image: url(${bioimg});
    background-position: ${isMobile ? "0rem -6.5rem;" : "0rem -14rem;"}
    background-repeat: no-repeat;
    background-size: cover;
    width:40%;
    height: 17rem;
    border-radius: 0.2rem;
    overflow: hidden;
    filter: sepia(0.9);
  `;

  const ContainerBioText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${isMobile ? "center" : "baseline"};
    gap: ${isMobile ? "2rem" : "4rem"};
  `;

  return (
    <Container>
      <Titles>{titles}</Titles>

      <BioContainer>
        <div>
          <ImgContainer img={bioimg}></ImgContainer>
        </div>

        <ContainerBioText>
          <Paragraphs>{bioparagraph}</Paragraphs>
          <InternalLinks to={urlnav}> {urlnavigation}</InternalLinks>
        </ContainerBioText>
      </BioContainer>
    </Container>
  );
}

const Bio = () => {
  return (
    <div
      data-aos="fade-in"
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
              urlnavigation={e.Navigation}
              urlnav={e.UrlNav}
            />
          ))}
        </div>
      </>
    </div>
  );
};

export default Bio;

//------------------------------------------------------------------------------------------------------------------------------------------------
