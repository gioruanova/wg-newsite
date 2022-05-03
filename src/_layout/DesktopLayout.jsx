import React from "react";
import Footer from "../_components/Footer";
import NavBar from "../_components/NavBar";
import RoutesData from "../_components/RoutesData";
import { BackgroundComponent } from "../_components/Styles";

const DesktopLayout = () => {
  return (
    <BackgroundComponent id="TopContent">
      <NavBar />
      <RoutesData />
      <Footer />
    </BackgroundComponent>
  );
};

export default DesktopLayout;
