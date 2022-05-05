import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { BioData } from "../../_components/Messages";
import { MainContent, Titles } from "../../_components/Styles";
import Redes from "../../_components/Redes";
// ------------------------------------------------------------

function Item({ paragraph, img, isreverse }) {
  const ContainerBio = styled.div`
    transition: 1s;
    display: flex;
    align-items: center;
    ${isreverse ? "flex-direction: row-reverse;" : "flex-direction:row;"}
    justify-content:center;
    width: 100%;
  `;

  const ContainerBioResponsive = styled.div`
    transition: 1s;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
  `;

  const ImgContainer = styled.div`
    transition: 1s;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-color: none;
    width: 100%;
    height: 12rem;
    margin: 1rem;
    border-radius: 5px;
    filter: grayscale(1);
    &:hover {
      filter: none;
    }
  `;

  const Paragraphs = styled.p`
  color: ${(props) => props.theme.generalTextColor};
  font-size: ${isMobile ? "0.8rem;" : "1rem;"}
  font-family: ${(props) => props.theme.generalFont};
  font-weight: 400;  
  margin: ${isMobile ? "1rem  0;" : "1rem 1rem;"};
  transition:1s;
  text-align:justify;
`;
  return (
    <>
      {isMobile ? (
        <ContainerBioResponsive>
          {paragraph && <Paragraphs>{paragraph}</Paragraphs>}
          {img && <ImgContainer img={img}></ImgContainer>}
        </ContainerBioResponsive>
      ) : (
        <ContainerBio>
          {paragraph && <Paragraphs>{paragraph}</Paragraphs>}
          {img && <ImgContainer img={img}></ImgContainer>}
        </ContainerBio>
      )}
    </>
  );
}

const BioNavigation = () => {
  const MainContainer = styled.div`
    margin:${isMobile ? " 0 1rem;" : " 0 10rem;"}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  return (
    <MainContent className="animate__animated animate__fadeIn animate__slower">
      <Titles>Walter Gandini</Titles>
      <>
        <MainContainer>
          {BioData.slice(1, 8).map((e, Bio, isReverse, Img) => (
            <Item
              key={Bio}
              paragraph={e.Paragraph}
              isreverse={e.isReverse}
              img={e.Img}
            />
          ))}
        </MainContainer>
      </>

      <Redes />
    </MainContent>
  );
};

export default BioNavigation;
