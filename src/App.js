import { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme, GlobalStyles } from "./_components/themes";
import { ContaininerTheme, ContaininerTheme2 } from "./_components/Styles";

import DesktopLayout from "./_layout/DesktopLayout"
import LoaderInitial from "./_components/LoaderInitial";
import Icons from './_components/Icons';
import ScrollToTop from "./_components/ScrollToTop";




function App() {
  const [show, setShow] = useState(false);
  setTimeout(() => {
    setShow(true);

  }, 4);

  const [theme, setTheme] = useState("dark");
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');


  };
  return (
    <>
      {show ? <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <GlobalStyles />
        <ScrollToTop />
        <DesktopLayout />

        <ContaininerTheme className="animate__animated animate__fadeIn animate__delay-1s">
          <label className="switch">
            {" "}
            <input type="checkbox" />
            <span className="slider round" onClick={() => themeToggler()}><ContaininerTheme2><Icons name="dark" /><Icons name="light" /></ContaininerTheme2></span>
          </label>
        </ContaininerTheme>
      </ThemeProvider> : <LoaderInitial></LoaderInitial>}

    </>
  );
}



export default App;
