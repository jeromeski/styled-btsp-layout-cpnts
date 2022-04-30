import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./assets/global-styles";
import { Container } from "./components/Container";
import { defaultTheme } from "./site-settings/site-theme/defaults";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <Container type="normal">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </Container>
      </div>
      <GlobalStyles />
    </ThemeProvider>
  );
}
