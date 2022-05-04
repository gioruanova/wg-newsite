import { createGlobalStyle } from "styled-components";

export const DarkTheme = {
  id: "DarkTheme",
  generalFont: "'Cairo', sans-serif;",
  generalBackground: "#272A2D;",
  colorLines: "#847A65;",

  mainTitlesColor: "#847A65;",
  sizeMaintTitles: "2rem;",
  sizeSubtitles: "1.2rem;",

  generalTextColor: "#C5C5C5;",

  navigationLinksColor: "#847A65;",
  navigationLinksColorBack: "black;",
  sizeNavigationLinks: "0.9rem;",

  backgroundButtons: "#555555;",
  textButtonsColor: "#FFFFFF;",
  hooverLinks: "#D8D8D8;",
  tattooStudioTitle: "'Updock', cursive;",
  tattooStudioTitleColor: "#D8D8D8;",

  backgroundIcons: "#6d6d6d",
  strokeIcons: "#a58959;",
  fillIcons: "#d1d1d1",
  hoverStrokeIcons: "#d1d1d1;",
  hoverFillIcons: "#a58959;",
};

export const LightTheme = {
  id: "LightTheme",
  generalFont: "'Cairo', sans-serif;",
  generalBackground: "#c0c0c0;",
  colorLines: "#493f2b;",

  mainTitlesColor: "#493f2b;",
  sizeMaintTitles: "2rem;",
  sizeSubtitles: "1.2rem;",

  generalTextColor: "#0a0a0a;",

  navigationLinksColor: "#493f2b;",
  navigationLinksColorBack: "white;",
  sizeNavigationLinks: "0.9rem;",

  backgroundButtons: "#555555;",
  textButtonsColor: "#FFFFFF;",
  hooverLinks: "#343A40;",
  tattooStudioTitle: "'Updock', cursive;",
  tattooStudioTitleColor: "#343A40;",

  backgroundIcons: "#272A2D;",
  strokeIcons: "#493f2b;",
  fillIcons: "#d1d1d1;",
  hoverStrokeIcons: "#d1d1d1;",
  hoverFillIcons: "#a58959;",
};

export const GlobalStyles = createGlobalStyle`

`;
