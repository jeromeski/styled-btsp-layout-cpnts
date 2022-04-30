import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./assets/global-styles";
import { Container } from "./components/Container";
import { Row } from "./components/Row";
import { defaultTheme } from "./site-settings/site-theme/defaults";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <Container>
          <Row>
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
          </Row>
        </Container>
      </div>
      <GlobalStyles />
    </ThemeProvider>
  );
}
