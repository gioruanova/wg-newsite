import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { Content } from "../_components/Styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { MarcasArray } from "../_components/Messages";

const MarcasContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  display: -webkit-flex;
  flex-flow: wrap;
  -webkit-flex-flow: wrap;
  justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  gap: 1rem;
  flex-direction: ${isMobile ? "column" : "row"};
`;

const MarcasImg = styled.img`
  width: 70%;
`;

AOS.init();

function Item({ id, img, url, title }) {
  return (
    <>
      <a href={url} target="_blank" rel="noreferrer" title={title}>
        <MarcasImg src={img} />
      </a>
    </>
  );
}

const Marcas = () => {
  return (
    <Content
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <>
        <MarcasContainer>
          {MarcasArray.map((e, id, img, url, title) => (
            <Item key={id} img={e.img} url={e.url} title={e.title} />
          ))}
        </MarcasContainer>
      </>
    </Content>
  );
};

export default Marcas;
