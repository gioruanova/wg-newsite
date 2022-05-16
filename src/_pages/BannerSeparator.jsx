import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import AOS from "aos";
import "aos/dist/aos.css";
import Icons from "../_components/Icons";
import { ExternalLinks } from "../_components/Styles";

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SeparadorBanner = styled.div`
  background-color: ${(props) => props.theme.mainTitlesColor};
  width: 100%;
  border-radius: 0.2rem;
  margin: 2rem 0;
  padding: 0 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px solid;
  transition: 400ms;
  svg {
    stroke: white;
  }
  &:hover {
    svg {
      stroke: ${(props) => props.theme.hoverStrokeIcons};
    }
    h1 {
      color: ${(props) => props.theme.hoverStrokeIcons};
    }
  }
`;

const BannerText = styled.h1`
  transition: 400ms;
  color: white;
  font-size: ${isMobile ? "1rem" : "1.8rem"};
  font-family: ${(props) => props.theme.generalFont};
  margin: 0;
  text-transform: initial;
`;

AOS.init();

const BannerSeparator = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <Carousel indicators={false} controls={false} interval={3000}>
        <Carousel.Item>
          <ExternalLinks
            href="https://www.patreon.com/bePatron?u=38804295"
            rel="noreferrer"
            target="_blank"
            title="Patreon"
            aria-label="Patreon"
          >
            <SeparadorBanner>
              <div>
                <BannerText>Se sponsor en Patreon</BannerText>
              </div>
              <Icons name="patreon" />
            </SeparadorBanner>
          </ExternalLinks>
        </Carousel.Item>

        <Carousel.Item>
          <ExternalLinks
            href="https://www.youtube.com/c/WalterGandini"
            rel="noreferrer"
            target="_blank"
            title="YouTube"
            aria-label="YouTube"
          >
            <SeparadorBanner>
              <div>
                <BannerText>Suscribíte al canal de</BannerText>
              </div>
              <Icons name="youtube" />
            </SeparadorBanner>
          </ExternalLinks>
        </Carousel.Item>

        <Carousel.Item>
          <ExternalLinks
            href="https://open.spotify.com/artist/6AxS0nhTn6xwtTIBjUkeyh?si=msTwOLnETJOyEof6nsaxrg&nd=1"
            rel="noreferrer"
            target="_blank"
            title="Spotify"
            aria-label="Spotify"
          >
            <SeparadorBanner>
              <div>
                <BannerText>Escuchá su trabajo en </BannerText>
              </div>
              <Icons name="spotify" />
            </SeparadorBanner>
          </ExternalLinks>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BannerSeparator;

//------------------------------------------------------------------------------------------------------------------------------------------------
