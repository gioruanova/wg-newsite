import React, { useEffect } from "react";
import {
  Content,
  InternalLinks,
  Titles,
  Paragraphs,
} from "../_components/Styles";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

import styled from "styled-components";
import { isMobile } from "react-device-detect";

import MusicSection from "../_images/MusicSection.jpg";
import { MusicData } from "../_components/Messages";

const MusicContainer = styled.div`
  display: grid;
  ${isMobile ? "grid-template-row: 1fr 2fr;" : "grid-template-columns:1fr 2fr;"}
  justify-items: center;
  align-items: center;
`;

const ImgContainer = styled.img`
  border-radius: 10px;
  width: ${isMobile ? "100%" : "70%"};
  margin: 0 0 2rem 0;
`;

const MusicaTextContainer = styled.div`
padding: ${isMobile ? "" : "0 1rem;"}
text-align: justify;
p {
  text-align: justify;
}
`;





function Item({ Paragraph }) {
  return (
    <>
      <>
        <>
          <></>
        </>
        <>
          <div>
            <Paragraphs>{Paragraph}</Paragraphs>
          </div>
        </>
      </>
    </>
  );
}






AOS.init();

const Musica = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <Content
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="900"
      data-aos-easing="ease-in-out"
    >
      <Titles>Musica</Titles>
      <MusicContainer>
        <ImgContainer src={MusicSection} />
        <MusicaTextContainer>
        <div>
                {MusicData.slice(0, 1).map((e, Bio) => (
                  <Item key={Bio} Paragraph={e.Paragraph} />
                ))}
              </div>
              <div>
                {MusicData.slice(4, 5).map((e, Bio) => (
                  <Item key={Bio} Paragraph={e.Paragraph} />
                ))}
              </div>
        </MusicaTextContainer>
      </MusicContainer>
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <InternalLinks to="/musicanavigation"> Ver Mas{" >"} </InternalLinks>
      </div>
    </Content>
  );
};

export default Musica;
