import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import AOS from "aos";
import "aos/dist/aos.css";
import Icons from "../_components/Icons";
import { ExternalLinks } from "../_components/Styles";

const SeparadorBanner = styled.div`
  color: ${(props) => props.theme.mainTitlesColor};
  &:hover {
    color: white;
  }
  transition: 400ms;
  font-size: ${isMobile ? "1rem" : "1.8rem"};
  font-family: ${(props) => props.theme.generalFont};
  background-color: #5b5b5b85;
  text-transform: initial;
  width: 100%;
  height: 5rem;
  border-radius: 05rem;
  margin: 5rem 0;
  padding: 0 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px solid;
  transition: 400ms;
  &:hover {
    border: 2px solid ${(props) => props.theme.hooverLinks};
  }
  &:hover {
    svg {
      stroke: ${(props) => props.theme.hoverStrokeIcons};
    }
  }
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
      <>
        <ExternalLinks
          href="https://www.patreon.com/bePatron?u=38804295"
          rel="noreferrer"
          target="_blank"
          title="Patreon"
          aria-label="Patreon"
        >
          <SeparadorBanner>
            {" "}
            Se Sponsor en Patreon
            <Icons name="patreon" />
          </SeparadorBanner>
        </ExternalLinks>
      </>
    </div>
  );
};

export default BannerSeparator;

//------------------------------------------------------------------------------------------------------------------------------------------------
