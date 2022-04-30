import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./assets/global-styles";
import { defaultTheme } from "./site-settings/site-theme/defaults";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <GlobalStyles />
    </ThemeProvider>
  );
}
