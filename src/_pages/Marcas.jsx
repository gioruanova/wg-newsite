import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { Content } from "../_components/Styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { Sponsors } from "../_components/Messages";

const SponsorsContainer = styled.div`
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

const SponsorImage = styled.img`
  width: 70%;
`;

AOS.init();

function Item({ SponsorId, SponsorImg, SponsorUrl, SponsorTitle }) {
  return (
    <>
      <a href={SponsorUrl} target="_blank" rel="noreferrer" title={SponsorTitle}>
        <SponsorImage src={SponsorImg} />
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
        <SponsorsContainer>
          {Sponsors.map((e, SponsorId, SponsorImg, SponsorUrl, SponsorTitle) => (
            <Item key={SponsorId} SponsorImg={e.SponsorImg} SponsorUrl={e.SponsorUrl} SponsorTitle={e.SponsorTitle} />
          ))}
        </SponsorsContainer>
      </>
    </Content>
  );
};

export default Marcas;
