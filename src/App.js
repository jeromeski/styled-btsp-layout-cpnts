import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./assets/global-styles";
import { Col } from "./components/Col";
import { Container } from "./components/Container";
import { Row } from "./components/Row";
import { defaultTheme } from "./site-settings/site-theme/defaults";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <Container full>
          <Row>
            <Col xs={2} sm={4} md={6} lg={12} bg={"blue.regular"}>
              <h3>Col</h3>
            </Col>
            <Col xs={2} sm={4} md={6} lg={12} bg={"yellow.regular"}>
              <h3>Col</h3>
            </Col>
            <Col xs={2} sm={4} md={6} lg={12} bg={"red"}>
              <h3>Col</h3>
            </Col>
          </Row>
        </Container>
      </div>
      <GlobalStyles />
    </ThemeProvider>
  );
}
