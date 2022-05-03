import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { isMobile } from "react-device-detect";

const IconWrapper = styled.div`
  padding: ${isMobile ? "0.4rem 0.2rem;" : "0.5rem 0.5rem;"}
  transition: 0.5s;
  svg {
    transition: 0.5s;
    display: flex;
    align-items: center;
    width: ${isMobile ? "1.3rem;" : "1.5rem;"}
    height: ${isMobile ? "1.3rem;" : "1.5rem;"}
    fill: ${(props) => props.theme.iconColor};
    &:hover {
      fill: #534224;
    }
  }
`;

const IconWrapperFixed = styled(IconWrapper)`
  svg {
    width: ${isMobile ? "1.5rem;" : "1.8rem;"}
    height: ${isMobile ? "1.5rem;" : "1.8rem;"}
  }
`;

export default function Icons({ name }) {
  switch (name) {
    case "burgeropen":
      return (
        <IconWrapper>
          <ReactSVG src="_assets/_icons/burger.svg" />
        </IconWrapper>
      );

    case "burgerclosed":
      return (
        <IconWrapper>
          <ReactSVG src="_assets/_icons/cross.svg" />
        </IconWrapper>
      );

    case "patreon":
      return (
        <IconWrapper>
          <ReactSVG src="_assets/_icons/patreon.svg" />
        </IconWrapper>
      );

    case "spotify":
      return (
        <IconWrapper>
          <ReactSVG src="_assets/_icons/spotify.svg" />
        </IconWrapper>
      );

    case "instagram":
      return (
        <IconWrapper>
          <ReactSVG src="_assets/_icons/instagram.svg" />
        </IconWrapper>
      );

    case "youtube":
      return (
        <IconWrapper>
          <ReactSVG src="_assets/_icons/youtube.svg" />
        </IconWrapper>
      );

    case "facebook":
      return (
        <IconWrapper>
          <ReactSVG src="_assets/_icons/facebook.svg" />
        </IconWrapper>
      );
    case "whatsapp":
      return (
        <IconWrapperFixed>
          <ReactSVG src="_assets/_icons/whatsapp.svg" />
        </IconWrapperFixed>
      );
    case "top":
      return (
        <IconWrapper>
          <ReactSVG src="_assets/_icons/arrowtop.svg" />
        </IconWrapper>
      );
    case "home":
      return (
        <IconWrapper>
          <ReactSVG src="_assets/_icons/home.svg" />
        </IconWrapper>
      );

    default:
      return (
        <IconWrapper>
          <ReactSVG src="_icons/error.svg" />
        </IconWrapper>
      );
  }
}
