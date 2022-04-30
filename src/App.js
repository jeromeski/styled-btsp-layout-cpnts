import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./site-settings/site-theme/defaults";

import "./styles.css";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </ThemeProvider>
  );
}
