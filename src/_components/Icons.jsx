import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { isMobile } from "react-device-detect";

const IconWrapper = styled.div`
  padding: ${isMobile ? "0.4rem 0.3rem;" : "0.5rem 0.5rem;"}
  &:hover{
      transition:1s;
  }

  svg {
    display: flex;
    align-items: center;
    width: ${isMobile ? "1.3rem;" : "2rem;"}
    height: ${isMobile ? "1.3rem;" : "2rem;"}
    stroke:${(props) => props.theme.strokeIcons};
    fill:${(props) => props.theme.fillIcons};
    transition:600ms;
    
    &:hover{
      fill:${(props) => props.theme.hoverFillIcons};
      stroke:${(props) => props.theme.hoverStrokeIcons};
      
    
  }
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
        <IconWrapper>
          <ReactSVG src="_assets/_icons/whatsapp.svg" />
        </IconWrapper>
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
