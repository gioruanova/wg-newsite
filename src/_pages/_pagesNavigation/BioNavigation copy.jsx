import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { BioData } from "../../_components/Messages";

import { MainContent, Titles } from "../../_components/Styles";
import Redes from "../../_components/Redes";

export const Paragraphs = styled.p`
  color: ${(props) => props.theme.generalTextColor};
  font-size: ${isMobile ? "0.8rem;" : "1rem;"}
  font-family: ${(props) => props.theme.generalFont};
  font-weight: 400;  
  margin: ${isMobile ? "1rem  0;" : "1rem 1rem;"};
  transition: 1s;
  text-align:justify;
`;

function Item({ Paragraph, Img, isReverse }) {
  const ContainerBio = styled.div`
    display: flex;
    align-items: center;
    ${isReverse ? "flex-direction: row-reverse;" : "flex-direction:row;"}
    justify-content:center;
  `;

  const ContainerBioResponsive = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  `;

  const ImgContainer = styled.img`
    border-radius: 5px;
    width: ${isMobile ? "100%" : "20%"};
    height: ${isMobile ? "100%" : "15%"};
    margin: ${isMobile ? "1rem 0;" : "0 1rem;"};
    justify-content: center;
  `;
  return (
    <>
      {isMobile ? (
        <ContainerBioResponsive>
          {Paragraph && <Paragraphs>{Paragraph}</Paragraphs>}
          {Img && <ImgContainer src={Img}></ImgContainer>}
        </ContainerBioResponsive>
      ) : (
        <ContainerBio>
          {Paragraph && <Paragraphs>{Paragraph}</Paragraphs>}
          {Img && <ImgContainer src={Img}></ImgContainer>}
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
              Paragraph={e.Paragraph}
              isReverse={e.isReverse}
              Img={e.Img}
            />
          ))}
        </MainContainer>
      </>

      <Redes />
    </MainContent>
  );
};

export default BioNavigation;
