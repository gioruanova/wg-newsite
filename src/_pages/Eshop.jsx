import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import AOS from "aos";
import "aos/dist/aos.css";

import { Content, Titles } from "../_components/Styles";
import { EshopArray } from "../_components/Messages";

const BioContainer = styled.div`
  display: grid;
  ${isMobile ? "grid-template-row: 1fr ;" : "grid-template-columns: 1fr ;"}
  justify-items: center;
  align-items: center;
  margin-bottom: 3rem;
`;

export const Paragraphs = styled.p`
  color: ${(props) => props.theme.generalTextColor};
  font-size: ${isMobile ? "0.8rem;" : "1rem;"}
  font-family: ${(props) => props.theme.generalTextFont};
  margin: 0;
  font-weight: 400;
    transition: 1s;
    line-height: 1.5rem;
    word-break: break-word;
    word-spacing: 0.1rem;
    text-align:center;
`;

AOS.init();

function Item({ img }) {
  const ImgContainer = styled.div`
    transition: 1s;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    border-color: none;
    width: 100%;
    height: 20rem;
    margin: 1rem;
    border-radius: 5px;
  `;
  return (
    <BioContainer>
      <ImgContainer img={img}></ImgContainer>
    </BioContainer>
  );
}

const Eshop = () => {
  const RandomNumber =
    EshopArray.length - Math.floor(Math.random() * EshopArray.length);
  const RandomNumber2 = RandomNumber - 1;

  return (
    <div
      id="EshopDetail"
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <Content>
        <Titles>E-Shop</Titles>

        <div>
          {EshopArray.slice(RandomNumber2, RandomNumber).map(
            (e, EshopImage) => (
              <Item key={EshopImage} img={e.EshopImage} />
            )
          )}
        </div>

        <Paragraphs>
          Próximamente, disponibles obras y trabajos a la venta.
        </Paragraphs>
      </Content>
    </div>
  );
};

export default Eshop;
