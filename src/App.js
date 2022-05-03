import { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme, GlobalStyles } from "./_components/themes";
import { ContaininerTheme } from "./_components/Styles";

import DesktopLayout from "./_layout/DesktopLayout"
import LoaderInitial from "./_components/LoaderInitial";



function App() {
  const [show, setShow] = useState(false);
  setTimeout(() => {
    setShow(true);
    console.log("show");
  }, 2500);

  const [theme, setTheme] = useState("dark");
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');


  };
  return (
    <>
      {show ? <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <GlobalStyles />
        <DesktopLayout />

        <ContaininerTheme>
          <label className="switch">
            {" "}
            <input type="checkbox" />
            <span className="slider round" onClick={() => themeToggler()}></span>
          </label>
        </ContaininerTheme>
      </ThemeProvider> : <LoaderInitial></LoaderInitial>}

    </>
  );
}

export default App;
