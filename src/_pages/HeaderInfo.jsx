import React, { useEffect } from "react";
import { Content } from "../_components/Styles";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import HeaderPicture from "../_images/HeaderPicture.jpeg";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: end;
  justify-content: center;
  gap: ${isMobile ? "0.5rem" : "1rem"};
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
  font-family: ${(props) => props.theme.generalFont};
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
  font-family: ${(props) => props.theme.generalFont};
  margin: 0;
  font-weight: 400;
  transition: 1s;
  line-height: ${isMobile ? "2rem" : "1.7rem"};
   
`;

const PictureContainer = styled.img`
  border-radius: 10px;
  width: ${isMobile ? "10rem" : "15%"};
`;

AOS.init();

const HeaderInfo = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <Content
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
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

        <PictureContainer src={HeaderPicture} />
      </HeaderContainer>
    </Content>
  );
};

export default HeaderInfo;
