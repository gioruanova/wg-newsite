import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { isMobile } from "react-device-detect";

const IconWrapper = styled.div`
  padding: ${isMobile ? "0.5rem 0.4rem;" : "0.3rem 0.5rem;"}
  &:hover{
      transition:1s;
  }
  svg {
    display: flex;
    align-items: center;
    width: ${isMobile ? "1.3rem;" : "1.8rem;"}
    height: ${isMobile ? "1.3rem;" : "1.8rem;"}
    stroke:${(props) => props.theme.strokeIcons};
    fill:${(props) => props.theme.fillIcons};
    transition:600ms;
     &:hover{
      fill:${(props) => props.theme.hoverFillIcons};
      stroke:${(props) => props.theme.hoverStrokeIcons};
       
  }
}
`;

const Menu = styled(IconWrapper)`
  }
  svg {
  
    stroke:${(props) => props.theme.navigationLinksColor};
    fill:${(props) => props.theme.navigationLinksColor};

}
`;
const IconWrapperDark = styled.div`
  svg {
    display: flex;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    stroke: #a58959;
    fill: ${(props) => props.theme.fillIcons};
  }
`;
const IconWrapperLight = styled.div`
  svg {
    display: flex;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    fill: #a58959;
    stroke: #272a2d;
    stroke-width: 1;
  }
`;

const IconWrapper2 = styled.div`
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
  
  transition:600ms;
  
  &:hover{
    
    stroke:${(props) => props.theme.hoverStrokeIcons};
      
}
}
`;

export default function Icons({ name }) {
  switch (name) {
    //-----------------------------------
    //NAVBAR
    case "burgeropen":
      return (
        <Menu>
          <ReactSVG src="_assets/_icons/burger.svg" />
        </Menu>
      );

    case "burgerclosed":
      return (
        <Menu>
          <ReactSVG src="_assets/_icons/cross.svg" />
        </Menu>
      );
    //-----------------------------------
    //REDES
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
    //-----------------------------------
    //RIGHT-PANEL
    case "home":
      return (
        <IconWrapper>
          <ReactSVG src="_assets/_icons/home.svg" />
        </IconWrapper>
      );
    case "top":
      return (
        <IconWrapper>
          <ReactSVG src="_assets/_icons/arrowtop.svg" />
        </IconWrapper>
      );
    case "whatsapp":
      return (
        <IconWrapper>
          <ReactSVG src="_assets/_icons/whatsapp.svg" />
        </IconWrapper>
      );
    //-----------------------------------
    //THEME_SELECTOR
    case "dark":
      return (
        <IconWrapperDark>
          <ReactSVG src="_assets/_icons/dark.svg" />
        </IconWrapperDark>
      );
    case "light":
      return (
        <IconWrapperLight>
          <ReactSVG src="_assets/_icons/light.svg" />
        </IconWrapperLight>
      );
    //-----------------------------------
    //MISC
    case "showmore":
      return (
        <IconWrapper>
          <ReactSVG src="_assets/_icons/plus.svg" />
        </IconWrapper>
      );
    case "toggleright":
      return (
        <IconWrapper2>
          <ReactSVG src="_assets/_icons/right_toggle.svg" />
        </IconWrapper2>
      );
    case "toggleleft":
      return (
        <IconWrapper2>
          <ReactSVG src="_assets/_icons/left_toggle.svg" />
        </IconWrapper2>
      );
    //-----------------------------------
    //DEFAULT
    default:
      return (
        <IconWrapper>
          <ReactSVG src="_icons/error.svg" />
        </IconWrapper>
      );
  }
}
