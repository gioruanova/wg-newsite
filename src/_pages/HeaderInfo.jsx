import React from "react";
import { Content } from "../_components/Styles";

import styled from "styled-components";
import { isMobile } from "react-device-detect";
import HeaderImg from "../_images/HeaderImg.jpeg";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: end;
  justify-content: center;
  gap: ${isMobile ? "0.5rem" : "1rem"};
  transition: 1s;
  margin-top: 4rem;
`;

const MainHeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  justify-content: center;
  gap: 1rem;
`;

const Titles = styled.h1`
  color: ${(props) => props.theme.mainTitlesColor};
  font-size: ${isMobile ? "2rem;" : "3rem;"};
  font-family: ${(props) => props.theme.generalTextFont};
  margin: 0;
  text-transform: uppercase;
  transition: 1s;
  line-height: 2.5rem;
  margin: ${isMobile ? "0 0 1rem 0;" : ""};
`;

const MainHeaderSubTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  justify-content: center;
`;

const MainHeaderSubTitle = styled.p`
  color: ${(props) => props.theme.generalTextColor};
  font-size: ${isMobile ? "1.5rem;" : "2rem;"}
  font-family: ${(props) => props.theme.generalTextFont};
  margin: 0;
  font-weight: 400;
  transition: 1s;
  line-height: ${isMobile ? "2rem" : "1.7rem"};
   
`;

const ImgContainer = styled.img`
  border-radius: 10px;
  width: ${isMobile ? "10rem" : "15%"};
`;

const HeaderInfo = () => {
  return (
    <Content className="animate__animated animate__fadeIn animate__delay-0.5s">
      {isMobile ? (
        <>
          <div>
            <Titles>Walter Gandini </Titles>
          </div>
        </>
      ) : (
        ""
      )}
      <HeaderContainer>
        <MainHeaderTitle>
          {isMobile ? (
            ""
          ) : (
            <>
              <div>
                <Titles>Walter</Titles>
                <Titles>Gandini</Titles>
              </div>
            </>
          )}
          <MainHeaderSubTitleContainer>
            <MainHeaderSubTitle>Musica</MainHeaderSubTitle>
            <MainHeaderSubTitle>Tatuaje</MainHeaderSubTitle>
            <MainHeaderSubTitle>Pintura</MainHeaderSubTitle>
            <MainHeaderSubTitle>Plastica</MainHeaderSubTitle>
          </MainHeaderSubTitleContainer>
        </MainHeaderTitle>

        <ImgContainer src={HeaderImg} />
      </HeaderContainer>
    </Content>
  );
};

export default HeaderInfo;
