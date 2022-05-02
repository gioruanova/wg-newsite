import { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme, GlobalStyles } from "./_components/themes";
import styled from "styled-components";
import DesktopLayout from "./_layout/DesktopLayout"


const ContaininerTheme = styled.div`
position: fixed;
top: 1rem;
right: 1.5rem;
color:red;
z-index:9999;
`;



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
    </ThemeProvider>
  );
}

export default App;
