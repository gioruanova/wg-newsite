import { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme, GlobalStyles } from "./_components/themes";
import { Redescontainer, RightPanelContainer, ContaininerTheme } from "./_components/Styles";

import DesktopLayout from "./_layout/DesktopLayout"



function App() {
  const [theme, setTheme] = useState("dark");
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');


  };
  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <GlobalStyles />
      <DesktopLayout />

      <ContaininerTheme>
        <label className="switch">
          {" "}
          <input type="checkbox" />
          <span className="slider round" onClick={() => themeToggler()}></span>
        </label>
      </ContaininerTheme>
      <Redescontainer />
      <RightPanelContainer />

    </ThemeProvider>
  );
}

export default App;
