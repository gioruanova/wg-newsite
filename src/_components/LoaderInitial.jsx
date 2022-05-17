import React from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

// ------------------------------------------------------------

const Background = styled.div`
  background-color: #1b1b1b;
  height: 100vh;
  position: fixed;
  overflow-y: none;
  width: 100%;
  text-align: center;
  transition: 1s;
`;

const LoaderComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: auto;
  justify-content: center;
  align-content: flex-start;
  gap: 1rem;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const Titles = styled.h1`
  color: #ad9a72;
  font-size: ${isMobile ? "4.5rem" : "5rem"};
  margin: 0;
  font-weight: 500;
  font-family: "Updock", cursive;
  color: ${(props) => props.theme.mainTitlesColor};
`;
const Titles1 = styled.h1`
  color: white;
  font-size: ${isMobile ? "4.5rem" : "5rem"};
  margin: 0;
  font-weight: 100;
  font-family: "Updock", cursive;
  color: ${(props) => props.theme.mainTitlesColor};
`;

const SubTitles = styled(Titles)`
  color: White;
  font-size: ${isMobile ? "0.8rem;" : "1.2rem;"}
  font-family: "Lato", sans-serif;
  margin: 0;
  text-transform: uppercase;
  font-weight: 300;
  word-spacing: ${isMobile ? "5px" : "10px"};
`;

AOS.init();
export default function LoaderInitial() {
  return (
    <div>
      <Background className="animate__animated animate__fadeIn ">
        <LoaderComponent>
          <TitleDiv
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <Titles1>Walter</Titles1>
            <Titles>
              <b>Gandini</b>
            </Titles>
          </TitleDiv>
          <SubTitles
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            Musica - Tatuaje - Pintura - Plastica
          </SubTitles>
        </LoaderComponent>
      </Background>
    </div>
  );
}
