import React from "react";
import Footer from "../_components/Footer";
import NavBar from "../_components/NavBar";
import RoutesData from "../_components/RoutesData";

import {
  BackgroundComponent,
  Redescontainer,
  RightPanelContainer,
} from "../_components/Styles";



const DesktopLayout = () => {
  return (
    <BackgroundComponent
      className="animate__animated animate__fadeIn animate__delay-0.8s"
      id="TopContent"
    >
      <NavBar />
      <RoutesData />
      <Footer />
      <Redescontainer />
      <RightPanelContainer />
    </BackgroundComponent>
  );
};

export default DesktopLayout;
